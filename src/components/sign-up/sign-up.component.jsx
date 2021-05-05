import React from "react";
import { FormInput } from "../form-input/form-input.component";
import { CustomButton } from "../custom-button/custom-button.component";
import "./sign-up.styles.scss";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import { withRouter } from "react-router";

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="form-wrapper">
        <div className="sign-up">
          <header className="header">
            <h2 className="heading">Sign Up</h2>
            <p className="excerpt">
              Don’t miss out on deals, offers, discounts and bonus vouchers.
            </p>
          </header>

          <form onSubmit={this.handleSubmit}>
            <FormInput
              type="text"
              handleChange={this.handleChange}
              name="displayName"
              required
              label="Name"
              value={displayName}
            />
            <FormInput
              type="email"
              handleChange={this.handleChange}
              name="email"
              required
              label="Email"
              value={email}
            />
            <FormInput
              type="password"
              handleChange={this.handleChange}
              name="password"
              required
              label="Password"
              value={password}
            />
            <FormInput
              type="password"
              handleChange={this.handleChange}
              name="confirmPassword"
              required
              label="Confirm Password"
              value={confirmPassword}
            />
            <CustomButton
              bgColor="#c2f9bb"
              color="black"
              borderColor="black"
              type="submit"
            >
              Sign Up
            </CustomButton>
          </form>
          <footer className="footer">
            <p
              style={{
                fontSize: "1.2em",
                fontWeight: "bolder",
                cursor: "pointer",
                textDecoration: "underline",
              }}
              className="excerpt"
              onClick={() => this.props.history.push("/signin")}
            >
              Sign In
            </p>
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

export default withRouter(SignUp);
