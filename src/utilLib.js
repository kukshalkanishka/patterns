const repeat = function(times, character) {
  return new Array(times).fill(character).join("");
}

const generateEmptyLine = function(rectangleWidth) {
  let line = "";
  for(let charPosition = 0; charPosition < rectangleWidth; charPosition++) {
    let character = " ";
    if(charPosition == 0 || charPosition == rectangleWidth -1){
      character = "*";
    } 
    line += character;
  }
  return line;
}

const generateFilledRow = function(width) {
  let row = repeat(width, "*");
  return row;
}

const generateHollowRow = function(rowNum, charAtStart, charAtEnd) {
  let rowMiddleGap = repeat(Math.abs(rowNum -2) , " ");
  let row = charAtStart  + rowMiddleGap + charAtEnd;
  if(rowNum == 1) {
    row = "*";
  }

  return row;
}

const readTriangleArgs = function(userArg){ 
  let type = userArg[2];
  let height = +userArg[3];
  return {type, height};
}

const readRectangleArgs = function(userArg) {
  let type = userArg[2];
  let width = +userArg[3];
  let height = +userArg[4];
  return {type, height, width};
}

const readDiamondArgs= function(userArg) {
  let type = userArg[2];
  let height = +userArg[3];
  return {type, height};
}

const readArgs = function(userArg) { 
  let output = {};
  let pattern1Detail = userArg[2].split("_");
  let pattern1 = pattern1Detail[1];
  output.pattern1 = pattern1;
  if(pattern1 == "rectangle"){
    output.pattern1type = pattern1Detail[0]; 
    output.pattern1width = userArg[3];
    output.pattern1height = userArg[4];
    let pattern2Detail = userArg[5].split("_");
    output.pattern2 = pattern2Detail[1];
    output.pattern2type = pattern2Detail[0]; 
    output.pattern2height = userArg[6];
  }
  return output;
}

const generateLeftRow = function(text, spaceRepition) {
  return text + spaceRepition;
}

const generateRightRow = function(text, spaceRepition) {
  return spaceRepition + text;
}

const justifyRow = function(row, height) {
  let numOfSpaces = Math.abs(Math.round((height - (row.length))/2));
  let spaceRepition = repeat(numOfSpaces," ");
  let justifiedRow = spaceRepition + row + spaceRepition;

  return justifiedRow;
}
const generateUpperAngledRow = function(rowNum, numOfChars) {
  let row = generateHollowRow(rowNum, "/", "\\")
  if(rowNum == 1) {
    row = "*";
  }
  return row;
}

const generateLowerAngleRow = function(rowNum){
  let row = generateHollowRow(rowNum, "\\", "/")
  if(rowNum == 1) {
    row = "*";
  }
  return row;
}

const zip = function(list1,list2) {
  let zippedElements = [];
  let highestIndex = Math.min(list1.length, list2.length);
  for(let index = 0; index< highestIndex; index++) {
    zippedElements[index] = [list1[index], list2[index]];
  }

  return zippedElements;
}

const generateEmptyRow = function(rowNum, width, height) {

  let row = generateEmptyLine(width);
  if(rowNum == 0 ||  rowNum ==  height -1) {
    row = repeat(width , "*");
  }
  return row;
}

const generateAlternateRow = function(rowNum, width) {
  let row = repeat(width , "*");
  if(rowNum % 2 !=0) {
    row = repeat(width , "-");
  }
  return row;
}

exports.generateEmptyRow = generateEmptyRow;
exports.generateAlternateRow = generateAlternateRow;
exports.zip = zip;
exports.generateUpperAngledRow = generateUpperAngledRow;
exports.generateLowerAngleRow = generateLowerAngleRow;
exports.justifyRow = justifyRow;
exports.generateRightRow = generateRightRow;
exports.generateLeftRow = generateLeftRow;
exports.readRectangleArgs = readRectangleArgs;
exports.readDiamondArgs = readDiamondArgs;
exports.generateEmptyLine = generateEmptyLine;
exports.repeat = repeat;
exports.generateFilledRow = generateFilledRow;
exports.generateHollowRow = generateHollowRow; 
exports.readTriangleArgs = readTriangleArgs;
exports.readArgs = readArgs;
