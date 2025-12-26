const express = require('express');

// server 1
const app1 = express();
const port1 = 3010;

// server 2
const app2 = express();
const port2 = 3020;

// server 3
const app3 = express();
const port3 = 3030;

// routes
app1.get("/", (req, res) => {
  res.send("Hello World from server1!");
});

app2.get("/", (req, res) => {
  res.send("Hello World from server2!");
});

app3.get("/", (req, res) => {
  res.send("Hello World from server3!");
});


// listen
app1.listen(port1, () => {
  console.log(`server is up with ${port1}`);
});

app2.listen(port2, () => {
  console.log(`server is up with ${port2}`);
});

app3.listen(port3, () => {
  console.log(`server is up with ${port3}`);
});