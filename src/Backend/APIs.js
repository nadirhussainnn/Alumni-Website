const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");
const fileupload = require("express-fileupload");

const port = 5000;

const conString = {
  host: "localhost",
  user: "root",
  password: "",
  database: "alumnidb",
};

const con = mysql.createConnection(conString);

app.use(cors());
app.use(express.json());
app.use(fileupload());
//Use this folder as public i.e we can access it's resources from API call directly like localhost:5000/ProfileImages/xyz.png

app.use("/ProfileImages", express.static(__dirname + "/ProfileImages"));

app.post("/api/login", (req, res) => {
  const email = req.body.email;
  const pass = req.body.pass;

  con.query(
    `SELECT * from admin WHERE email= ? AND password= ?`,
    [email, pass],
    (err, row, col) => {
      if (err) res.send("Network error occured!");
      if (row) {
        res.send(JSON.stringify(row));
      } else res.send({ message: "No user Found" });
    }
  );
});

app.get("/api/loadAllMembers", (req, res) => {
  con.query(`SELECT * from alumni`, (err, row, col) => {
    if (err) res.send("Network error occured!");

    if (row) {
      const fs = require("fs");
      const directoryPath = "ProfileImages";
      let images = [];
      fs.readdir(directoryPath, function (err, files) {
        if (err) {
          return console.log("Unable to scan directory: " + err);
        }

        for (let i = 0; i < row.length; i++) {
          files.forEach(function (file) {
            if (file == row[i].profileImage) {
              images.push("http://localhost:5000/ProfileImages/" + file);
            }
          });
        }

        res.send({
          data: row,
          image: images,
        });
      });
    } else res.send({ message: "No user Found" });
  });
});

app.get("/api/statistics", (req, res) => {

  let total = 0;
  let employeed = 0;
  let unemployeed = 0;
  let phds = 0;
  let masters = 0;
  let bachelors = 0;

  con.query(`SELECT * from alumni`, (err, row, col) => {
    if (err) res.send("Network error occured!");

    if (row) {
      total = row.length;

      for (let i = 0; i < row.length; i++) {
        let education = row[i].education.split(",");

        education.forEach((element) => {
          if (element.startsWith("BS") || element.startsWith("BBA")) {
            bachelors++;
          } else if (element.startsWith("MS")) {
            masters++;
          } else if (element.startsWith("Phd")) {
            phds++;
          }
        });
        employeed += row[i].isHired === 1 ? 1 : 0;
        unemployeed = total - employeed;
      }
      res.send({ total, employeed, unemployeed, phds, masters, bachelors });
    } else res.send({ message: "No user Found" });
  });
});

app.get("/api/recentlyAdded", (req, res) => {

  con.query(`SELECT * from alumni LIMIT 5`, (err, row, col) => {
    if (err) res.send("Network error occured!");
    if (row) {
      const fs = require("fs");
      const directoryPath = "ProfileImages";
      let images = [];
      fs.readdir(directoryPath, function (err, files) {
        if (err) {
          return console.log("Unable to scan directory: " + err);
        }

        for (let i = 0; i < row.length; i++) {
          files.forEach(function (file) {
            if (file == row[i].profileImage) {
              images.push("http://localhost:5000/ProfileImages/" + file);
            }
          });
        }

        res.send({
          data: row,
          image: images,
        });
      });
    } else res.send({ message: "No user Found" });
  });
});


app.post("/api/addAlumni", (req, res) => {
  let file = req.files.image;

  const cmsID = req.body.cmsId;
  const fullName = req.body.fullName;
  const email = req.body.email;
  const department = req.body.department;
  const gender = req.body.gender;
  const dateOfBirth = req.body.dateOfBirth;
  const address = req.body.address;
  const contact = req.body.contact;
  const skillArray = req.body.skills;
  const educationArray = req.body.education;
  const empStatus = req.body.empStatus;

  const extension = file.name.substring(file.name.length - 4, file.name.length);

  con.query(
    "INSERT INTO alumni VALUES (?, ?, ?, ?, ?, ?, ?, ?,?,?,?,?) ",
    [
      cmsID,
      fullName,
      email,
      department,
      gender,
      dateOfBirth,
      address,
      contact,
      cmsID + extension, //Store file name as per cms id of user
      skillArray,
      educationArray,
      empStatus,
    ],
    (err, result) => {
      if (err) console.log(err);
      else {
        file.mv("ProfileImages/" + cmsID + extension, (error, result) => {
          if (error) throw error;
          else {
            res.send(
              JSON.stringify({
                success: true,
              })
            );
          }
        });
      }
    }
  );
});

