const express = require("express");
const router = express.Router();

// route for adding two numbers
router.get("/add", (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let sum = number1 + number2;
  console.log(sum);
  res.status(200);
  res.json({ result: sum });
});

// route for subtracting two numbers
router.get("/sub", (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let sum = number1 - number2;
  console.log(sum);
  res.status(200);
  res.json({ result: sum });
});

// route for dividing two numbers
router.get("/div", (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let sum = number1 / number2;
  console.log(sum);
  res.status(200);
  res.json({ result: sum });
});

// route for
// multiplying two numbers
router.get("/mult", (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let sum = number1 * number2;
  console.log(sum);
  res.status(200);
  res.json({ result: sum });
});

module.exports = router;
