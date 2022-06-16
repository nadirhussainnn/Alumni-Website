import React, { useState, useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import { Dropdown, Button } from "semantic-ui-react";
import { DropZone } from "./DropZone";
import Axios from "axios";

const URL = "http://localhost:5000/api";

export default class EditAlumni extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cmsId: "",
    };
    this.cmsHandler = this.cmsHandler.bind(this);
  }

  cmsHandler(cms) {
    this.setState({ cmsId: cms });
  }
  render() {
    return (
      <div class="container mt-4">
        <div class="ui grid mt-2 ms-2 p-4 mb-2">
          <div class="two wide column"></div>

          <div class="fourteen wide column">
            <h2>Search And Edit</h2>
            <SearchAlumni handleCms={this.cmsHandler} />
          </div>
          <div class="two wide column"></div>

          <div class="fourteen wide column">
            <Member cmsId={this.state.cmsId} />
          </div>
        </div>
      </div>
    );
  }
}

const options = [
  { key: "angular", text: "Angular", value: "Angular" },
  { key: "css", text: "CSS", value: "CSS" },
  { key: "design", text: "Graphic Design", value: "Graphic Design" },
  { key: "ember", text: "Ember", value: "Ember" },
  { key: "html", text: "HTML", value: "HTML" },
  {
    key: "ia",
    text: "Information Architecture",
    value: "Information Architecture",
  },
  { key: "javascript", text: "Javascript", value: "Javascript" },
  {
    key: "mech",
    text: "Mechanical Engineering",
    value: "Mechanical Engineering",
  },
  { key: "meteor", text: "Meteor", value: "Meteor" },
  { key: "node", text: "NodeJS", value: "NodeJS" },
  { key: "plumbing", text: "Plumbing", value: "Plumbing" },
  { key: "python", text: "Python", value: "Python" },
  { key: "rails", text: "Rails", value: "Rails" },
  { key: "react", text: "React", value: "React" },
  { key: "repair", text: "Kitchen Repair", value: "repair" },
  { key: "ruby", text: "Ruby", value: "Ruby" },
  { key: "ui", text: "UI Design", value: "UI Design" },
  { key: "ux", text: "User Experience", value: "User Experience" },
];

const educationOptions = [
  { key: "BSCS", text: "BS Computer Science", value: "BS Computer Science" },
  { key: "css", text: "BBA", value: "BBA" },
  {
    key: "design",
    text: "BS Software Engineering",
    value: "BS Software Engineering",
  },
  { key: "ember", text: "BS Mathematics", value: "BS Mathematics" },
  {
    key: "html",
    text: "BS Accounting & Finance",
    value: "BS Accounting & Finance",
  },
  {
    key: "ia",
    text: "Bachelor of Electrical Engineering",
    value: "Bachelor of Electrical Engineering",
  },
  {
    key: "javascript",
    text: "Bachelor of Education",
    value: "Bachelor of Education",
  },

  { key: "BSCS", text: "MS Computer Science", value: "MS Computer Science" },
  { key: "css", text: "MBA", value: "MBA" },
  {
    key: "design",
    text: "MS Software Engineering",
    value: "MS Software Engineering",
  },
  { key: "ember", text: "MS Mathematics", value: "MS Mathematics" },
  {
    key: "html",
    text: "MS Accounting & Finance",
    value: "MS Accounting & Finance",
  },
  {
    key: "ia",
    text: "MS Electrical Engineering",
    value: "MS Electrical Engineering",
  },
  {
    key: "javascript",
    text: "Master of Education",
    value: "Master of Education",
  },

  { key: "BSCS", text: "Phd Computer Science", value: "Phd Computer Science" },
  {
    key: "css",
    text: "Phd of Business Administration",
    value: "Phd of Business Administration",
  },
  {
    key: "design",
    text: "Phd in Software Engineering",
    value: "Phd in Software Engineering",
  },
  { key: "ember", text: "Phd in Mathematics", value: "Phd in Mathematics" },
  {
    key: "html",
    text: "Phd Accounting & Finance",
    value: "Phd Accounting & Finance",
  },
  {
    key: "ia",
    text: "Phd Electrical Engineering",
    value: "Phd Electrical Engineering",
  },
  { key: "javascript", text: "Phd in Education", value: "Phd in Education" },
];

