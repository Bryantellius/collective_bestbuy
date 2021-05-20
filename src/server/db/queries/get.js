import Query from "../models";

const getAll = async (table) => {
  return Query("SELECT * FROM " + table);
};

const getOne = async (table, id) => {
  const idCol = table.slice(0, table.length - 1);
  return Query(`SELECT * FROM ${table} WHERE ${idCol}ID = ?`, [id]);
};

export { getAll, getOne };
