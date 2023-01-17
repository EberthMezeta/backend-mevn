import dotenv from "dotenv";
dotenv.config();

import express from "express";
import "./database/connectdb.js";
import authRoute from "./routes/auth.route.js";

const APP = express();
const PORT = process.env.PORT || 3000;

APP.use(express.json());
APP.use("/", authRoute);

APP.listen(PORT, () => {
  console.log("Server is running on port 3000");
});
