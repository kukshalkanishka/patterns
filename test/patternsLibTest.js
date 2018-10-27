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
const filledRect_1_3 = [oneStar, oneStar, oneStar];
let rectangleArgs = {rectangleType: "filled", rectangleWidth: 1, rectangleHeight : 3}; 

assert.deepEqual(generateRectangle(rectangleArgs),filledRect_1_3);

const threeStars = repeat(3, "*", "");
const filledRect_3_3 = [threeStars, threeStars, threeStars]; 
rectangleArgs = {rectangleType: "filled", rectangleWidth: 3, rectangleHeight : 3}; 

assert.deepEqual(generateRectangle(rectangleArgs),filledRect_3_3);

const filledRect_3_8 = [threeStars, threeStars, threeStars, threeStars, threeStars, threeStars, threeStars, threeStars];
rectangleArgs = {rectangleType: "filled", rectangleWidth: 3, rectangleHeight : 8}; 

assert.deepEqual(generateRectangle(rectangleArgs),filledRect_3_8);

//--------------------------------------(Empty Rectangle)-------------------------------//

const emptyRect_3_2 = ["***","***"];
rectangleArgs = {rectangleType: "empty", rectangleWidth: 3, rectangleHeight : 2}; 

assert.deepEqual(generateRectangle(rectangleArgs), emptyRect_3_2);

const emptyRect_3_5 = [threeStars, "* *", "* *", "* *", threeStars];
rectangleArgs = {rectangleType: "empty", rectangleWidth: 3, rectangleHeight : 5}; 

assert.deepEqual(generateRectangle(rectangleArgs), emptyRect_3_5);

let emptyRect_5_6 = [];
const fiveStars = repeat(5, "*", "");
emptyRect_5_6.push(fiveStars);
emptyRect_5_6.push("*   *", "*   *","*   *","*   *"); 
emptyRect_5_6.push(fiveStars);

rectangleArgs = {rectangleType: "empty", rectangleWidth: 5, rectangleHeight : 6}; 

assert.deepEqual(generateRectangle(rectangleArgs), emptyRect_5_6);

let emptyRect_8_5 = [];
const eightStars = repeat(8, "*", "");
emptyRect_8_5.push(eightStars);
emptyRect_8_5.push("*      *", "*      *","*      *"); 
emptyRect_8_5.push(eightStars);
rectangleArgs = {rectangleType: "empty", rectangleWidth: 8, rectangleHeight : 5}; 

assert.deepEqual(generateRectangle(rectangleArgs), emptyRect_8_5);

//--------------------------------------(Alternating rectangle)--------------------------------//

let alternateRect_3_5 = [];
const threeHyphens = repeat(3, "-", ""); 
alternateRect_3_5.push(threeStars, threeHyphens, threeStars, threeHyphens, threeStars);

rectangleArgs = {rectangleType: "alternating", rectangleWidth: 3, rectangleHeight : 5}; 

assert.deepEqual(generateRectangle(rectangleArgs), alternateRect_3_5);

let alternateRect_5_6 = [];
const fiveHyphens = repeat(5, "-", "");
alternateRect_5_6.push(fiveStars, fiveHyphens, fiveStars); 
alternateRect_5_6.push(fiveHyphens, fiveStars, fiveHyphens);

rectangleArgs = {rectangleType: "alternating", rectangleWidth: 5, rectangleHeight : 6}; 

assert.deepEqual(generateRectangle(rectangleArgs), alternateRect_5_6);

let alternateRect_8_5 = [];
const eightHyphens = repeat(8, "-", ""); 
alternateRect_8_5.push(eightStars, eightHyphens, eightStars, eightHyphens, eightStars);

rectangleArgs = {rectangleType: "alternating", rectangleWidth: 8, rectangleHeight : 5}; 

assert.deepEqual(generateRectangle(rectangleArgs), alternateRect_8_5);

//-----------------------------------------(Left triangle)-------------------------------------------------//

let expectedTriangle = [];
const twoStars = repeat(2, "*", "");
expectedTriangle.push(oneStar, twoStars, threeStars);
triangleArgs = {triangleType: "left", triangleHeight : 3}; 

assert.deepEqual(generateTriangle(triangleArgs), expectedTriangle);

expectedTriangle = [];
const fourStars = repeat(4, "*", "");
expectedTriangle.push(oneStar, twoStars, threeStars, fourStars, fiveStars);
triangleArgs = {triangleType: "left", triangleHeight : 5}; 

assert.deepEqual(generateTriangle(triangleArgs), expectedTriangle);

//-----------------------------------------(Right triangle)-------------------------------------------------//

expectedTriangle = [];
expectedTriangle.push("  *", " **", "***"); 
triangleArgs = {triangleType: "right", triangleHeight : 3}; 

assert.deepEqual(generateTriangle(triangleArgs), expectedTriangle);

expectedTriangle = [];
expectedTriangle.push( "    *", "   **", "  ***", " ****", "*****");
triangleArgs = {triangleType: "right", triangleHeight : 5}; 

assert.deepEqual(generateTriangle(triangleArgs), expectedTriangle);

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
