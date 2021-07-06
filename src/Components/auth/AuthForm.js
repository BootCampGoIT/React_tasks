import React, { Component } from "react";
import { AuthFormContainer } from "./AuthFormStyled";
import { withRouter } from "react-router-dom";
import {
  loginOperation,
  registerOperation,
} from "../../redux/auth/authOperations";
import { connect } from "react-redux";

class AuthForm extends Component {
  state = {
    email: "",
    password: "",
  };
  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  onHandleSubmit = (e) => {
    e.preventDefault();
    this.isRegisterForm()
      ? this.props.registerOperation(this.state)
      : this.props.loginOperation(this.state);
  };

  isRegisterForm = () => {
    return this.props.location.pathname === "/registration";
  };

  render() {
    return (
      <AuthFormContainer>
        <form className='authForm' onSubmit={this.onHandleSubmit}>
          <label className='authFormLabel'>
            Email
            <input
              type='text'
              className='authFormInput'
              name='email'
              placeholder="Example: alexIvanov@gmail.com"
              onChange={this.onHandleChange}
            />
          </label>
          <label className='authFormLabel'>
            Password
            <input
              type='text'
              className='authFormInput'
              name='password'
              placeholder="Example: Qwerty123"
              onChange={this.onHandleChange}
            />
          </label>
          <button className='authFormSubmitter' type='submit'>
            {this.isRegisterForm() ? "Register" : "Login"}
          </button>
        </form>
      </AuthFormContainer>
    );
  }
}
const mapDispatchToProps = {
  registerOperation,
  loginOperation,
};

export default connect(null, mapDispatchToProps)(withRouter(AuthForm));
