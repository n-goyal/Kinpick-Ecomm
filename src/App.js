import React from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import "./App.css";
// import { Header as HeaderNew } from "./components/header/header.component";
import { Homepage } from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/shop.component";
import { SignInSignUp } from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { Header } from "./tempshop-comps/header.comp";
// import Shop from "./tempshop-comps/tempShop.page";

import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      user: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({
        user: user,
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    console.log(this.state.user);
    return (
      <div>
        {/* <HeaderNew /> */}
        <Header user={this.state.user} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          {/* withRouter( */}
          <Route path="/shop" component={Shop} />
          {/* ) */}
          {this.state.user ? (
            <Redirect to="/" />
          ) : (
            <Route
              path="/signin"
              user={this.state.user}
              component={SignInSignUp}
            />
          )}
        </Switch>
      </div>
    );
  }
}

export default App;
