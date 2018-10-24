const lib = require("./src/patternsLib.js");
const utilLib = require("./src/utilLib.js");
const {generateTriangle} = lib;
const {readTriangleArgs} = utilLib;

const main = function() {
  let userArgs = process.argv;
  let triangleArgs = readTriangleArgs(userArgs);
  let output = generateTriangle(triangleArgs);
  console.log(output);
}

main();