const SkillsDropDown = (props) => {
  const handleDropDownSelect = (event, data) => {
    props.skillHandler(data.value);
  };

  return (
    <Dropdown
      placeholder="Skills"
      fluid
      multiple
      selection
      search
      options={options}
      onChange={handleDropDownSelect}
    />
  );
};

const empOptions = [
  { key: "NE", text: "Employeed", value: "Employeed" },
  { key: "EM", text: "Searching for Job", value: "Searching For Job" },
];

const EmploymentDropDown = (props) => {
  const handleDropDownSelect = (event, data) => {
    if (data.value === "Employeed") {
      props.employmentHandler(1);
    } else {
      props.employmentHandler(0);
    }
  };

  return (
    <Dropdown
      placeholder="Employment Status"
      fluid
      selection
      options={empOptions}
      onChange={handleDropDownSelect}
    />
  );
};

const EducationDropDown = (props) => {
  const handleDropDownSelect = (event, data) => {
    props.educationHandler(data.value);
  };

  return (
    <Dropdown
      placeholder="Education"
      fluid
      multiple
      selection
      search
      options={educationOptions}
      onChange={handleDropDownSelect}
    />
  );
};

const SearchAlumni = (props) => {
  const [search, setSearch] = useState();

  function handleSearch(evt) {
    const { value } = evt.target;
    props.handleCms(value);
    setSearch(value);
  }

  return (
    <div>
      <div class="ui search">
        <div class="ui icon input">
          <input
            class="prompt"
            type="text"
            value={search}
            placeholder="Search Alumni"
            onChange={handleSearch}
            
          />
          <i class="search icon"></i>
        </div>
        <div class="results"></div>
      </div>
    </div>
  );
};

