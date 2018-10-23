const assert = require("assert");
const lib = require("../src/utilLib.js");
const {generateHyphenLine} = lib; 
const {generateStarLine} = lib;
const {generateEmptyLine} = lib;
const {repeat} = lib;
const {generateFilledRow} = lib;
const {generateHollowRow} = lib;

//=============================(repeat hyphens)==============================//

assert.equal(generateHyphenLine(1),"-");
assert.equal(generateHyphenLine(3),"---");
assert.equal(generateHyphenLine(10),"----------");

//=============================(repeat stars)==============================//

assert.equal(generateStarLine(1),"*");
assert.equal(generateStarLine(3),"***");
assert.equal(generateStarLine(10),"**********");

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

