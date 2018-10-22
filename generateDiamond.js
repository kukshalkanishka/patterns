const lib = require("./src/generateDiamondLib.js");
const generateDiamond = lib.generateDiamond;

const main = function() {
  let type = process.argv[2];
  let height = +process.argv[3];
  let output = generateDiamond(height, type);
  console.log(output);
}

main();
