import React from "react";
import Home from "./views/Home";
import Sales from "./views/Sales";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "../../src/components/NavBar";

const App = () => {
  return (
    <Router>
      <div className = "navBar">
      <NavBar />
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Sales">
          <Sales />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
