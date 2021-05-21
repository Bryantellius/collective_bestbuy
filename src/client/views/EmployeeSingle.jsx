import React, { useState, useEffect } from "react";
import * as dayjs from "dayjs";
import { useHistory, useParams } from "react-router";

const EmployeeSingle = () => {
  const [employee, setEmployee] = useState({});
  const { EmployeeID } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetch("/api/v1/employees/" + EmployeeID)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEmployee(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="container">
      <div>
        <button
          className="btn btn-sm btn-outline-dark"
          onClick={() => history.goBack()}
        >
          Back
        </button>
      </div>
      <div className="col-md-8 mx-auto">
        <div className="card">
          <div className="card-header">
            <h1 className="text-center">
              {employee.FirstName} {employee.LastName}
            </h1>
            <p className="text-muted">
              {dayjs().diff(dayjs(employee.DateOfBirth), "year")}
            </p>
          </div>
          <div className="card-body">
            <h3>{employee.Title}</h3>
            <p>
              Email:{" "}
              <a href={`mailto:${employee.EmailAddress}`}>
                {employee.EmailAddress}
              </a>
            </p>
            <p>
              Tel:{" "}
              <a href={`tel:+{employee.PhoneNumber}`}>{employee.PhoneNumber}</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployeeSingle;
