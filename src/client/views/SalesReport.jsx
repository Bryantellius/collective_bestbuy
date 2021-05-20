import React from "react";

const SalesReport = () => {
  const [test, setTest] = React.useState("");

  React.useEffect(() => {
    fetch("/api/test")
      .then((res) => res.json())
      .then(({ msg }) => setTest(msg));
  }, []);

  return (
    <main className="container">
      <div className="homePage"> 
      <h1> Sales Report</h1>
      </div>
      {test}
      </main>
  );
};

export default SalesReport;