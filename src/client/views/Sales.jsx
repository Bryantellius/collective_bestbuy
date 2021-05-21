import React from "react";

const Sales = () => {
  const [sales, setSales] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/v1/sales")
      .then((res) => res.json())
      .then((data) => setSales(data));
  }, []);

  return (
    <main className="container">
      <div className="homePage">
        <h1>Sales</h1>
      </div>

      <div className="salesBar">
        <div className="salesSearch">
          <h5>Something Sales</h5>
          <input type="text" name="salesInput" id="salesInput" />
          <input type="submit" value="Submit" id="salesSearchButton" />
        </div>
        <div className="salesReportLink">
          <h5>View Sales Report</h5>
          <input type="button" value="Sales Report" id="salesReportLink" />
        </div>
      </div>

      <div className="salesBody">
        {sales.map((sale) => (
          <p key={sale.SaleID}> {sale.Quantity} </p>
        ))}
      </div>
    </main>
  );
};

export default Sales;
