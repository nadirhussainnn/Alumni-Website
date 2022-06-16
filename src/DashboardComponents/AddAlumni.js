import React, { useState } from "react";
import { Dropdown, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "../Styles/AddAlumni.css";
import { DropZone } from "./DropZone";
import Axios from "axios";

const URL = "http://localhost:5000/api";

export class AddAlumni extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      cmsId: "",
      fullName: "",
      department: "",
      contact: "",
      dateOfBirth: "",
      gender: "",
      address: "",
      profileImage: null,
      employementStatus: 0,
      skills: [],
      education: [],
      title: "",
      year: "",
      addedAlumni: false,
      signal: false
    };

    this.handleSubmitData = this.handleSubmitData.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSkills = this.handleSkills.bind(this);
    this.handleProfileImage = this.handleProfileImage.bind(this);
    this.handleEmploymentStatus = this.handleEmploymentStatus.bind(this);
    // this.educationCompletionYear = this.educationCompletionYear.bind(this);
    // this.titleOfEducation=this.titleOfEducation.bind(this)
    this.handleEducation = this.handleEducation.bind(this);
  }

  handleSubmitData() {
    
    const formData = new FormData();
    
    formData.append("cmsId", this.state.cmsId)
    formData.append("fullName", this.state.fullName)
    formData.append("email", this.state.email)
    formData.append("department", this.state.department)
    formData.append("gender", this.state.gender)
    formData.append("dateOfBirth", this.state.dateOfBirth)
    formData.append("address", this.state.address)
    formData.append("contact", this.state.contact)
    formData.append("skills", this.state.skills)
    formData.append("education", this.state.education)
    formData.append("empStatus", this.state.employementStatus)
    formData.append("image", this.state.profileImage);
    
    Axios.post(`${URL}/addAlumni`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then(resp=>{
      if(resp){
        alert("Alumni Added Successfully")
      }
    });

    this.setState({
      email: "",
      cmsId: "",
      fullName: "",
      department: "",
      contact: "",
      dateOfBirth: "",
      gender: "",
      address: "",
      profileImage: null,
      employementStatus: 0,
      skills: [],
      education: [],
      title: "",
      year: "",
      addedAlumni: false,
      submitted:true
    },()=>{

      document.getElementById('skills').innerText=''
      document.getElementById('education').innerText=''
      document.getElementById('empStatus').innerText=''
      
    })

  }

  handleEmploymentStatus(emp) {
    this.setState({ employementStatus: emp });
  }
  handleSkills(sk) {
    this.setState({ skills: [...sk] });
  }

  handleEducation(ed) {
    this.setState({ education: [...ed] });
  }
  // titleOfEducation(title){
  //   this.setState({title:title})
  // }

  // educationCompletionYear(year){
  //   this.setState({year:year})

  // }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleProfileImage(img) {
    this.setState({ profileImage: img });
  }

  render() {
    return (
      <div class="container mt-4">
        <div class="ui grid mt-2 ms-2 p-4 mb-2">
          <div class="two wide column"></div>

          <div class="fourteen wide column">
            <h2>All Fields required!</h2>
          </div>
        </div>

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
                    value={this.state.fullName}
                    onChange={this.handleInputChange}
                  />
                </div>

                <div class="field">
                  <label>Email</label>
                  <input
                    type="text"
                    data-ms-editor="true"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
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
                    value={this.state.cmsId}
                    onChange={this.handleInputChange}
                  />
                </div>

                <div class="field">
                  <label>Department</label>
                  <select
                    class="ui search dropdown"
                    name="department"
                    value={this.state.department}
                    onChange={this.handleInputChange}
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
                    value={this.state.contact}
                    onChange={this.handleInputChange}
                  />
                </div>

                <div class="field">
                  <label>Date of Birth</label>
                  <input
                    type="date"
                    data-ms-editor="true"
                    name="dateOfBirth"
                    value={this.state.dateOfBirth}
                    onChange={this.handleInputChange}
                    id="dateofBirth"
                  />
                </div>

                <div class="field">
                  <label>Gender</label>
                  <select
                    class="ui search dropdown"
                    name="gender"
                    value={this.state.gender}
                    onChange={this.handleInputChange}
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">
                      Male
                    </option>
                    <option value="Female">Female</option>
                  </select>
                </div>
              </div>
            </form>
          </div>

          <div
            class="seven wide column border shadow-lg"
            onChange={this.handleInputChange}
          >
            <div class="ui form">
              <div class="field">
                <label>Address</label>
                <textarea
                  rows="3"
                  data-ms-editor="true"
                  name="address"
                  value={this.state.address}
                  onChange={this.handleInputChange}
                />
              </div>

              {/* Drag and drop image */}
              <div class="field">
                <label class="mb-2 ">Profile Image</label>
                <div className="content p-4">
                  <DropZone profileImage={this.handleProfileImage} signal={this.state.submitted}/>
                </div>
              </div>
              {/* drag and drop image closed  */}

              <div class="field">
                <label>Employment Status</label>
                <EmploymentDropDown
                  employmentHandler={this.handleEmploymentStatus}
                />
              </div>

              {/* <div class="field mt-4">
                <label>Employement Status</label>
                <select
                  class="ui search dropdown"
                  name="employementStatus"
                  value={this.state.employementStatus}
                  onChange={this.handleEmploymentStatus}
                >
                  <option value="">Select Employment status</option>
                  <option value="Employeed">Employeed</option>
                  <option value="Searching for Job">Searching for Job</option>
                </select>
              </div> */}

              <div class="field">
                <label>Skill</label>
                <SkillsDropDown skillHandler={this.handleSkills} />
              </div>

              <div class="field">
                <label>Education</label>
                <EducationDropDown educationHandler={this.handleEducation} />
              </div>
              {/* <div class="field">
                <EducationField year={this.educationCompletionYear} title={this.titleOfEducation}/>
              </div> */}

              <div class="field mt-4">
                <hr />
                <Button class="btn btn-outline-dark w-25">Cancel</Button>
                <button
                  class="ui right floated button green w-50"
                  onClick={this.handleSubmitData}
                >
                  Add Alumni
                </button>
              </div>
            </div>
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
      id="skills"
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
      id="empStatus"
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
      id="education"
    />
  );
};

