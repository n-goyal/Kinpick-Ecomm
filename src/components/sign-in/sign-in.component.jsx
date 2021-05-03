import React, { Component } from "react";
import { FormInput } from "../form-input/form-input.component";
import { CustomButton } from "../custom-button/custom-button.component";
import "./sign-in.styles.scss";

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
        <header class="header">
          <h2 class="heading">Sign in</h2>
          <p class="excerpt">
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
          <CustomButton bgColor="black" color="white" type="submit">
            Sign In
          </CustomButton>
          <CustomButton bgColor="white" color="black" type="submit">
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
