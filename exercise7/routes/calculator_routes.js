const calcController = require("../controllers/calculator_controller");

const express = require("express");

const router = express.Router();

router.get("/add", (req, res) => {
  calcController.add(req, res);
});

router.get("/sub", (req, res) => {
  calcController.sub(req, res);
});

router.get("/div", (req, res) => {
  calcController.div(req, res);
});

router.get("/mult", (req, res) => {
  calcController.mult(req, res);
});

module.exports = router;
