import React from "react";
import {Link} from 'react-router-dom'
import "./Styles/Register.css";
import "semantic-ui-css/semantic.min.css";
import { Button, Form } from "semantic-ui-react";

export function Register() {
  return (
    <div class="container">
    <div class="mt-4">
      <h1 class="text-center"> Registration</h1>
    </div>
    <div class="mt-4 p-4  shadow-sm registrationForm">
      <Form>
        <Form.Field>
          <label>CMS or Email</label>
          <input placeholder="CMS or Email" />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input type="password" placeholder="Password" />
        </Form.Field>
        <Button type="submit" class="btn btn-success">Register</Button>
        <Form.Field class="mt-4">

        <label><h4>Already have an Account?<Link to="/Login"> Login</Link></h4></label>
        </Form.Field>

      </Form>
    </div>
  </div>
  );
}
