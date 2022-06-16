import React from "react";
import "./Styles/MenuBar.css";
import "semantic-ui-css/semantic.min.css";

import {Link } from 'react-router-dom'

export function MenuBar() {
  return (
      
    <div class="ui celled grid mt-4 shadow-lg headerMenu  stackable">
      <div class="row">
        <div class="three wide column text-center logoArea">

          <Link to="/"><img src="./Resources/logo.png" height="60px" className="orgLogo" ></img></Link>
        </div>

        <div class="ten wide column text-center menuArea stackable">
          <ul className="menuBar mt-3">
            <li className="menuBarItem me-4 menuBarMenuItem">
              <Link to="/">Home</Link>
            </li>
            <li className="menuBarItem me-4 menuBarMenuItem">
              <Link to="/Alumni">Alumni</Link>
            </li>

            <li className="menuBarItem me-4 menuBarMenuItem">
              <Link to ="/Events">Events</Link>
            </li>
            <li className="menuBarItem me-4 menuBarMenuItem">
              <Link to="/Stories">Stories</Link>
            </li>
            <li className="menuBarItem me-4 menuBarMenuItem">
              <Link to="/Gallery">Gallery</Link>
            </li>
            <li className="menuBarItem me-4 menuBarMenuItem">
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div class="three wide column text-center loginRegisterArea">
        
          <div class="ui labeled button mt-3" tabindex="0">
            <Link to="/Login" class="ui green button">
              <i class="sign-in icon text-dark"></i>Login
            </Link>
            <Link to="/Register" class="ui basic blue left pointing label">
              <i class="sign-out icon text-dark"></i>Register
            </Link>
          </div>
        
        </div>


      </div>
    </div>
  );
}