const Member = (props) => {

    const [members, setMembers] = useState([]);

  const [cmsId, setCmsId] = useState();

  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [department, setDepartment] = useState();
  const [gender, setGender] = useState();
  const [dateOfBirth, setDateOfBirth] = useState();
  const [address, setAddress] = useState();
  const [contact, setContact] = useState();
  const [skills, setSkills] = useState([]);
  const [education, setEducation] = useState([]);
  const [profileImage, setProfileImage] = useState(null);
  const [employementStatus, setEmploymentStatus] = useState(0);

  useEffect(() => {
    fetch(`${URL}/loadAllMembers`)
      .then((resp) => resp.json())
      .then((result) => {
        const { data, image } = result;
        data.forEach((element, index) => {
          data[index]["profileImage"] = image[index];
        });
        setMembers(data);
      });
  }, [props.cmsId]);

  Axios.post(`${URL}/searchAlumni`, { cms: props.cmsId }).then((result) => {
    //Add image to object as well and operate on object
    if (result.data.data[0]) {
      result.data.data[0]["profileImage"] = result.data.image[0];
      const filteredArray = members.filter((member) => {
        return member.cmsId === props.cmsId;
      });

      //   setCmsId(filteredArray[0].cmsId)
      //   setFullName(filteredArray[0].fullName)
      //   setEmail(filteredArray[0].email)
      //   setDepartment(filteredArray[0].department)
      //   setGender(filteredArray[0].gender)
      //   setContact(filteredArray[0].contact)
      //   setDateOfBirth(filteredArray[0].dateOfBirth)
      //   setAddress(filteredArray[0].address)
      //   setProfileImage(filteredArray[0].profileImage)
      //   setEmploymentStatus(filteredArray[0].isHired)
      //   setSkills(filteredArray[0].skills)
      //   setEducation(filteredArray[0].education)
      setMembers(filteredArray);
    }
  });

  function handleEmploymentStatus(emp) {
    setEmploymentStatus(emp);
  }

  function handleSkills(sk) {
    setSkills([...sk]);
  }

  function handleEducation(ed) {
    setEducation([...ed]);
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    if (name === "fullName") {
      console.log(value);
      setFullName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "department") {
      setDepartment(value);
    } else if (name === "contact") {
      setContact(value);
    } else if (name === "dateOfBirth") {
      setDateOfBirth(value);
    } else if (name === "address") {
      setAddress(value);
    } else if (name === "employmentStatus") {
    } else if (name === "gender") {
      setGender(value);
    }
  }

  function handleProfileImage(img) {
    setProfileImage(img);
  }

  function handleSubmitData() {
    const formData = new FormData();
    formData.append("cmsId", cmsId);
    formData.append("fullName", fullName);
    formData.append("email", email);
    formData.append("department", department);
    formData.append("gender", gender);
    formData.append("dateOfBirth", dateOfBirth);
    formData.append("address", address);
    formData.append("contact", contact);
    formData.append("skills", skills);
    formData.append("education", education);
    formData.append("empStatus", employementStatus);
    formData.append("image", profileImage);
    Axios.post(`${URL}/update`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then((resp) => {
      if (resp) {
        alert("Updated Successfully");
      }
    });
  }

  return (
    <div class="ui three cards">
      {members
        ? members.map((itm) => {
            return (
              <div class="ms-4">
                <img class="ui avatar image" src={itm.profileImage} />
                <span>{itm.fullName}</span>

                <div class="ui grid ms-2 p-4">
                  <div class="two wide column"></div>

                  <div class="seven wide column border shadow-lg">
                    <form>
                      <div class="ui form">
                        <div class="field">
                          <label>Full Name</label>
                          <input
                            type="text"
                            data-ms-editor="true"
                            placeholder="Full Name"
                            name="fullName"
                            value={fullName}
                            onChange={handleInputChange}
                          />
                        </div>

                        <div class="field">
                          <label>Email</label>
                          <input
                            type="text"
                            data-ms-editor="true"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={handleInputChange}
                          />
                        </div>

                        <div class="field">
                          <label>CMS ID</label>
                          <input
                            type="text"
                            spellcheck="false"
                            name="cmsId"
                            data-ms-editor="true"
                            placeholder="CMS Id"
                            value={cmsId}
                            disabled
                            onChange={handleInputChange}
                          />
                        </div>

                        <div class="field">
                          <label>Department</label>
                          <select
                            class="ui search dropdown"
                            name="department"
                            value={department}
                            onChange={handleInputChange}
                          >
                            <option value="">Select Department</option>
                            <option value="Business Administration">
                              Business Administration
                            </option>
                            <option value="Computer Science" selected>
                              Computer Science
                            </option>
                            <option value="Software Engineering">
                              Software Engineering
                            </option>
                            <option value="Electrical Engineering">
                              Electrical Engineering
                            </option>
                            <option value="Bachelor of Mathematics">
                              Bachelor of Mathematics
                            </option>
                            <option value="Bachelor of Education">
                              Bachelor of Education
                            </option>
                            <option value="Accounting and Finance">
                              Accounting and Finance
                            </option>
                          </select>
                        </div>

                        <div class="field">
                          <label>Contact Number</label>
                          <input
                            type="number"
                            spellcheck="false"
                            data-ms-editor="true"
                            name="contact"
                            value={contact}
                            onChange={handleInputChange}
                          />
                        </div>

                        <div class="field">
                          <label>Date of Birth</label>
                          <input
                            type="date"
                            data-ms-editor="true"
                            name="dateOfBirth"
                            value={dateOfBirth}
                            onChange={handleInputChange}
                          />
                        </div>

                        <div class="field">
                          <label>Gender</label>
                          <select
                            class="ui search dropdown"
                            name="gender"
                            value={gender}
                            onChange={handleInputChange}
                          >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                          </select>
                        </div>
                      </div>
                    </form>
                  </div>

                  <div
                    class="seven wide column border shadow-lg"
                    onChange={handleInputChange}
                  >
                    <div class="ui form">
                      <div class="field">
                        <label>Address</label>
                        <textarea
                          rows="3"
                          data-ms-editor="true"
                          name="address"
                          value={address}
                          onChange={handleInputChange}
                        />
                      </div>

                      {/* Drag and drop image */}
                      <div class="field">
                        <label class="mb-2 ">Profile Image</label>
                        <div className="content p-4">
                          <DropZone profileImage={handleProfileImage} />
                        </div>
                      </div>
                      {/* drag and drop image closed  */}

                      <div class="field">
                        <label>Employment Status</label>
                        <EmploymentDropDown
                          employmentHandler={handleEmploymentStatus}
                        />
                      </div>

                      <div class="field">
                        <label>Skill</label>
                        <SkillsDropDown skillHandler={handleSkills} />
                      </div>

                      <div class="field">
                        <label>Education</label>
                        <EducationDropDown educationHandler={handleEducation} />
                      </div>

                      <div class="field mt-4">
                        <hr />
                        <Button class="btn btn-outline-dark w-25">
                          Cancel
                        </Button>
                        <button
                          class="ui right floated button green w-50"
                          onClick={handleSubmitData}
                        >
                          Update ALumni
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        : ""}
    </div>
  );
};
