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

const generateFilledRow = function(rowNum, numOfChars) {
  let row = repeat(rowNum, "*");
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
  let triangleType = userArg[2];
  let triangleHeight = +userArg[3];
  return {triangleType, triangleHeight};
}

const readRectangleArgs = function(userArg) {
  let rectangleType = userArg[2];
  let rectangleWidth = +userArg[3];
  let rectangleHeight = +userArg[4];
  return {rectangleType, rectangleWidth, rectangleHeight};
}

const readDiamondArgs= function(userArg) {
  let diamondType = userArg[2];
  let diamondHeight = +userArg[3];
  return {diamondType, diamondHeight};
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
