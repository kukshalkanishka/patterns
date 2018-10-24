const lib = require("./src/patternsLib.js");
const usrInputLib = require("./src/userInputReaderLib.js");
const {generateRectangle} = lib;
const {readRectangleArgs} = usrInputLib;

const main = function() {
  let userArgs = process;
  let rectangleArgs = readRectangleArgs(userArgs);
  let output = generateRectangle(rectangleArgs);
  console.log(output);
}

main();
