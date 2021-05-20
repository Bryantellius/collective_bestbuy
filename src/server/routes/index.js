import express from "express";

const router = express.Router();

router.get("/test", (req, res, next) => {
  res.json({ msg: "Hello World" });
});




export default router;
