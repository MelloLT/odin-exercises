const leapYears = function (year) {
  const isDivisibleByFour = year % 4 === 0;
  const isCentury = year % 100 === 0;
  const isDivisibleByFourHundr = year % 400 === 0;

  if ((isDivisibleByFour && !isDivisibleByFour) || isDivisibleByFourHundr) {
    return true;
  } else {
    return false;
  }
};

console.log(leapYears(2000));

// Do not edit below this line
module.exports = leapYears;
