import React from "react";

const SalesInd = () => {
  const [test, setTest] = React.useState("");

  React.useEffect(() => {
    fetch("/api/v1/test")
      .then((res) => res.json())
      .then(({ msg }) => setTest(msg));
  }, []);

  return (
    <main className="container">
      <div className="homePage"> 
      <h1> Individual Sale</h1>
      </div>
      {test}
      </main>
  );
};

export default SalesInd;