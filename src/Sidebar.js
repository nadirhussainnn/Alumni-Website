// /** ROUTES OF THIS FILE DEFINED IN DASHBOARD.js */
/** ROUTES OF THIS FILE DEFINED IN DASHBOARD.js */

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";

import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import "semantic-ui-css";
import "./Styles/Dashboard.css";
import { Popup } from "semantic-ui-react";

const Nav = styled.div`
  background: #15171c;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

let NavIcon = styled(Link)`
  margin-top: 10px;
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

//Home
let HomeIcon = styled(Link)`
  margin-top: 10px;
  margin-left: 80%;
  float: right;

  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

let Notifications = styled(Link)`
  margin-top: 10px;
  margin-left: 2%;
  float: right;

  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Profile = styled(Link)`
  margin-top: 10px;
  margin-left: 2%;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Settings = styled(Link)`
  margin-top: 10px;
  margin-left: 2%;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
  overflow-y: scroll;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

export const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    if (!sidebar) {
      NavIcon = styled(Link)`
        margin-top: 10px;
        margin-left: 21rem;
        font-size: 2rem;
        height: 80px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
      `;

      HomeIcon = styled(Link)`
        margin-top: 10px;
        margin-left: 60.77%;
        float: right;

        font-size: 2rem;
        height: 80px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
      `;
    } else {
      NavIcon = styled(Link)`
        margin-top: 10px;
        margin-left: 2rem;
        font-size: 2rem;
        height: 80px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
      `;
      HomeIcon = styled(Link)`
        margin-top: 10px;
        margin-left: 80%;
        float: right;

        font-size: 2rem;
        height: 80px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
      `;
    }
    setSidebar(!sidebar);
  };

  /** Hide footer as Dashoboard is mounted */
  useEffect(() => {
    document.getElementById("footer").hidden = true;
  }, []);

  function showNotifications() {}

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavIcon to="#">
            {sidebar ? (
              <FaIcons.FaBars onClick={showSidebar} />
            ) : (
              <FaIcons.FaBars onClick={showSidebar} />
            )}
          </NavIcon>
              <HomeComponent />
          <NotificationComponents />
          <ProfileComponent />
          <SettingComponent />
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <div class="text-center mt-4">
              <h4 class="text-light">Sukkur IBA University</h4>
            </div>

            <hr class="text-light" />
            <div class="text-center">
              <img
                class="ui centered small circular image"
                src="/Resources/iba-bg1.jpg"
                style={{ borderRadius: "50%", height: "80px", width: "80px" }}
              />
              <h5 class="text-primary">Current User</h5>
            </div>
            <hr class="text-light" />
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

const HomeComponent = () => {
  const history=useHistory()
  function handleHomeClick(){
    history.push('/')
  }
  return (
        <HomeIcon>
          <AiIcons.AiFillHome onClick={handleHomeClick} />
        </HomeIcon>
  );
};


const NotificationComponents = () => {
  function hideNotification(evt) {
    evt.target.parentNode.parentNode.hidden = true;
  }

  return (
    <Popup
      trigger={
        <Notifications>
          <AiIcons.AiOutlineNotification />
        </Notifications>
      }
      flowing
      hoverable
    >
      <div style={{ width: "300px" }}>
        {[1, 2, 3, 1, 2, 4].map((it, index) => {
          return (
            <div class="p-2 notificationContainer">
              <p>
                <button
                  class="btn-close"
                  style={{ float: "right" }}
                  onClick={hideNotification}
                ></button>
                Hello World class {index}
              </p>
            </div>
          );
        })}
      </div>
    </Popup>
  );
};

const ProfileComponent = () => {
  return (
    <Popup
      trigger={
        <Profile>
          <AiIcons.AiOutlineProfile />
        </Profile>
      }
      flowing
      hoverable
    >
      <img src="/Resources/nadir.jpg" className="profileImage" />
      <div class="content">
        <h3 class="text-primary text-center mt-2 mb-2" id="userName">
          Nadir Hussain
        </h3>
      </div>
      <hr class="text-danger" />
      <Link to="/AdminProfile" class="ui right floated button blue tiny">
        Profile
      </Link>

      <Link to="/" class="ui right floated button blue tiny">
        Logout
      </Link>
      
      {/* <button class="ui right floated button blue tiny">Logout</button> */}
    </Popup>
  );
};

const SettingComponent = () => {
  return (
    <Popup
      trigger={
        <Settings>
          <AiIcons.AiOutlineSetting />
        </Settings>
      }
      flowing
      hoverable
    >
      <div class="text-center settingContainer">
        <Link to="/AdminProfile" class="btn mb-2">
          Theme
        </Link>
        <br />
        <Link to="/AdminProfile" class="btn mb-2">
          Support
        </Link>
      </div>
    </Popup>
  );
};