const fs = require("fs-extra");

//delete Alumni
app.post("/api/deleteAlumniMember", (req, res) => {
  const cms = req.body.cms;

  con.query(
    `SELECT profileImage from alumni WHERE cmsId= ?`,
    [cms],
    (err, row, col) => {
      if (err) res.send("Network error occured!");
      if (row) {
        let imgAddress = row[0].profileImage;

        if (imgAddress) {
          console.log(imgAddress);
          fs.remove("ProfileImages/" + imgAddress)
            .then(() => {
              console.log("success!");
            })
            .catch((err) => {
              console.error(err);
            });

          con.query(
            `DELETE from alumni WHERE cmsId= ?`,
            [cms],
            (err, row, col) => {
              if (err) res.send("Network error occured!");
              if (row) {
                res.send(JSON.stringify({ success: true }));
              } else res.send({ message: "No user Found" });
            }
          );
        }
      } else res.send({ message: "No user Found" });
    }
  );
});

// //Search Alumni

app.post("/api/searchAlumni", (req, res) => {
  const cms = req.body.cms;

  con.query(`SELECT * from alumni WHERE cmsId=?`, [cms], (err, row, col) => {
    if (err) res.send("Network error occured!");

    if (row) {
      const fs = require("fs");
      const directoryPath = "ProfileImages";
      let images = [];
      fs.readdir(directoryPath, function (err, files) {
        if (err) {
          return console.log("Unable to scan directory: " + err);
        }

        for (let i = 0; i < row.length; i++) {
          files.forEach(function (file) {
            if (file == row[i].profileImage) {
              images.push("http://localhost:5000/ProfileImages/" + file);
            }
          });
        }
        res.send({
          data: row,
          image: images,
        });
      });
    } else res.send({ message: "No user Found" });
  });
});

app.post("/api/update", (req, res) => {
  let file = req.files.image;
  const cmsID = req.body.cmsId;
  const fullName = req.body.fullName;
  const email = req.body.email;
  const department = req.body.department;
  const gender = req.body.gender;
  const dateOfBirth = req.body.dateOfBirth;
  const address = req.body.address;
  const contact = req.body.contact;
  const skillArray = req.body.skills;
  const educationArray = req.body.education;
  const empStatus = req.body.empStatus;

  const extension = file.name.substring(file.name.length - 4, file.name.length);

  con.query(
    "UPDATE alumni SET VALUES fullName=?, email=?, department=?, gender=?, dateofBirth=?, address=?, contact=?,profileImage=?, skills=?,education=?, isHired=? WHERE cmsId=?",
    [
      fullName,
      email,
      department,
      gender,
      dateOfBirth,
      address,
      contact,
      cmsID + extension, //Store file name as per cms id of user
      skillArray,
      educationArray,
      empStatus,
      cmsID,
    ],
    (err, result) => {
      if (err) console.log(err);
      else {
        file.mv("ProfileImages/" + cmsID + extension, (error, result) => {
          if (error) throw error;
          else {
            res.send(
              JSON.stringify({
                success: true,
              })
            );
          }
        });
      }
    }
  );
});

//ADD EVENT
app.post("/api/addEvent", (req, res) => {
  res.send("hello from simple server :)");
});

app.get("/api/viewUpcomingEvents", (req, res) => {
  res.send("hello from simple server :)");
});

app.listen(port, () => {
  console.log("Server has started at port " + port);
});
