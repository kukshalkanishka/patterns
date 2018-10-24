const lib = require("./src/patternsLib.js");
const usrInputLib = require("./src/userInputReaderLib.js");
const {generateTriangle} = lib;
const {readTriangleArgs} = usrInputLib;

const main = function() {
  let userArgs = process;
  let triangleArgs = readTriangleArgs(userArgs);
  let output = generateTriangle(triangleArgs);
  console.log(output);
}

main();
