const readTriangleArgs = function(process){ 
  let triangleType = process.argv[2];
  let triangleHeight = +process.argv[3];
  return {triangleType, triangleHeight};
}

exports.readTriangleArgs = readTriangleArgs;

const readRectangleArgs = function(process) {
  let rectangleType = process.argv[2];
  let rectangleWidth = +process.argv[3];
  let rectangleHeight = +process.argv[4];
  return {rectangleType, rectangleWidth, rectangleHeight};
}

exports.readRectangleArgs = readRectangleArgs;

const readDiamondArgs= function(process) {
  let diamondType = process.argv[2];
  let diamondHeight = +process.argv[3];
  return {diamondType, diamondHeight};
}

exports.readDiamondArgs = readDiamondArgs;
