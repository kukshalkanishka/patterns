const assert = require("assert");
const lib = require("../src/patternsLib.js");
const {generateRectangle} = lib; 
const {generateTriangle} = lib; 
const {generateDiamond} = lib; 
const {mergePatterns} = lib;

const repeat = function(times, characters, delimiter) {
  return new Array(times).fill(characters).join(delimiter);
}

//--------------------------------------(filled Rectangle)--------------------------------//

const oneStar = repeat(1,"*", "");
const filledRect_1_3 = [oneStar, oneStar, oneStar];
let rectangleArgs = {type: "filled", width: 1, height : 3}; 

assert.deepEqual(generateRectangle(rectangleArgs),filledRect_1_3);

const threeStars = repeat(3, "*", "");
const filledRect_3_3 = [threeStars, threeStars, threeStars]; 
rectangleArgs = {type: "filled", width: 3, height : 3}; 

assert.deepEqual(generateRectangle(rectangleArgs),filledRect_3_3);

const filledRect_3_8 = [threeStars, threeStars, threeStars, threeStars, threeStars, threeStars, threeStars, threeStars];
rectangleArgs = {type: "filled", width: 3, height : 8}; 

assert.deepEqual(generateRectangle(rectangleArgs),filledRect_3_8);

//--------------------------------------(Empty Rectangle)-------------------------------//

const emptyRect_3_2 = ["***","***"];
rectangleArgs = {type: "empty", width: 3, height : 2}; 

assert.deepEqual(generateRectangle(rectangleArgs), emptyRect_3_2);

const emptyRect_3_5 = [threeStars, "* *", "* *", "* *", threeStars];
rectangleArgs = {type: "empty", width: 3, height : 5}; 

assert.deepEqual(generateRectangle(rectangleArgs), emptyRect_3_5);

let emptyRect_5_6 = [];
const fiveStars = repeat(5, "*", "");
emptyRect_5_6.push(fiveStars);
emptyRect_5_6.push("*   *", "*   *","*   *","*   *"); 
emptyRect_5_6.push(fiveStars);

rectangleArgs = {type: "empty", width: 5, height : 6}; 

assert.deepEqual(generateRectangle(rectangleArgs), emptyRect_5_6);

let emptyRect_8_5 = [];
const eightStars = repeat(8, "*", "");
emptyRect_8_5.push(eightStars);
emptyRect_8_5.push("*      *", "*      *","*      *"); 
emptyRect_8_5.push(eightStars);
rectangleArgs = {type: "empty", width: 8, height : 5}; 

assert.deepEqual(generateRectangle(rectangleArgs), emptyRect_8_5);

//--------------------------------------(Alternating rectangle)--------------------------------//

let alternateRect_3_5 = [];
const threeHyphens = repeat(3, "-", ""); 
alternateRect_3_5.push(threeStars, threeHyphens, threeStars, threeHyphens, threeStars);

rectangleArgs = {type: "alternating", width: 3, height : 5}; 

assert.deepEqual(generateRectangle(rectangleArgs), alternateRect_3_5);

let alternateRect_5_6 = [];
const fiveHyphens = repeat(5, "-", "");
alternateRect_5_6.push(fiveStars, fiveHyphens, fiveStars); 
alternateRect_5_6.push(fiveHyphens, fiveStars, fiveHyphens);

rectangleArgs = {type: "alternating", width: 5, height : 6}; 

assert.deepEqual(generateRectangle(rectangleArgs), alternateRect_5_6);

let alternateRect_8_5 = [];
const eightHyphens = repeat(8, "-", ""); 
alternateRect_8_5.push(eightStars, eightHyphens, eightStars, eightHyphens, eightStars);

rectangleArgs = {type: "alternating", width: 8, height : 5}; 

assert.deepEqual(generateRectangle(rectangleArgs), alternateRect_8_5);

//-----------------------------------------(Left triangle)-------------------------------------------------//

let expectedTriangle = [];
expectedTriangle.push("*  ", "** ", "***");
triangleArgs = {type: "left", height : 3}; 

assert.deepEqual(generateTriangle(triangleArgs), expectedTriangle);

expectedTriangle = [];
const fourStars = repeat(4, "*", "");
expectedTriangle.push("*    ", "**   ", "***  ", "**** ", "*****");
triangleArgs = {type: "left", height : 5}; 

assert.deepEqual(generateTriangle(triangleArgs), expectedTriangle);

//-----------------------------------------(Right triangle)-------------------------------------------------//

expectedTriangle = [];
expectedTriangle.push("  *", " **", "***"); 
triangleArgs = {type: "right", height : 3}; 

assert.deepEqual(generateTriangle(triangleArgs), expectedTriangle);

expectedTriangle = [];
expectedTriangle.push( "    *", "   **", "  ***", " ****", "*****");
triangleArgs = {type: "right", height : 5}; 

assert.deepEqual(generateTriangle(triangleArgs), expectedTriangle);

