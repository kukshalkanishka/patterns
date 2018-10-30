const lib = require("./utilLib.js");
const {generateHyphenLine} = lib;
const {generateStarLine} = lib;
const {generateEmptyLine} = lib;
const {repeat} = lib;
const {generateFilledRow} = lib;
const {generateHollowRow} = lib;
const {generateLeftRow} = lib;
const {generateRightRow} = lib;
const {justifyRow} = lib;
const {generateUpperAngledRow} = lib;
const {generateLowerAngleRow} = lib;
const {zip} = lib;
const {generateEmptyRow} = lib;
const {generateAlternateRow} = lib;

const generateRow = function(type, width, rectangleHeight, rowNum) {
  let finalRow= "";
  switch (type){
    case "filled" : 
    finalRow = generateFilledRow(width);
      break;
    case "empty": 
    finalRow = generateEmptyRow(rowNum, width, rectangleHeight);
      break;
    case "alternating" : 
    finalRow = generateAlternateRow(rowNum, width, rectangleHeight);
      break;
  } 
  return finalRow;
}

const generateRectangle = function(rectangleArgs) {
  let finalRectangle = [];
  let {type} = rectangleArgs;
  let {width} = rectangleArgs;
  let {height} = rectangleArgs;
  for(let rowNum=0; rowNum < height; rowNum++) {
    finalRectangle.push(generateRow(type, width, height, rowNum)); 
  }
  return finalRectangle;
}

const generateSelectedTriangle = function(height, generateRow) {
  let triangle = [];
  for(rowNum = 0; rowNum < height; rowNum++){
    let text = repeat(rowNum +1, "*");
    let spaceRepition = repeat(height - text.length, " "); 
    row = generateRow(text, spaceRepition);
    triangle.push(row);
  }
  return triangle;
}

const generateTriangle = function(triangleArgs){
  let {type} = triangleArgs;
  let {height} = triangleArgs;
  let row = "";
  switch(type){
    case "left" : rowType = generateLeftRow;
      break;

    default : rowType = generateRightRow; 
      break;
  }
  let triangle = generateSelectedTriangle(height, rowType);
  return triangle;
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
  let {type} = diamondArgs;
  let height = diamondArgs.height;
  let diamond = [];
  let row = "";

  for(let rowNum = -(height -1); rowNum < height; rowNum+=2 ) {
    switch(type){
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
  if (type == "angled") {
    diamond = generateAngledDiamond(height);
  }
  return diamond;
}

const mergePatterns = function(patternsArgs) {
  const {pattern1type, pattern2type,
         pattern1height, pattern2height, 
         pattern1width, pattern1, pattern2,
         pattern2width} = patternsArgs;
  let func1 = generateRectangle;
  let func2 = generateTriangle;
  let output1 = func1({type : pattern1type, width : +pattern1width, height: +pattern1height});
  let output2 = func2({type : pattern2type, width : +pattern2width, height: +pattern2height});
  return zip(output1, output2);
}

exports.generateTriangle = generateTriangle;
exports.generateDiamond = generateDiamond;
exports.generateRectangle = generateRectangle;
exports.mergePatterns = mergePatterns;
