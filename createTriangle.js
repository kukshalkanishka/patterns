const lib = require("./src/generatePatternsLib.js");
const generateTriangle = lib.generateTriangle;

const main = function() {

  let triangleType = process.argv[2];
  let triangleHeight = +process.argv[3];
  let output = generateTriangle(triangleHeight, triangleType);
  console.log(output);
}

main();
