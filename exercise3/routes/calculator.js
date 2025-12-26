const express = require("express");
const router = express.Router();

router.get("/addition", (req, res) => {
  let num1 = parseInt(req.query.num1);
  let num2 = parseInt(req.query.num2);
  let result = num1 + num2;
  console.log(result);
  res.status(200);
  res.json({ result: result });
});

router.get("/subtraction", (req, res) => {
  let num1 = parseInt(req.query.num1);
  let num2 = parseInt(req.query.num2);
  let result = num1 - num2;
  console.log(result);
  res.status(200);
  res.json({ result: result });
});

router.get("/division", (req, res) => {
  let num1 = parseInt(req.query.num1);
  let num2 = parseInt(req.query.num2);
  let result = num1 / num2;
  console.log(result);
  res.status(200);
  res.json({ result: result });
});

router.get("/multiplication", (req, res) => {
  let num1 = parseInt(req.query.num1);
  let num2 = parseInt(req.query.num2);
  let result = num1 * num2;
  console.log(result);
  res.status(200);
  res.json({ result: result });
});

module.exports = router;
