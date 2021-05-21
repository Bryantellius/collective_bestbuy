import React from "react";
import Home from "./views/Home";
import Sales from "./views/Sales";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "../../src/components/NavBar";
import EmployeeList from "./views/EmployeeList";
import EmployeeSingle from "./views/EmployeeSingle";

const App = () => {
  return (
    <Router>
      <div className="navBar">
        <NavBar />
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Sales">
          <Sales />
        </Route>
        <Route exact path="/Employees">
          <EmployeeList />
        </Route>
        <Route exact path="/Employees/:EmployeeID">
          <EmployeeSingle />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
