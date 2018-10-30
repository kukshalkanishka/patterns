const assert = require("assert");
const lib = require("../src/utilLib.js");
const {generateEmptyLine} = lib;
const {repeat} = lib;
const {generateFilledRow} = lib;
const {generateHollowRow} = lib;
const {readTriangleArgs} = lib;
const {readDiamondArgs} = lib;
const {readRectangleArgs} = lib;
const {readArgs} = lib;

//=============================(generate empty line)==============================//

assert.equal(generateEmptyLine(1),"*");
assert.equal(generateEmptyLine(3),"* *");
assert.equal(generateEmptyLine(10),"*        *");

//=============================(repeat)==============================//

assert.equal(repeat(1, "*"),"*");
assert.equal(repeat(3, "*"),"***");
assert.equal(repeat(10, "*"),"**********");
assert.equal(repeat(1, "-"),"-");
assert.equal(repeat(3, "-"),"---");
assert.equal(repeat(10, "-"),"----------");

//=============================(generateFilledRow)====================//

assert.equal(generateFilledRow(1, 5),"*");
assert.equal(generateFilledRow(3, 5),"***");
assert.equal(generateFilledRow(11, 13),"***********");

//=============================(generateHollowRow)====================//

assert.equal(generateHollowRow(1,"*","*"),"*");
assert.equal(generateHollowRow(3,"*", "*"),"* *");
assert.equal(generateHollowRow(11,"/","\\"),"/         \\");

//=============================(read triangle arguments)====================//

assert.deepEqual(readTriangleArgs([,,"left", 4]),{type : "left", height : 4});
assert.deepEqual(readTriangleArgs([,,"right", 4]),{type : "right", height : 4});

//=============================(read diamond arguments)====================//

assert.deepEqual(readDiamondArgs([,,"filled", 4]),{type : "filled", height : 4});
assert.deepEqual(readDiamondArgs([,,"holllow", 4]),{type : "holllow", height : 4});
assert.deepEqual(readDiamondArgs([,,"angled", 4]),{type : "angled", height : 4});

//=============================(read rectangle arguments)====================//

assert.deepEqual(readRectangleArgs([,,"filled", 4, 3]),{type : "filled", width: 4 , height : 3});
assert.deepEqual(readRectangleArgs([,,"holllow", 4, 3]),{type : "holllow" , width: 4, height : 3});
assert.deepEqual(readRectangleArgs([,,"alternating", 4, 3]),{type : "alternating" , width:4, height : 3});

//=============================(read merge arguments)====================//

let inputArgs = [,,"filled_rectangle", 20, 7, "left_triangle", 7];
let expectedOutput = {pattern1:"rectangle", pattern1type: "filled", pattern1width : 20, pattern1height : 7, pattern2 :"triangle", pattern2type:"left",pattern2height: 7}; 

assert.deepEqual(readArgs(inputArgs),expectedOutput);

inputArgs = [,,"filled_rectangle", 20, 7, "right_triangle", 7];
expectedOutput = {pattern1:"rectangle", pattern1type: "filled", pattern1width : 20, pattern1height : 7, pattern2 :"triangle", pattern2type:"right",pattern2height: 7};

assert.deepEqual(readArgs(inputArgs),expectedOutput);

inputArgs = [,,"hollow_rectangle", 20, 7, "left_triangle", 7];
expectedOutput = {pattern1:"rectangle", pattern1type: "hollow", pattern1width : 20, pattern1height : 7, pattern2 :"triangle", pattern2type:"left",pattern2height: 7}; 

assert.deepEqual(readArgs(inputArgs),expectedOutput);
