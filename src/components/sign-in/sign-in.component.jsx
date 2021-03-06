import React, { Component } from "react";
import { Redirect, withRouter } from "react-router-dom";
import { FormInput } from "../form-input/form-input.component";
import { CustomButton } from "../custom-button/custom-button.component";
import "./sign-in.styles.scss";

import SignUp from "../sign-up/sign-up.component";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: "",
        password: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="form-wrapper">
        <div className="sign-in">
          <header className="header">
            <h2 className="heading">Sign in</h2>
            <p className="excerpt">
              Become a member - don’t miss out on deals, offers, discounts and
              bonus vouchers.
            </p>
          </header>

          <form onSubmit={this.handleSubmit}>
            <FormInput
              type="email"
              handleChange={this.handleChange}
              name="email"
              required
              label="Email"
              value={this.state.email}
            />
            <FormInput
              type="password"
              handleChange={this.handleChange}
              name="password"
              required
              label="Password"
              value={this.state.password}
            />
            <CustomButton
              bgColor="#c2f9bb"
              color="black"
              borderColor="black"
              type="submit"
            >
              Sign In
            </CustomButton>
            <CustomButton
              bgColor="#e9eaea"
              color="black"
              onClick={() => {
                signInWithGoogle();
              }}
            >
              Sign In With Google
            </CustomButton>
            <div className="divider">OR</div>
            <CustomButton
              bgColor="#ade8f4"
              color="black"
              onClick={() => {
                this.props.history.push("/signup");
              }}
            >
              Sign Up
            </CustomButton>
          </form>
          <footer className="footer">
            <p
              style={{
                cursor: "pointer",
                textDecoration: "underline",
              }}
              className="excerpt"
            >
              Membership info
            </p>
          </footer>
        </div>
      </div>
    );
  }
}

export default withRouter(SignIn);
