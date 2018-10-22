const repeatCharacters = function(numOfRepititions, charactor) {
  let charRepitition = "";
  for(let charposition = 0; charposition <= numOfRepititions; charposition++) {
    charRepitition += charactor;
  }
  return charRepitition;
}

const generateTriangle = function(triangleHeight, triangleType) {
  let triangle = "";
  let delimiter = "";

  for(let rowNum = 0; rowNum < triangleHeight; rowNum++) {

    if(triangleType == "left") {
      triangle += delimiter + repeatCharacters(rowNum,"*");
      delimiter = "\n"
    }

    if(triangleType == "right") {
      let numOfChars = triangleHeight - (rowNum +2);
      triangle += delimiter + repeatCharacters(numOfChars," ");
      triangle += repeatCharacters(rowNum,"*");
      delimiter = "\n";
    }
  }

  return triangle;
}

exports.generateTriangle = generateTriangle;
