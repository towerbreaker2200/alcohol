import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Home from "../Routes/Home";
import Detail from "../Routes/Detail";
import Ingredient from "../Routes/Ingredient";
import Header from "./Header";

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/cocktail" exact component={Home} />
        <Route path="/ingredient" exact component={Ingredient} />
        <Route path="/cocktail/:id" component={Detail} />
        <Route path="/ingredient/:id" component={Detail} />
        <Redirect from="*" to="/cocktail" />
      </Switch>
    </>
  </Router>
);
