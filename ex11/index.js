// 11. Write a JavaScript program to generate a random hexadecimal color code.

function generateRandomHexadeicmalColorCode() {
  const hexaNumArray = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  let colorCode = "#";
  for (let i = 0; i < 6; i++) {
    colorCode = colorCode.concat(hexaNumArray[generateRandomNumber(0, 14)]);
  }
  return colorCode;
}

function generateRandomNumber(min = 0, max) {
  return Math.round(Math.random() * max);
}

console.log(generateRandomHexadeicmalColorCode());
