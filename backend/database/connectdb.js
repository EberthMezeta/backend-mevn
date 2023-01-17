import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

try {
  /*
  const conn = await mongoose
    .createConnection(process.env.URI_MONGO)
    .asPromise();
  conn.readyState;
  console.log(conn.readyState);
  */
} catch (error) {
  console.log("Error connecting to database: ", error);
}
