import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  useEffect(() => {
    console.log("Fetching employees...");
    fetch("/api/v1/employees")
      .then((res) => res.json())
      .then((data) => {
        setEmployees(data);
        setFilteredEmployees(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const filterEmployees = (e) => {
    let temp = employees.filter(({ FirstName, LastName }) =>
      `${FirstName.toLowerCase()} ${LastName.toLowerCase()}`.includes(
        e.target.value.toLowerCase()
      )
    );
    setFilteredEmployees(temp);
  };

  return (
    <section className="container">
      <h1 className="text-center">Employees</h1>
      <hr />
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Search Name..."
        className="form-control"
        onChange={filterEmployees}
      />
      <hr />
      <ul className="list-group-flush">
        {filteredEmployees.map((e) => (
          <li key={`${e.EmployeeID}`} className="list-group-item">
            <Link
              to={`/Employees/${e.EmployeeID}`}
              className="nav-link"
            >{`${e.FirstName} ${e.LastName}`}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default EmployeeList;
