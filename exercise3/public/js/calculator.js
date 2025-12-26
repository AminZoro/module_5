const handleCalc = () => {
  // get and set values
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;
  const operator = document.getElementById("operator").value;

  
  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("result").innerHTML =
      "Error: Enter numbers in both inputs";
  }

  // store operators
  const symbols = {
    addition: "+",
    subtraction: "-",
    division: "/",
    multiplication: "*",
  };

  // symbols
  const symbol = symbols[operator];
  console.log(symbol);

  // URL template
  const url = `calculator/${operator}?num1=${num1}&num2=${num2}`;

  // fetch
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById(
        "result"
      ).innerHTML = `${num1} ${symbol} ${num2} = ${data.result}`;
    });
};