const express = require("express");
const path = require("path");

const app = express();

const port = 3000;

const calcRoutes = require("./routes/calculatorRoutes.js");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("Welcome to the Calculator App! Try /calculator.html");
});

app.use("/calculator", calcRoutes);

app.listen(port, () => {
  console.log(`Exercise 2 - Server is running on: ${port}`);
});
