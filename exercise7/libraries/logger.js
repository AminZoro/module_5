class Logger {
  logMessage({ loggerId, result, message }) {
    console.log(`Logger Id: ${loggerId} - ${message} - Result: ${result}`);
  }
}

module.exports = Logger;
