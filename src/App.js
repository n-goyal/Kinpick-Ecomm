import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import "./App.css";
import { Homepage } from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/shop.component";
// import Shop from "./tempshop-comps/tempShop.page";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        {/* withRouter( */}
        <Route path="/shop" component={Shop} />
        {/* ) */}
      </Switch>
    </div>
  );
}

export default App;
