const lib = require("./src/patternsLib.js");
const utilLib = require("./src/utilLib.js");
const {generateDiamond} = lib;
const {readDiamondArgs} = utilLib;

const main = function() {
  let userArgs = process.argv;
  let diamondArgs = readDiamondArgs(userArgs);
  let output = generateDiamond(diamondArgs);
  console.log(output);
}

main();
