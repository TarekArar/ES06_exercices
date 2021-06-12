// Write a JavaScript program to converts a specified number to an array of digits

function numberToDigitsArray(number) {
  return number
    .toString()
    .split("")
    .map((digit) => Number(digit));
}
// some tests
console.log(numberToDigitsArray(5543654));
console.log(numberToDigitsArray(01));
console.log(numberToDigitsArray(22));
console.log(numberToDigitsArray(23856));
