const assert = require("assert");
const lib = require("../src/utilLib.js");
const {generateEmptyLine} = lib;
const {repeat} = lib;
const {generateFilledRow} = lib;
const {generateHollowRow} = lib;
const {readTriangleArgs} = lib;
const {readDiamondArgs} = lib;
const {readRectangleArgs} = lib;

//=============================(generate empty line)==============================//

assert.equal(generateEmptyLine(1),"*");
assert.equal(generateEmptyLine(3),"* *");
assert.equal(generateEmptyLine(10),"*        *");

//=============================(repeat)==============================//

assert.equal(repeat(1, "*"),"**");
assert.equal(repeat(3, "*"),"****");
assert.equal(repeat(10, "*"),"***********");
assert.equal(repeat(1, "-"),"--");
assert.equal(repeat(3, "-"),"----");
assert.equal(repeat(10, "-"),"-----------");

//=============================(generateFilledRow)====================//

assert.equal(generateFilledRow(1, 5),"  **");
assert.equal(generateFilledRow(3, 5)," ****");
assert.equal(generateFilledRow(11, 13)," ************");

//=============================(generateHollowRow)====================//

assert.equal(generateHollowRow(1, 5),"  **");
assert.equal(generateHollowRow(3, 5)," *  *");
assert.equal(generateHollowRow(11, 13)," *          *");

//=============================(read triangle arguments)====================//

assert.deepEqual(readTriangleArgs([,,"left", 4]),{triangleType : "left", triangleHeight : 4});
assert.deepEqual(readTriangleArgs([,,"right", 4]),{triangleType : "right", triangleHeight : 4});

//=============================(read diamond arguments)====================//

assert.deepEqual(readDiamondArgs([,,"filled", 4]),{diamondType : "filled", diamondHeight : 4});
assert.deepEqual(readDiamondArgs([,,"holllow", 4]),{diamondType : "holllow", diamondHeight : 4});
assert.deepEqual(readDiamondArgs([,,"angled", 4]),{diamondType : "angled", diamondHeight : 4});

//=============================(read rectangle arguments)====================//

assert.deepEqual(readRectangleArgs([,,"filled", 4, 3]),{rectangleType : "filled", rectangleWidth: 4 , rectangleHeight : 3});
assert.deepEqual(readRectangleArgs([,,"holllow", 4, 3]),{rectangleType : "holllow" , rectangleWidth: 4, rectangleHeight : 3});
assert.deepEqual(readRectangleArgs([,,"alternating", 4, 3]),{rectangleType : "alternating" , rectangleWidth:4, rectangleHeight : 3});
