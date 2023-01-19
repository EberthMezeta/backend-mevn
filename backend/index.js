import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";

import express from "express";
import "./database/connectdb.js";
import authRoute from "./routes/auth.route.js";
import linkRoute from "./routes/link.route.js";

const APP = express();
const PORT = process.env.PORT || 3000;

APP.use(express.json());
APP.use(cookieParser());
APP.use("/api/v1/auth", authRoute);
APP.use("/api/v1/links", linkRoute);

APP.listen(PORT, () => {
  console.log("Server is running on port 3000");
});
