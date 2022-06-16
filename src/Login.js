/** ROUTES OF THIS FILE DEFINED IN HOMEPAGE.js */

import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Styles/MenuBar.css";
import "./Styles/Login.css";
import { Button, Form } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Axios from "axios";
//GLOBAL VARIABLES
const URL = "http://localhost:5000/api";

export const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const history = useHistory();

  function handleEmail(evt) {
    setUserEmail(evt.target.value);
  }

  function handlePassword(evt) {
    setUserPassword(evt.target.value);
  }

  function loginToAccount(evt) {
    
    Axios.post(`${URL}/login`, { email: userEmail, pass: userPassword }).then(
      (resp) => {
        if(resp.data.length>0){
          if (resp.data[0].email === userEmail) {
            history.push("/Dashboard");
          }
        }
        else{
          alert("Incorrect email and password combination!")
          setUserEmail('')
          setUserPassword('')
        }
      }
    );
  }

  return (
    <div class="container loginArea">
      <div class="mt-4 text-center">
        <h1> Login</h1>
      </div>
      <div class="mt-4 p-4  shadow-sm loginForm">
        <Form>
          <Form.Field>
            <label>CMS or Email</label>
            <input
              type="email"
              placeholder="CMS or Email"
              name="userEmail"
              value={userEmail}
              onChange={handleEmail}
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              name="userPassword"
              value={userPassword}
              onChange={handlePassword}
            />
          </Form.Field>

          <Button class="btn btn-success mt-4" onClick={loginToAccount}>
            {/* <Link to={this.state.verified?"/Dashboard":"/Login"} onClick={this.loginToAccount}>Login</Link> */}
            Login
          </Button>

          {/* <button type="submit">Submit</button> */}
          <Form.Field class="mt-4">
            <label>
              <h4>
                Don't Have an account?<Link to="/register"> Create One</Link>
              </h4>
            </label>
          </Form.Field>
        </Form>
      </div>
    </div>
  );
};
