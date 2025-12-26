const Logger = require("./Logger");

class calculator2 {
  constructor() {
    (this.id = Math.floor(Math.random() * 1000)), (this.logger = new Logger());
  }

  // create Map
  operations = {
    add: { name: "Addition", symbol: "+", fn: (a, b) => a + b },
    sub: { name: "Subtraction", symbol: "-", fn: (a, b) => a - b },
    div: { name: "Division", symbol: "/", fn: (a, b) => a / b },
    mult: { name: "Multiplication", symbol: "*", fn: (a, b) => a * b },
  };

  #log = (value, num1, num2, operation) => {
    this.logger.logMessage({
      loggerId: this.id,
      result: value,
      message: `${operation.name} - ${num1} ${operation.symbol} ${num2}`,
    });
  };

  // calculate method
  calculate(opKey, num1, num2) {
    const operation = this.operations[opKey];
    if (!operation) throw new Error(`Unknown operation: ${opKey}`);

    const value = operation.fn(num1, num2);
    this.#log(value, num1, num2, operation);
    return value;
  }
}

module.exports = calculator2;
