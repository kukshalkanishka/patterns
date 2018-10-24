const assert = require("assert");
const lib = require("../src/patternsLib.js");
const {generateRectangle} = lib; 
const {generateTriangle} = lib; 
const {generateDiamond} = lib; 

const repeat = function(times, characters, delimiter) {
  return new Array(times).fill(characters).join(delimiter);
}

//--------------------------------------(filled Rectangle)--------------------------------//

const oneStar = repeat(1,"*", "");
const filledRect_1_3 = repeat(3, oneStar, "\n");
let rectangleArgs = {rectangleType: "filled", rectangleWidth: 1, rectangleHeight : 3}; 
assert.equal(generateRectangle(rectangleArgs),filledRect_1_3);

const threeStars = repeat(3, "*", "");
const filledRect_3_3 = repeat(3, threeStars, "\n"); 
rectangleArgs = {rectangleType: "filled", rectangleWidth: 3, rectangleHeight : 3}; 
assert.equal(generateRectangle(rectangleArgs),filledRect_3_3);

const filledRect_3_8 = repeat(8, threeStars, "\n"); 
rectangleArgs = {rectangleType: "filled", rectangleWidth: 3, rectangleHeight : 8}; 
assert.equal(generateRectangle(rectangleArgs),filledRect_3_8);

//--------------------------------------(Empty Rectangle)-------------------------------//

const emptyRect_3_2 = repeat(2, threeStars, "\n");
rectangleArgs = {rectangleType: "empty", rectangleWidth: 3, rectangleHeight : 2}; 

assert.equal(generateRectangle(rectangleArgs), emptyRect_3_2);

let middle3Rows  = repeat(3, "* *", "\n");
const emptyRect_3_5 = threeStars + "\n" + middle3Rows + "\n" + threeStars;
rectangleArgs = {rectangleType: "empty", rectangleWidth: 3, rectangleHeight : 5}; 

assert.equal(generateRectangle(rectangleArgs), emptyRect_3_5);

const fiveStars = repeat(5, "*", "");
let middle4Rows = repeat(4, "*   *", "\n"); 
const emptyRect_5_6 = fiveStars + "\n" + middle4Rows + "\n" + fiveStars;
rectangleArgs = {rectangleType: "empty", rectangleWidth: 5, rectangleHeight : 6}; 

assert.equal(generateRectangle(rectangleArgs), emptyRect_5_6);

const eightStars = repeat(8, "*", "");
middle3Rows = repeat(3, "*      *", "\n"); 
const emptyRect_8_5 = eightStars + "\n" + middle3Rows + "\n" + eightStars;
rectangleArgs = {rectangleType: "empty", rectangleWidth: 8, rectangleHeight : 5}; 

assert.equal(generateRectangle(rectangleArgs), emptyRect_8_5);

//--------------------------------------(Alternating rectangle)--------------------------------//

const threeHyphens = repeat(3, "-", ""); 
let alternateRect_3_5 = threeStars + "\n" + threeHyphens + "\n" + threeStars + "\n" + threeHyphens + "\n" + threeStars;
rectangleArgs = {rectangleType: "alternating", rectangleWidth: 3, rectangleHeight : 5}; 

assert.equal(generateRectangle(rectangleArgs), alternateRect_3_5);

const fiveHyphens = repeat(5, "-", "");
let alternateRect_5_6  = fiveStars + "\n" + fiveHyphens + "\n" + fiveStars 
alternateRect_5_6 += "\n" + fiveHyphens + "\n" + fiveStars + "\n" +fiveHyphens;
rectangleArgs = {rectangleType: "alternating", rectangleWidth: 5, rectangleHeight : 6}; 

assert.equal(generateRectangle(rectangleArgs), alternateRect_5_6);

const eightHyphens = repeat(8, "-", ""); 
const alternateRect_8_5  = eightStars + "\n" + eightHyphens + "\n" + eightStars + "\n" + eightHyphens + "\n" + eightStars;
rectangleArgs = {rectangleType: "alternating", rectangleWidth: 8, rectangleHeight : 5}; 

assert.equal(generateRectangle(rectangleArgs), alternateRect_8_5);

//-----------------------------------------(Left triangle)-------------------------------------------------//

const twoStars = repeat(2, "*", "");
let expectedTriangle = oneStar + "\n" + twoStars + "\n" + threeStars;
triangleArgs = {triangleType: "left", triangleHeight : 3}; 

assert.equal(generateTriangle(triangleArgs), expectedTriangle);

const fourStars = repeat(4, "*", "");
expectedTriangle = oneStar + "\n" + twoStars + "\n" + threeStars + "\n" + fourStars + "\n" + fiveStars;
triangleArgs = {triangleType: "left", triangleHeight : 5}; 

assert.equal(generateTriangle(triangleArgs), expectedTriangle);

//-----------------------------------------(Right triangle)-------------------------------------------------//

expectedTriangle  = "  *" + "\n"; 
expectedTriangle += " **" + "\n"; 
expectedTriangle += "***";
triangleArgs = {triangleType: "right", triangleHeight : 3}; 

assert.equal(generateTriangle(triangleArgs), expectedTriangle);

expectedTriangle  = "    *" + "\n"; 
expectedTriangle += "   **" + "\n";
expectedTriangle += "  ***" + "\n";
expectedTriangle += " ****" + "\n";
expectedTriangle += "*****";
triangleArgs = {triangleType: "right", triangleHeight : 5}; 

