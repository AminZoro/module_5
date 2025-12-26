// Server #3
const express = require("express");

const app3 = express();
const port3 = 3030;

app3.get("/", (req, res) => {
  res.send(`Hello World from server3 on port: ${port3}`);
});

app3.listen(port3, () => {
  console.log(`server is up with ${port3}`);
});
