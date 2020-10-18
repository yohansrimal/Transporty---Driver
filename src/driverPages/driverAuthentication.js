import React, { Component } from "react";
import DriverSignIn from "../components/driverComponents/driverSignIn";
import DriverSignUp from "../components/driverComponents/driverSignUp";

class DriverAuthentication extends Component {
  state = {
    signin: true,
    signup: false,
  };

  loadSignInPage = (event) => {
    this.setState({
      signin: true,
      signup: false,
    });
  };

  loadSignUpPage = (event) => {
    this.setState({
      signin: false,
      signup: true,
    });
  };

  render() {
    return (
      <div>
        {this.state.signin && <DriverSignIn signUp={this.loadSignUpPage} />}
        {this.state.signup && <DriverSignUp signIn={this.loadSignInPage} />}
      </div>
    );
  }
}

export default DriverAuthentication;
