import React from "react";

const Sales = () => {
  const [test, setTest] = React.useState("");

  React.useEffect(() => {
    fetch("/api/test")
      .then((res) => res.json())
      .then(({ msg }) => setTest(msg));
  }, []);

  return (
    <main className="container">
      <div className="homePage"> 
      <h1>Sales</h1>
      </div>


<div className="salesSearch">
        <h5>Something Sales</h5>
      <input type="text" name="salesInput" id="salesInput" />
      <input type="submit" value="Submit" />
   
</div>

<div className="salesBody">
    {test}
</div>
    </main>
  );
};

export default Sales;
