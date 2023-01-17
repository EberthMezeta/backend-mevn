import express from "express";
import { login, register, test } from "../controllers/auth.controller.js";
import { body } from "express-validator";
import { validationResultExpress } from "../middlewares/validationsResultExpress.js";

const router = express.Router();

router.post(
  "/login",
  [
    body("email", "Please enter a valid email")
      .trim()
      .isEmail()
      .normalizeEmail(),
    body("password", "Please enter a valid password")
      .trim()
      .isLength({ min: 8 })
      .custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error("Passwords have to match!");
        } else {
          return value;
        }
      }),
  ],
  validationResultExpress,
  login
);

router.post("/register", register);

router.get("/test", test);

export default router;
