// Server #1
const express = require("express");

const app1 = express();
const port1 = 3010;

app1.get("/", (req, res) => {
  res.send(`Hello World from server1: ${port1}`);
});

app1.listen(port1, () => {
  console.log(`server is up with ${port1}`);
});
