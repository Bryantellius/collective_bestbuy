import express from "express";
import morgan from "morgan";
import { join } from "path";
import apiRouter from "./routes";
import config from "./config";

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(express.static("public"));

app.use("/api/v1", apiRouter);

app.use("*", (req, res, next) => {
  try {
    res.sendFile(join(__dirname, "../public/index.html"));
  } catch (error) {
    next(error);
  }
});

app.use((req, res, next) => {
  try {
    res.status(404).json("Not Found");
  } catch (error) {
    next(error);
  }
});

app.use((err, req, res, next) => {
  console.log(err.message);
  res.status(500).json({ error: err.message, msg: "Something went wrong :(" });
});

app.listen(config.port, () =>
  console.log(`Server listening on port ${config.port}...`)
);
