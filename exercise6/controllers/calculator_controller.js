const add = (req, res) => {
  let num1 = parseInt(req.query.num1);
  let num2 = parseInt(req.query.num2);

  let result = num1 + num2;

  res.status(200).json({ result });
};

const sub = (req, res) => {
  let num1 = parseInt(req.query.num1);
  let num2 = parseInt(req.query.num2);

  let result = num1 - num2;

  res.status(200).json({ result });
};

const div = (req, res) => {
  let num1 = parseInt(req.query.num1);
  let num2 = parseInt(req.query.num2);

  let result = num1 / num2;

  res.status(200).json({ result });
};

const mult = (req, res) => {
  let num1 = parseInt(req.query.num1);
  let num2 = parseInt(req.query.num2);

  let result = num1 * num2;

  res.status(200).json({ result });
};

module.exports = {
  add,
  sub,
  div,
  mult,
};
