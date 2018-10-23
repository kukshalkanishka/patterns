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

exports.generateStarLine = generateStarLine;
exports.generateHyphenLine = generateHyphenLine;
exports.generateEmptyLine = generateEmptyLine;
exports.repeat = repeat;
exports.generateFilledRow = generateFilledRow;
exports.generateHollowRow = generateHollowRow; 
