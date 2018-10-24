const generateHyphenLine = function(rectangleWidth) {
  let line = "";
  for(let charPosition = 0; charPosition < rectangleWidth; charPosition++) {
    line += "-";
  }
  return line;
}

const generateStarLine = function(rectangleWidth) {
  let line = "";
  for(let charPosition = 0; charPosition < rectangleWidth; charPosition++) {
    line += "*";
  }
  return line;
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

const repeat = function(times, character) {
  let repeated = "";
  for(charPosition = 0; charPosition <= times; charPosition++) {
    repeated += character;
  }
  return repeated;
}

const generateFilledRow = function(rowNum, numOfChars) {
  let row = "";
  let spaceValue = (numOfChars - (rowNum +2));
  let spaceRepition = repeat(spaceValue/2, " ");
  let starRepitition =  repeat(rowNum, "*");
  row += spaceRepition + starRepitition;

  return row;
}

const generateHollowRow = function(rowNum, numOfChars) {
  let row = "";
  let spaceValue = (numOfChars - (rowNum +2));
  let spaceRepition = repeat(spaceValue/2, " ");
  let starRepitition = repeat(0, "*");
  let rowMiddleGap = repeat(rowNum -2 , " ");
  row = spaceRepition + starRepitition + rowMiddleGap + starRepitition;
  if(rowNum == 0) {
    row = spaceRepition +starRepitition;
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

exports.readRectangleArgs = readRectangleArgs;
exports.readDiamondArgs = readDiamondArgs;
exports.generateStarLine = generateStarLine;
exports.generateHyphenLine = generateHyphenLine;
exports.generateEmptyLine = generateEmptyLine;
exports.repeat = repeat;
exports.generateFilledRow = generateFilledRow;
exports.generateHollowRow = generateHollowRow; 
exports.readTriangleArgs = readTriangleArgs;
