const repeatString = function (word, times) {
  if (times < 0) return "Error";
  let arr = "";
  for (let i = 0; i < times; i++) {
    arr += word;
  }
  return arr;
};

console.log(repeatString("hey", 3));

// Do not edit below this line
module.exports = repeatString;
