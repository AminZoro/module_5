const express = require("express");
const path = require("path");

const app = express();

const port = 3000;

// import your calculator routes
const calcRoutes = require("./routes/calculatorRoutes.js");

// serve static files from public
app.use(express.static(path.join(__dirname, "public")));

// default route (root page)
app.get("/", (req, res) => {
  res.send("Welcome to the Calculator App! Try /calculator.html");
});

// calculator routes
app.use("/calculator", calcRoutes);

// start server
app.listen(port, () => {
  console.log(`Exercise 2 - Server is running on: ${port}`);
});
