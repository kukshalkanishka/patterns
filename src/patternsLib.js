const lib = require("./utilLib.js");
let {generateHyphenLine} = lib;
let {generateStarLine} = lib;
let {generateEmptyLine} = lib;
let {repeat} = lib;
let {generateFilledRow} = lib;
let {generateHollowRow} = lib;
let {generateLeftRow} = lib;
let {generateRightRow} = lib;
let {justifyRow} = lib;

const generateEmptyRect = function(lineNumber, rectangleWidth, rectangleHeight) {

  let rectangle = generateEmptyLine(rectangleWidth);
  if(lineNumber == 0 ||  lineNumber == rectangleHeight -1) {
    rectangle = repeat(rectangleWidth , "*");
  }
  return rectangle;
}

const generateAlternateRec = function(lineNumber, rectangleWidth, rectangleHeight) {
  let rectangle = repeat(rectangleWidth , "*");
  if(lineNumber % 2 !=0) {
    rectangle = repeat(rectangleWidth , "-");
  }
  return rectangle;
}

const generateSelectedRect = function(rectangleType, rectangleWidth, rectangleHeight, lineNumber) {
  let finalRectangle = "";
  switch (rectangleType){
    case "filled" : 
    finalRectangle = generateFilledRow(rectangleWidth);
      break;
    case "empty": 
    finalRectangle = generateEmptyRect(lineNumber, rectangleWidth, rectangleHeight);
      break;
    case "alternating" : 
    finalRectangle = generateAlternateRec(lineNumber, rectangleWidth, rectangleHeight);
      break;
  } 
  return finalRectangle;
}

const generateRectangle = function(rectangleArgs) {
  let finalRectangle = [];
  let {rectangleType} = rectangleArgs;
  let {rectangleWidth} = rectangleArgs;
  let {rectangleHeight} = rectangleArgs;

  for(let lineNumber=0; lineNumber < rectangleHeight; lineNumber++) {
    finalRectangle.push(generateSelectedRect(rectangleType, rectangleWidth, rectangleHeight, lineNumber)); 
  }
  return finalRectangle;
}

const generateSelectedTriangle = function(triangleHeight, generateRow) {
  let triangle = [];
  for(rowNum = 0; rowNum < triangleHeight; rowNum++){
    let text = repeat(rowNum +1, "*");
    let spaceRepition = repeat(triangleHeight - text.length, " "); 
    row = generateRow(text, spaceRepition);
    triangle.push(row);
  }
  return triangle;
}

const generateTriangle = function(triangleArgs){
  let {triangleType} = triangleArgs;
  let {triangleHeight} = triangleArgs;
  let row = "";
  switch(triangleType){
    case "left" : rowType = generateLeftRow;
      break;

    default : rowType = generateRightRow; 
      break;
  }
  let triangle = generateSelectedTriangle(triangleHeight, rowType);
  return triangle;
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

const generateAngledDiamond = function(height) {
  let middleRow = generateHollowRow(height, "*", "*") ;
  let diamond = [middleRow];

  for(let rowNum = height-2; rowNum > 0; rowNum -= 2 ) {

    let upperRow = generateUpperAngledRow(rowNum , height);
    let justifiedRow = justifyRow(upperRow, height);
    diamond.unshift(justifiedRow);
    let lowerRow = generateLowerAngleRow(rowNum , height);
    justifiedRow = justifyRow(lowerRow, height);
    diamond.push(justifiedRow);
  }

  return diamond;
}

const generateDiamond = function(diamondArgs) {
  let {diamondType} = diamondArgs;
  let height = diamondArgs.diamondHeight;
  let diamond = [];
  let row = "";

  for(let rowNum = -(height -1); rowNum < height; rowNum+=2 ) {
    switch(diamondType){
      case "filled" : {
        row = generateFilledRow(height - Math.abs(rowNum));
      }
        break;

      case "hollow": {
        row = generateHollowRow(height - Math.abs(rowNum), "*", "*"); 
      } 
        break;
    }

    let justifiedRow = justifyRow(row, height);
    diamond.push(justifiedRow);

  }
  if (diamondType == "angled") {
    diamond = generateAngledDiamond(height);
  }
  return diamond;
}

exports.generateTriangle = generateTriangle;
exports.generateDiamond = generateDiamond;
exports.generateRectangle = generateRectangle;
