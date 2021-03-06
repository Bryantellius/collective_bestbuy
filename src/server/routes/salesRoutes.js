import express from "express";
import { getAll, getOne, getSalesReport } from "../db/queries/get";


const router = express.Router();

router.get("/report", async (req, res, next) => {
  try {
    
    let data = await getSalesReport();
    
    res.status(200).json(data || {msg: "No data available"});
  }catch (error) {
    next(error);
  }
});

router.get("/:id?", async (req, res, next) => {
  try {
    const { id } = req.params;
    let data;
    if (id) {
      [data] = await getOne("sales", id);
    } else {
      data = await getAll("sales");
    }
    res.status(200).json(data || { msg: "No data available" });
  } catch (error) {
    next(error);
  }
});



export default router;
