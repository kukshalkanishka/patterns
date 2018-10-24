const lib = require("./src/patternsLib.js");
const usrInputLib = require("./src/userInputReaderLib.js");
const {generateDiamond} = lib;
const {readDiamondArgs} = usrInputLib;

const main = function() {
  let diamondArgs = readDiamondArgs();
  let output = generateDiamond(diamondArgs);
  console.log(output);
}

main();
