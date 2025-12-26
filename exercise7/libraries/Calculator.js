const Logger = require("../libraries/Logger");

class Calculator {
  constructor() {
    (this.id = Math.floor(Math.random() * 1000)), (this.logger = new Logger());
  }

  type = [
    ["Addition", "+"],
    ["Subtraction", "-"],
    ["Division", "/"],
    ["Multiplication", "*"],
  ];

  // private method
  #log = (value, num1, num2, id, calcType, typeOperator) => {
    console.log(`[Calculator Id: ${this.id}] - Result: ${value}`);
    this.logger.logMessage({
      loggerId: id,
      result: value,
      message: `${calcType} - ${num1} ${typeOperator} ${num2}`,
    });
  };

  add(num1, num2) {
    const value = num1 + num2;
    this.#log(value, num1, num2, this.id, this.type[0][0], this.type[0][1]);
    return value;
  }

  sub(num1, num2) {
    const value = num1 - num2;
    this.#log(value, num1, num2, this.id, this.type[1][0], this.type[1][1]);
    return value;
  }

  div(num1, num2) {
    const value = num1 / num2;
    this.#log(value, num1, num2, this.id, this.type[2][0], this.type[2][1]);
    return value;
  }

  mult(num1, num2) {
    const value = num1 * num2;
    this.#log(value, num1, num2, this.id, this.type[3][0], this.type[3][1]);
    return value;
  }
}

module.exports = Calculator;
