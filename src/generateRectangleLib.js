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

exports.generateRectangle = generateRectangle;