assert.equal(generateTriangle(triangleArgs), expectedTriangle);

//-----------------------------------------(Filled Diamond)-------------------------------------------------//

let upperHalfDiamond = "  *" + "\n";
upperHalfDiamond    += " ***";

let lowerHalfDiamond = " ***" + "\n"; 
lowerHalfDiamond    += "  *";

let expectedDiamond = upperHalfDiamond + "\n" + fiveStars + "\n" + lowerHalfDiamond;
diamondArgs = {diamondType: "filled", diamondHeight : 5}; 

assert.equal(generateDiamond(diamondArgs), expectedDiamond);

upperHalfDiamond  = "   *" + "\n"; 
upperHalfDiamond += "  ***" + "\n"; 
upperHalfDiamond += " *****";

lowerHalfDiamond =  " *****" + "\n";
lowerHalfDiamond += "  ***" + "\n";
lowerHalfDiamond += "   *";

const sevenStars = repeat(7, "*", "");

expectedDiamond = upperHalfDiamond + "\n" + sevenStars + "\n" + lowerHalfDiamond;
diamondArgs = {diamondType: "filled", diamondHeight : 7}; 

assert.equal(generateDiamond(diamondArgs), expectedDiamond);

upperHalfDiamond  = "    *" + "\n";
upperHalfDiamond += "   ***" + "\n"; 
upperHalfDiamond += "  *****" + "\n";
upperHalfDiamond += " *******";

lowerHalfDiamond  = " *******" + "\n";
lowerHalfDiamond += "  *****" + "\n";
lowerHalfDiamond += "   ***" + "\n";
lowerHalfDiamond += "    *";

const nineStars = repeat(9, "*", "");

expectedDiamond = upperHalfDiamond + "\n" + nineStars + "\n" + lowerHalfDiamond;
diamondArgs = {diamondType: "filled", diamondHeight : 9}; 

assert.equal(generateDiamond(diamondArgs), expectedDiamond);

//-----------------------------------------(Hollow Diamond)-------------------------------------------------//

upperHalfDiamond  = "  *" + "\n";
upperHalfDiamond += " * *";

lowerHalfDiamond  = " * *" + "\n"; 
lowerHalfDiamond += "  *";

expectedDiamond = upperHalfDiamond + "\n" + "*   *"+ "\n" + lowerHalfDiamond;
diamondArgs = {diamondType: "hollow", diamondHeight : 5}; 

assert.equal(generateDiamond(diamondArgs),expectedDiamond);

upperHalfDiamond  = "   *" + "\n"; 
upperHalfDiamond += "  * *" + "\n"; 
upperHalfDiamond += " *   *";

lowerHalfDiamond =  " *   *" + "\n";
lowerHalfDiamond += "  * *" + "\n";
lowerHalfDiamond += "   *";

expectedDiamond = upperHalfDiamond + "\n" + "*     *" + "\n" + lowerHalfDiamond;
diamondArgs = {diamondType: "hollow", diamondHeight : 7};

assert.equal(generateDiamond(diamondArgs), expectedDiamond);

upperHalfDiamond  = "    *" + "\n";
upperHalfDiamond += "   * *" + "\n"; 
upperHalfDiamond += "  *   *" + "\n";
upperHalfDiamond += " *     *";

lowerHalfDiamond  = " *     *" + "\n";
lowerHalfDiamond += "  *   *" + "\n";
lowerHalfDiamond += "   * *" + "\n";
lowerHalfDiamond += "    *";

expectedDiamond = upperHalfDiamond + "\n" + "*       *" + "\n" + lowerHalfDiamond;
diamondArgs = {diamondType: "hollow", diamondHeight : 9};

assert.equal(generateDiamond(diamondArgs), expectedDiamond);

//----------------------------------------(Angled diamond)--------------------------------------//

upperHalfDiamond  = "  *" + "\n";
upperHalfDiamond += " / \\";

lowerHalfDiamond = " \\ /" + "\n"; 
lowerHalfDiamond += "  *";

expectedDiamond = upperHalfDiamond + "\n" + "*   *"+ "\n" + lowerHalfDiamond;
diamondArgs = {diamondType: "angled", diamondHeight : 5};

assert.equal(generateDiamond(diamondArgs), expectedDiamond);

upperHalfDiamond  = "   *" + "\n"; 
upperHalfDiamond += "  / \\" + "\n"; 
upperHalfDiamond += " /   \\";

lowerHalfDiamond =  " \\   /" + "\n";
lowerHalfDiamond += "  \\ /" + "\n";
lowerHalfDiamond  += "   *";

expectedDiamond = upperHalfDiamond + "\n" + "*     *" + "\n" + lowerHalfDiamond;
diamondArgs = {diamondType: "angled", diamondHeight : 7};

assert.equal(generateDiamond(diamondArgs), expectedDiamond);

upperHalfDiamond  = "    *" + "\n";
upperHalfDiamond += "   / \\" + "\n"; 
upperHalfDiamond += "  /   \\" + "\n";
upperHalfDiamond += " /     \\";

lowerHalfDiamond  = " \\     /" + "\n";
lowerHalfDiamond += "  \\   /" + "\n";
lowerHalfDiamond += "   \\ /" + "\n";
lowerHalfDiamond += "    *";

expectedDiamond = upperHalfDiamond + "\n" + "*       *" + "\n" + lowerHalfDiamond;
diamondArgs = {diamondType: "angled", diamondHeight : 9};

assert.equal(generateDiamond(diamondArgs), expectedDiamond);
