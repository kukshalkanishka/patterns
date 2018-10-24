const lib = require("./src/patternsLib.js");
const usrInputLib = require("./src/userInputReaderLib.js");
const {generateTriangle} = lib;
const {readTriangleArgs} = usrInputLib;

const main = function() {
  let userInput = process;
  let triangleArgs = readTriangleArgs(userInput);
  let output = generateTriangle(triangleArgs);
  console.log(output);
}

main();
