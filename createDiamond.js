const lib = require("./src/patternsLib.js");
const usrInputLib = require("./src/userInputReaderLib.js");
const {generateDiamond} = lib;
const {readDiamondArgs} = usrInputLib;

const main = function() {
  let userArgs = process;
  let diamondArgs = readDiamondArgs(userArgs);
  let output = generateDiamond(diamondArgs);
  console.log(output);
}

main();
