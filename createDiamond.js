const lib = require("./src/patternsLib.js");
const utilLib = require("./src/utilLib.js");
const {generateDiamond} = lib;
const {readDiamondArgs} = utilLib;

const main = function() {
  let userArgs = process.argv;
  let diamondArgs = readDiamondArgs(userArgs);
  let diamond = generateDiamond(diamondArgs);
  for(row of diamond) { 
  console.log(row);
  }
}

main();
