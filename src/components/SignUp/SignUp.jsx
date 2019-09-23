// React + Redux
import React from 'react';
import { Link } from 'react-router-dom';
// Styling
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './SignUp.css'

const SignUp = () => (
  <div id="signup">
    <h2>Sign Up</h2>
    <Link to="/">Sign In</Link>
    <Form className="form">
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text>
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit" href="/app/create-user">
        Sign Up
      </Button>
    </Form>
  </div>
);

export default SignUp;