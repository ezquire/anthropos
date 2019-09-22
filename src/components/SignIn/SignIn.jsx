// React + Redux
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
// Actions
import { authenticateUser } from '../../actions/authentication';
// Styling
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './SignIn.css'

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state;
    const { dispatch } = this.props;
    if(email && password) {
      dispatch(authenticateUser(email, password));
    }
  }

  render() {
    const { email, password } = this.state;
    return (
      <div id="signin">
        <h2>Sign In</h2>
        <Link to="/sign-up">Sign Up</Link>
        <Form className="form" onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" 
                          placeholder="Enter email" 
                          name="email"
                          value={email}
                          onChange={this.handleChange}
            />
            <Form.Text>
              We'll never share your email with anyone else.
          </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" 
                          placeholder="Password"
                          name="password"
                          value={password}
                          onChange={this.handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit"> 
            Sign In
          </Button>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { authentication } = state.authentication;
  return { authentication }
}

export default withRouter(connect(mapStateToProps)(SignIn));