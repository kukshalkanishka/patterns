const assert = require("assert");
const lib = require("../src/patternsLib.js");
const generateRectangle = lib.generateRectangle;

const repeat = function(times, characters, delimiter) {
   return (new Array(times).fill(characters).join(delimiter));
}

//--------------------------------------(filled Rectangle)--------------------------------//

const oneStar = repeat(1,"*", "");
const filledRect_1_3 = repeat(3, oneStar, "\n");
assert.equal(generateRectangle("filled",1,3),filledRect_1_3);

const threeStars = repeat(3, "*", "");
const filledRect_3_3 = repeat(3, threeStars, "\n"); 
assert.equal(generateRectangle("filled",3,3),filledRect_3_3);

const filledRect_3_8 = repeat(8, threeStars, "\n"); 
assert.equal(generateRectangle("filled",3,8),filledRect_3_8);

//--------------------------------------(Empty Rectangle)-------------------------------//

const emptyRect_3_2 = repeat(2, threeStars, "\n");
assert.equal(generateRectangle("empty",3,2),emptyRect_3_2);

let middle3Rows  = repeat(3, "* *", "\n");
const emptyRect_3_5 = threeStars + "\n" + middle3Rows + "\n" + threeStars;
assert.equal(generateRectangle("empty",3,5),emptyRect_3_5);

const fiveStars = repeat(5, "*", "");
let middle4Rows = repeat(4, "*   *", "\n"); 
const emptyRect_5_6 = fiveStars + "\n" + middle4Rows + "\n" + fiveStars;
assert.equal(generateRectangle("empty",5,6),emptyRect_5_6);
 
const eightStars = repeat(8, "*", "");
middle3Rows = repeat(3, "*      *", "\n"); 
const emptyRect_8_5 = eightStars + "\n" + middle3Rows + "\n" + eightStars;
assert.equal(generateRectangle("empty",8,5),emptyRect_8_5);

//--------------------------------------(Alternating rectangle)--------------------------------//

const threeHyphens = repeat(3, "-", ""); 
let alternateRect_3_5 = threeStars + "\n" + threeHyphens + "\n" + threeStars + "\n" + threeHyphens + "\n" + threeStars;
assert.equal(generateRectangle("alternating",3,5), alternateRect_3_5);

const fiveHyphens = repeat(5, "-", "");
const alternateRect_5_6  = fiveStars + "\n" + fiveHyphens + "\n" + fiveStars + "\n" + fiveHyphens + "\n" + fiveStars + "\n" +fiveHyphens;
assert.equal(generateRectangle("alternating",5,6), alternateRect_5_6);

const eightHyphens = repeat(8, "-", ""); 
const alternateRect_8_5  = eightStars + "\n" + eightHyphens + "\n" + eightStars + "\n" + eightHyphens + "\n" + eightStars;
assert.equal(generateRectangle("alternating",8,5), alternateRect_8_5);


