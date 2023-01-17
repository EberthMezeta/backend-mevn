import { validationResult } from "express-validator";

export const login = (req, res) => {
  console.log(req.body);
  res.json({ message: "Hello Worldo" });
};

export const register = (req, res) => {
  res.json({ message: "Hello Worlde" });
};

export const test = (req, res) => {
  res.json({ message: "Hello World" });
};
