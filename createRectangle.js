const lib = require("./src/patternsLib.js");
const utilLib = require("./src/utilLib.js");
const {generateRectangle} = lib;
const {readRectangleArgs} = utilLib;

const main = function() {
  let userArgs = process.argv;
  let rectangleArgs = readRectangleArgs(userArgs);
  let rectangle = generateRectangle(rectangleArgs);
  for(row of rectangle){
    console.log(row);
  }
}

main();
