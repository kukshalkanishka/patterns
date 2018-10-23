const lib = require("./utilLib.js");
let {generateHyphenLine} = lib;
let {generateStarLine} = lib;
let {generateEmptyLine} = lib;
let {repeat} = lib;
let {generateFilledRow} = lib;
let {generateHollowRow} = lib;

const generateFilledRect = function(rectangleWidth) {
  return generateStarLine(rectangleWidth);
}

const generateEmptyRect = function(lineNumber, rectangleWidth, rectangleHeight) {

  let rectangle = generateEmptyLine(rectangleWidth);
  if(lineNumber == 0 ||  lineNumber == rectangleHeight -1) {
    rectangle = generateStarLine(rectangleWidth);
  }
  return rectangle;
}

const generateAlternateRec = function(lineNumber, rectangleWidth, rectangleHeight) {
  let rectangle = generateStarLine(rectangleWidth);
  if(lineNumber % 2 !=0) {
    rectangle = generateHyphenLine(rectangleWidth);
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



const generateRectangle = function(rectangleType, rectangleWidth, rectangleHeight) {
  let finalRectangle = "";
  let delimiter = "";
  for(let lineNumber=0; lineNumber < rectangleHeight; lineNumber++) {
    finalRectangle += delimiter + generateSelectedRect(rectangleType, rectangleWidth, rectangleHeight, lineNumber); 
    delimiter = "\n";
  }
  return finalRectangle;
}

const generateTriangle = function(triangleHeight, triangleType) {
  let triangle = "";
  let delimiter = "";

  for(let rowNum = 0; rowNum < triangleHeight; rowNum++) {

    if(triangleType == "left") {
      triangle += delimiter + repeat(rowNum,"*");
      delimiter = "\n"
    }

    if(triangleType == "right") {
      let numOfChars = triangleHeight - (rowNum +2);
      triangle += delimiter + repeat(numOfChars," ");
      triangle += repeat(rowNum,"*");
      delimiter = "\n";
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

const generateDiamond = function(height, type) {
  let delimiter = "";
  let upperTriangle = "";
  let lowerTriangle = "";
  let middleRow = "";
  let row = generateFilledRow(0, height);
  let diamond = "";

  for(let rowNum = 0; rowNum < height -2; rowNum +=2 ) {
    if(type == "filled") { 
      row = generateFilledRow(rowNum , height);
      middleRow = repeat(height -1,"*");
    }

    if(type == "hollow") {
      row = generateHollowRow(rowNum, height);
      middleRow = generateHollowRow(height -1 , height); 
    } 

    upperTriangle += delimiter + row;
    lowerTriangle  = row + delimiter + lowerTriangle;
    delimiter = "\n";
  }
  if(type == "angled") {
    diamond = generateAngledDiamond(height);
  }

  if(type != "angled"){
    diamond = upperTriangle +"\n" + middleRow +"\n" + lowerTriangle; 
  }

  return diamond;
}

exports.generateTriangle = generateTriangle;
exports.generateDiamond = generateDiamond;
exports.generateRectangle = generateRectangle;
