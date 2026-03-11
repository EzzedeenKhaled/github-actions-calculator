import express from "express";
import { add, subtract, multiply, divide } from "./calculator.js";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ message: "Calculator API is running!" });
});

app.get("/add", (req, res) => {
  const { a, b } = req.query;
  res.json({ result: add(Number(a), Number(b)) });
});

app.get("/subtract", (req, res) => {
  const { a, b } = req.query;
  res.json({ result: subtract(Number(a), Number(b)) });
});

app.get("/multiply", (req, res) => {
  const { a, b } = req.query;
  res.json({ result: multiply(Number(a), Number(b)) });
});

app.get("/divide", (req, res) => {
  const { a, b } = req.query;
  if (Number(b) === 0) {
    return res.status(400).json({ error: "Cannot divide by zero" });
  }
  res.json({ result: divide(Number(a), Number(b)) });
});

app.listen(PORT, () => {
  console.log(`Calculator API running on port ${PORT}`);
});
