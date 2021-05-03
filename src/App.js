import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import "./App.css";
// import { Header as HeaderNew } from "./components/header/header.component";
import { Homepage } from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/shop.component";
import { SignInSignUp } from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { Header } from "./tempshop-comps/header.comp";
// import Shop from "./tempshop-comps/tempShop.page";

function App() {
  return (
    <div>
      {/* <HeaderNew /> */}
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        {/* withRouter( */}
        <Route path="/shop" component={Shop} />
        {/* ) */}
        <Route path="/signin" component={SignInSignUp} />
      </Switch>
    </div>
  );
}

export default App;
