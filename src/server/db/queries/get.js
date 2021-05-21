import Query from "../models";

const getAll = async (table) => {
  return Query("SELECT * FROM " + table);
};

const getOne = async (table, id) => {
  const idCol = table.slice(0, table.length - 1);
  return Query(`SELECT * FROM ${table} WHERE ${idCol}ID = ?`, [id]);
};

const getSalesReport = async () => {
  return Query(
    "SELECT p.ProductID, p.Name, p.Price, SUM(s.Quantity) as Quantity, SUM(s.Quantity * s.PricePerUnit) as Gross FROM sales as s INNER JOIN products as p ON s.ProductID = p.ProductID GROUP BY p.ProductID ORDER BY Gross DESC;"
  );
};

export { getAll, getOne, getSalesReport };
