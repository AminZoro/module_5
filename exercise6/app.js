const express = require("express");

const path = require("path");

const app = express();

const port = 3000;

app.use("/", express.static(path.join(__dirname, "public")));
app.use(express.json());

const calcRoutes = require("./routes/calculatorRoutes");

app.use("/calc", calcRoutes);

module.exports = app;
