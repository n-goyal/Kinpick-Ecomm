import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { FormInput } from "../form-input/form-input.component";
import { CustomButton } from "../custom-button/custom-button.component";
import "./sign-in.styles.scss";

import { signInWithGoogle } from "../../firebase/firebase.utils";

export default class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventdefault();
    this.setState({
      email: "",
      password: "",
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="sign-in">
        <header className="header">
          <h2 className="heading">Sign in</h2>
          <p className="excerpt">
            Become a member — don’t miss out on deals, offers, discounts and
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
          <CustomButton bgColor="#ade8f4" color="black" type="submit">
            Become A Member
          </CustomButton>
        </form>
        <footer className="footer">
          <p className="excerpt">Membership info</p>
        </footer>
      </div>
    );
  }
}
