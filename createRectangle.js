const lib = require("./src/patternsLib.js");
const utilLib = require("./src/utilLib.js");
const {generateRectangle} = lib;
const {readRectangleArgs} = utilLib;

const main = function() {
  let userArgs = process.argv;
  let rectangleArgs = readRectangleArgs(userArgs);
  let output = generateRectangle(rectangleArgs);
  console.log(output);
}

main();
