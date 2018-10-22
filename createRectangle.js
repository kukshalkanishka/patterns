const lib = require("./src/generatePatternsLib.js");
const generateRectangle = lib.generateRectangle;

const main = function() {
  let rectangleType = process.argv[2];
  let rectangleWidth = +process.argv[3];
  let rectangleHeight = +process.argv[4];
  let output = generateRectangle(rectangleType, rectangleWidth, rectangleHeight);
  console.log(output);
}

main();
