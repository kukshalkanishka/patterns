const lib = require("./src/patternsLib.js");
const usrInputLib = require("./src/userInputReaderLib.js");
const {generateDiamond} = lib;
const {readDiamondArgs} = usrInputLib;

const main = function() {
  let userInput = process;
  let diamondArgs = readDiamondArgs(userInput);
  let output = generateDiamond(diamondArgs);
  console.log(output);
}

main();