//-----------------------------------------(Filled Diamond)-------------------------------------------------//

let expectedDiamond = [];
expectedDiamond.push("  *  ", " *** ", fiveStars, " *** ", "  *  ");
diamondArgs = {type: "filled", height : 5}; 

assert.deepEqual(generateDiamond(diamondArgs), expectedDiamond);

expectedDiamond = [];
const sevenStars = repeat(7, "*", "");
expectedDiamond.push ("   *   ", "  ***  ", " ***** ");
expectedDiamond.push(sevenStars);
expectedDiamond.push(" ***** ", "  ***  ", "   *   ");

diamondArgs = {type: "filled", height : 7}; 

assert.deepEqual(generateDiamond(diamondArgs), expectedDiamond);

expectedDiamond = [];
const nineStars = repeat(9, "*", "");
expectedDiamond.push("    *    ", "   ***   ", "  *****  ", " ******* ");
expectedDiamond.push(nineStars);
expectedDiamond.push(" ******* ", "  *****  ", "   ***   ", "    *    ");

diamondArgs = {type: "filled", height : 9}; 

assert.deepEqual(generateDiamond(diamondArgs), expectedDiamond);

//-----------------------------------------(Hollow Diamond)-------------------------------------------------//
//
expectedDiamond = ["  *  ", " * * ", "*   *", " * * ", "  *  "];

diamondArgs = {type: "hollow", height : 5}; 

assert.deepEqual(generateDiamond(diamondArgs),expectedDiamond);

expectedDiamond = ["   *   ", "  * *  ", " *   * ","*     *", " *   * ", "  * *  ", "   *   "];
diamondArgs = {type: "hollow", height : 7};

assert.deepEqual(generateDiamond(diamondArgs), expectedDiamond);

expectedDiamond = ["    *    ", "   * *   ", "  *   *  "," *     * ","*       *"];
expectedDiamond.push(" *     * ", "  *   *  ", "   * *   ", "    *    ");
diamondArgs = {type: "hollow", height : 9};

assert.deepEqual(generateDiamond(diamondArgs), expectedDiamond);

//----------------------------------------(Angled diamond)--------------------------------------//

expectedDiamond = [ "  *  " ," / \\ ", "*   *", " \\ / ", "  *  "];

diamondArgs = {type: "angled", height : 5};

assert.deepEqual(generateDiamond(diamondArgs), expectedDiamond);

expectedDiamond = ["   *   ", "  / \\  ", " /   \\ ", "*     *", " \\   / ", "  \\ /  ", "   *   "];
diamondArgs = {type: "angled", height : 7};

assert.deepEqual(generateDiamond(diamondArgs), expectedDiamond);

expectedDiamond =  ["    *    ", "   / \\   ", "  /   \\  ", " /     \\ "];
expectedDiamond.push("*       *");
expectedDiamond.push(" \\     / ", "  \\   /  ", "   \\ /   ", "    *    ");   

diamondArgs = {type: "angled", height : 9};

assert.deepEqual(generateDiamond(diamondArgs), expectedDiamond);

//-----------------------------------(merge patterns)------------------------------//

let args = {pattern1:"rectangle", 
           pattern1type: "filled", 
           pattern1width : 3, 
           pattern1height : 3, 
           pattern2 :"triangle", 
           pattern2type:"left",
           pattern2height: 3};

let expectedPattern = [["***","*  "],["***","** "],["***","***"]];
assert.deepEqual(mergePatterns(args), expectedPattern);

args = {pattern1:"rectangle", 
           pattern1type: "empty", 
           pattern1width : 3, 
           pattern1height : 3, 
           pattern2 :"triangle", 
           pattern2type:"left",
           pattern2height: 3};

expectedPattern = [["***","*  "],["* *","** "],["***","***"]];
assert.deepEqual(mergePatterns(args), expectedPattern);

args = {pattern1:"rectangle", 
           pattern1type: "empty", 
           pattern1width : 3, 
           pattern1height : 3, 
           pattern2 :"triangle", 
           pattern2type:"right",
           pattern2height: 3};

expectedPattern = [["***","  *"],["* *"," **"],["***","***"]];
assert.deepEqual(mergePatterns(args), expectedPattern);

args = {pattern1:"rectangle", 
           pattern1type: "alternating", 
           pattern1width : 3, 
           pattern1height : 3, 
           pattern2 :"triangle", 
           pattern2type:"left",
           pattern2height: 3};

expectedPattern = [["***","*  "],["---","** "],["***","***"]];
assert.deepEqual(mergePatterns(args), expectedPattern);

args = {pattern1:"rectangle", 
           pattern1type: "filled", 
           pattern1width : 3, 
           pattern1height : 3, 
           pattern2 :"triangle", 
           pattern2type:"right",
           pattern2height: 3};

expectedPattern = [["***","  *"],["***"," **"],["***","***"]];
assert.deepEqual(mergePatterns(args), expectedPattern);











