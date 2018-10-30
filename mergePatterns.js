const lib = require("./src/patternsLib.js");
const utilLib = require("./src/utilLib.js");
const {mergePatterns} = lib;
const {readArgs} = utilLib;

const main = function() {
  let userArgs = process.argv;
  let patternsArgs = readArgs(userArgs);
  let patterns = mergePatterns(patternsArgs);
  for(lines of patterns){
    let row = lines.join(" ");
    console.log(row);
  }
}

main();
