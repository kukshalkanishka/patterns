const lib = require("./src/patternsLib.js");
const usrInputLib = require("./src/userInputReaderLib.js");
const {generateTriangle} = lib;
const {readTriangleArgs} = usrInputLib;

const main = function() {
  let triangleArgs = readTriangleArgs();
  let output = generateTriangle(triangleArgs);
  console.log(output);
}

main();
