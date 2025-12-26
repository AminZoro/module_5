const express = require("express");
const router = express.Router();

const calcController = require("../controllers/calcController.js");

router.route("/add").get(calcController.add);
router.route("/sub").get(calcController.sub);
router.route("/div").get(calcController.div);
router.route("/mult").get(calcController.mult);

module.exports = router;
