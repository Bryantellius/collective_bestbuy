import express from "express";
import employeeRoutes from "./employeesRoutes";
import productRoutes from "./productRoutes";
import salesRoutes from "./salesRoutes";

const router = express.Router();

router.get("/test", (req, res, next) => {
  res.json({ msg: "Hello World!" });
});

router.use("/employees", employeeRoutes);
router.use("/products", productRoutes);
router.use("/sales", salesRoutes);


export default router;
