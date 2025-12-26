const express = require("express");
const router = express.Router();

//  adding
router.get("/add", (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let sum = number1 + number2;
  console.log(sum);
  res.status(200);
  res.json({ result: sum });
});

//  subtracting
router.get("/sub", (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let sum = number1 - number2;
  console.log(sum);
  res.status(200);
  res.json({ result: sum });
});

// dividing
router.get("/div", (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let sum = number1 / number2;
  console.log(sum);
  res.status(200);
  res.json({ result: sum });
});


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
