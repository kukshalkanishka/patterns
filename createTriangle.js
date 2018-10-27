const lib = require("./src/patternsLib.js");
const utilLib = require("./src/utilLib.js");
const {generateTriangle} = lib;
const {readTriangleArgs} = utilLib;

const main = function() {
  let userArgs = process.argv;
  let triangleArgs = readTriangleArgs(userArgs);
  let triangle = generateTriangle(triangleArgs);
  for(row of triangle){
    console.log(row);
  }
}

main();
