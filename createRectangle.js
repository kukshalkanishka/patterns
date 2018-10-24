const lib = require("./src/patternsLib.js");
const usrInputLib = require("./src/userInputReaderLib.js");
const generateRectangle = lib.generateRectangle;
const {readRectangleArgs} = usrInputLib;

const main = function() {
  let rectangleArgs = readRectangleArgs();
  let output = generateRectangle(rectangleArgs);
  console.log(output);
}

main();
