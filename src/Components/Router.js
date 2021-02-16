import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Home from "../Routes/Home";
import Search from "../Routes/Search";
import Ingredient from "../Routes/Ingredient";

export default () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/search" component={Search} />
      <Route path="/ingredient" component={Ingredient} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
