const lib = require("./utilLib.js");
let {generateHyphenLine} = lib;
let {generateStarLine} = lib;
let {generateEmptyLine} = lib;
let {repeat} = lib;
let {generateFilledRow} = lib;
let {generateHollowRow} = lib;

const generateFilledRect = function(rectangleWidth) {
  return repeat(rectangleWidth -1, "*");
}

const generateEmptyRect = function(lineNumber, rectangleWidth, rectangleHeight) {

  let rectangle = generateEmptyLine(rectangleWidth);
  if(lineNumber == 0 ||  lineNumber == rectangleHeight -1) {
    rectangle = repeat(rectangleWidth -1, "*");
  }
  return rectangle;
}

const generateAlternateRec = function(lineNumber, rectangleWidth, rectangleHeight) {
  let rectangle = repeat(rectangleWidth -1, "*");
  if(lineNumber % 2 !=0) {
    rectangle = repeat(rectangleWidth -1, "-");
  }
  return rectangle;
}

const generateSelectedRect = function(rectangleType, rectangleWidth, rectangleHeight, lineNumber) {
  let finalRectangle = "";
  if(rectangleType == "filled") {
    finalRectangle = generateFilledRect(rectangleWidth);
  }
  if(rectangleType == "empty") {
    finalRectangle = generateEmptyRect(lineNumber, rectangleWidth, rectangleHeight);
  }

  if(rectangleType == "alternating") {
    finalRectangle = generateAlternateRec(lineNumber, rectangleWidth, rectangleHeight);
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

const generateTriangle = function(triangleArgs){
  let triangle = [];
  let {triangleType} = triangleArgs;
  let {triangleHeight} = triangleArgs;
  let line = "";

  for(let rowNum = 0; rowNum < triangleHeight; rowNum++) {

    if(triangleType == "left") {
      triangle.push(repeat(rowNum,"*"));
    }

    if(triangleType == "right") {
      let numOfChars = triangleHeight - (rowNum +2);
      line = repeat(numOfChars," ") + repeat(rowNum,"*");
      triangle.push(line);
    }
  }

  return triangle;
}

const generateUpperAngledRow = function(rowNum, numOfChars) {
  let row = "";
  let spaceValue = (numOfChars - (rowNum +2));
  let spaceRepition = repeat(spaceValue/2, " ");
  let bckSlashRepitition = repeat(0, "/");
  let frntSlashRepitition = repeat(0, "\\");
  let rowMiddleGap = repeat(rowNum -2 , " ");
  let starRepitition = repeat(0,"*");
  row = spaceRepition + bckSlashRepitition + rowMiddleGap + frntSlashRepitition;
  if(rowNum == 0) {
    row = spaceRepition +starRepitition;
  }

  return row;
}

const generateLowerAngleRow = function(rowNum, numOfChars) {
  let row = "";
  let spaceValue = (numOfChars - (rowNum +2));
  let spaceRepition = repeat(spaceValue/2, " ");
  let bckSlashRepitition = repeat(0, "/");
  let frntSlashRepitition = repeat(0, "\\");
  let rowMiddleGap = repeat(rowNum -2 , " ");
  let starRepitition = repeat(0,"*");
  row = spaceRepition + frntSlashRepitition + rowMiddleGap + bckSlashRepitition;
  if(rowNum == 0) {
    row = spaceRepition +starRepitition;
  }

  return row;
}

const generateAngledDiamond = function(height) {
  let delimiter = "";
  let upperTriangle = "";
  let lowerTriangle = "";
  let middleRow = "";
  for(let rowNum = 0; rowNum < height -2; rowNum +=2 ) {
    let upperRow = generateUpperAngledRow(rowNum , height);
    let lowerRow = generateLowerAngleRow(rowNum , height);
    upperTriangle += delimiter + upperRow;
    lowerTriangle = lowerRow + delimiter + lowerTriangle;
    delimiter = "\n";
    middleRow = generateHollowRow(height -1, height) ;
  }
  let diamond = upperTriangle + "\n" + middleRow + "\n" + lowerTriangle;
  return diamond;
}

const generateDiamond = function(diamondArgs) {
  let delimiter = "";
  let upperTriangle = "";
  let lowerTriangle = "";
  let middleRow = "";
  let diamond = "";
  let {diamondType} = diamondArgs;
  let {diamondHeight} = diamondArgs;
  let row = generateFilledRow(0, diamondHeight);

  for(let rowNum = 0; rowNum < diamondHeight -2; rowNum +=2 ) {
    if(diamondType == "filled") { 
      row = generateFilledRow(rowNum , diamondHeight);
      middleRow = repeat(diamondHeight -1,"*");
    }

    if(diamondType == "hollow") {
      row = generateHollowRow(rowNum, diamondHeight);
      middleRow = generateHollowRow(diamondHeight -1 , diamondHeight); 
    } 

    upperTriangle += delimiter + row;
    lowerTriangle  = row + delimiter + lowerTriangle;
    delimiter = "\n";
  }
  if(diamondType == "angled") {
    diamond = generateAngledDiamond(diamondHeight);
  }

  if(diamondType != "angled"){
    diamond = upperTriangle +"\n" + middleRow +"\n" + lowerTriangle; 
  }

  return diamond;
}

exports.generateTriangle = generateTriangle;
exports.generateDiamond = generateDiamond;
exports.generateRectangle = generateRectangle;
