import React, { useState, useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import { Icon } from "semantic-ui-react";
import Axios from "axios";

const URL = "http://localhost:5000/api";

export function DisplayAllAlumniMembers() {
  return (
    <div class="container">
      <div class="ui grid mt-4 ms-2">
        <div class="two wide column"></div>
        <div class="eleven wide column">
          <h1>All Alumni Members</h1>
          <hr />
          <Member />
        </div>
      </div>

      <div class="three wide column"></div>
    </div>
  );
}

const Member = () => {

  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch(`${URL}/loadAllMembers`)
      .then((resp) => resp.json())
      .then((result) => {
        const { data, image } = result;
        data.forEach((element, index) => {
            data[index]['profileImage']=image[index]
        });
        setMembers(data)
      });
  }, []);


  function handleDeleteMember(cmsId) {

    Axios.post(`${URL}/deleteAlumniMember`,{cms:cmsId}).then(data=>{
      // console.log(data)
    })
    
    const filteredArray = members.filter((member) => {
      return member.cmsId !== cmsId;
    });
    setMembers(filteredArray);
  }

  return (
    <div class="ui three cards">
      {members.map((itm) => {
        return (
          <div class="ui card shadow-lg">
            <div class="content">
              <img src={itm.profileImage} class="ui right floated image" width="100%" height="150px" />
              <div class="header">{itm.fullName}</div>
              <div >{itm.cmsId}</div>
              <div >{itm.email}</div>
              <div class="description">{itm.description}</div>
            </div>
            <div class="extra content">
              <div class="ui two buttons">
                <button
                  class="ui red basic button"
                  onClick={() => {
                    handleDeleteMember(itm.cmsId);
                  }}
                >
                  <Icon name="user delete" size="large"></Icon>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
