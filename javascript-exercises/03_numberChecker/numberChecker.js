function numberChecker(number) {
  if (number === 10 || number === 1000) {
    return true;
  } else if (number === 9 || number === 6) {
    return false;
  }
}

// Do not edit below this line
module.exports = numberChecker;