// const EducationField = (props) => {

//   const [isVisible, setVisiblity] = useState(false);
//   const[year, setYear]=useState()
//   const[title, setTitle]=useState()
//   const[disabled, setDisabled]=useState(true)
//   const[disableAddNew,setDisableAddNew]=useState(false)

//   const handleTitleSelection = (event) => {

//     setTitle(event.target.value)
//     setDisabled(false)
//   };

//   const handleYearSelection = (event, data) => {
//     setYear(event.target.value)
//     setDisabled(false)
//   };

//   function handleAddNew(eventSource) {
//     setDisabled(true)
//     eventSource.preventDefault()
//     setVisiblity((prev) => !prev);

//   }

//   function handleConfirm(event){
//     props.year(year)
//     props.title(title)
//     setVisiblity(false)

//   }
//   return (
//     <div class="shadow-sm p-4">
//       <div>
//         <div>
//           <a href="#" style={{ float: "right" }} onClick={handleAddNew}>
//             {isVisible ? "Cancel" : "Add New"}
//           </a>
//           Education
//         </div>
//         {isVisible ? (
//           <div class="addEducationContainer">
//             <div class="mt-2">
//               <select class="degree-title" onChange={handleTitleSelection}>
//                 <option value="0" class="hidden">
//                   Title
//                 </option>
//                 <option value="associate">Associate</option>
//                 <option value="certificate">Certificate</option>
//                 <option value="ba">B.A.</option>
//                 <option value="bsc">B.Sc.</option>
//                 <option value="ma">M.A.</option>
//                 <option value="mba">M.B.A.</option>
//                 <option value="msc">M.Sc.</option>
//                 <option value="phd">Ph.D</option>
//                 <option value="other">Other</option>
//               </select>
//             </div>

//             <div class="mt-2">
//               <select class="year-to" onChange={handleYearSelection}>
//                 <option value="" class="hidden">
//                   Year of graduation
//                 </option>
//                 <option value="2021">2021</option>
//                 <option value="2020">2020</option>
//                 <option value="2019">2019</option>
//                 <option value="2018">2018</option>
//                 <option value="2017">2017</option>
//                 <option value="2016">2016</option>
//                 <option value="2015">2015</option>
//                 <option value="2014">2014</option>
//                 <option value="2013">2013</option>
//                 <option value="2012">2012</option>
//                 <option value="2011">2011</option>
//                 <option value="2010">2010</option>
//                 <option value="2009">2009</option>
//                 <option value="2008">2008</option>
//                 <option value="2007">2007</option>
//                 <option value="2006">2006</option>
//                 <option value="2005">2005</option>
//                 <option value="2004">2004</option>
//                 <option value="2003">2003</option>
//                 <option value="2002">2002</option>
//                 <option value="2001">2001</option>
//                 <option value="2000">2000</option>
//               </select>
//             </div>
//             <div class="mt-2">
//               <Button class="btn btn-success w-100" onClick={handleConfirm} disabled={disabled}>Confirm</Button>
//             </div>
//           </div>
//         ) : (
//           ""
//         )}
//       </div>
//     </div>
//   );
// };
