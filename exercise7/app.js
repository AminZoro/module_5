const express = require("express");

const path = require("path");

const app = express();

const port = 3000;

const calcRoutes = require("./routes/calculator_routes");

// middleware
app.use("/", express.static(path.join(__dirname, "public")));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Module 5 Exercise 7-8a");
});

app.use("/calculator", calcRoutes);

module.exports = app;
