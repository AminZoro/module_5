const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

// import external routes
const calcRoutes = require("./routes/calculatorRoutes");
const friendRoutes = require("./routes/friendRoutes");

// middleware
app.use(express.json());
app.use("/", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("Module 5 Exercise 5");
});

// use imported routes
app.use("/calculator", calcRoutes);
app.use("/friends", friendRoutes);

// listen
app.listen(port, () => {
  console.log(`Exercise 5.${port}`);
});
