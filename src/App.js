import React from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import "./App.css";
// import { Header as HeaderNew } from "./components/header/header.component";
import { Homepage } from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/shop.component";
import { Header } from "./tempshop-comps/header.comp";
// import Shop from "./tempshop-comps/tempShop.page";

import SignUp from "./components/sign-up/sign-up.component";
import SignIn from "./components/sign-in/sign-in.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      user: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            user: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      }
      this.setState({
        user: userAuth,
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    console.log(this.state);
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
            <Route path="/signin" user={this.state.user} component={SignIn} />
          )}
          <Route path="/signup" user={this.state.user} component={SignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
