const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const calcRoutes = require("./routes/calculator.js");

// middleware
app.use("/", express.static(path.join(__dirname, "public")));

// routes
app.get("/", (req, res) => {
  res.send("Exercise 3");
});

app.use("/calculator", calcRoutes);

// listen
app.listen(port, () => {
  console.log(`Server up. ${port}`);
});
