// Server #2
const express = require("express");

const app2 = express();
const port2 = 3020;

app2.get("/", (req, res) => {
  res.send(`Hello World from server2: ${port2}`);
});

app2.listen(port2, () => {
  console.log(`server is up with ${port2}`);
});
