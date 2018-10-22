const repeat = function(times, character) {
  let repeated = "";
  for(charPosition = 0; charPosition <= times; charPosition++) {
    repeated += character;
  }
  return repeated;
}

const generateFilledRow = function(rowNum, numOfChars) {
  let row = "";
  let spaceValue = (numOfChars - (rowNum +2));
  let spaceRepition = repeat(spaceValue/2, " ");
  let starRepitition =  repeat(rowNum, "*");
  row += spaceRepition + starRepitition;

  return row;
}

const generateHollowRow = function(rowNum, numOfChars) {
  let row = "";
  let spaceValue = (numOfChars - (rowNum +2));
  let spaceRepition = repeat(spaceValue/2, " ");
  let starRepitition = repeat(0, "*");
  let rowMiddleGap = repeat(rowNum -2 , " ");
  row = spaceRepition + starRepitition + rowMiddleGap + starRepitition;
  if(rowNum == 0) {
    row = spaceRepition +starRepitition;
  }

  return row;
}

const generateLowerAngleRow = function(rowNum, numOfChars) {
  let row = "";
  let spaceValue = (numOfChars - (rowNum +2));
  let spaceRepition = repeat(spaceValue/2, " ");
  let bckSlashRepitition = repeat(0, "/");
  let frntSlashRepitition = repeat(0, "\\");
  let rowMiddleGap = repeat(rowNum -2 , " ");
  let starRepitition = repeat(0,"*");
  row = spaceRepition + frntSlashRepitition + rowMiddleGap + bckSlashRepitition;
  if(rowNum == 0) {
    row = spaceRepition +starRepitition;
  } 

  return row;
}


const generateUpperAngledRow = function(rowNum, numOfChars) {
  let row = "";
  let spaceValue = (numOfChars - (rowNum +2));
  let spaceRepition = repeat(spaceValue/2, " ");
  let bckSlashRepitition = repeat(0, "/");
  let frntSlashRepitition = repeat(0, "\\");
  let rowMiddleGap = repeat(rowNum -2 , " ");
  let starRepitition = repeat(0,"*");
  row = spaceRepition + bckSlashRepitition + rowMiddleGap + frntSlashRepitition;
  if(rowNum == 0) {
    row = spaceRepition +starRepitition;
  }

  return row;
}

const generateAngledDiamond = function(height) {
  let delimiter = "";
  let upperTriangle = "";
  let lowerTriangle = "";
  let middleRow = "";
  for(let rowNum = 0; rowNum < height -2; rowNum +=2 ) {
    let upperRow = generateUpperAngledRow(rowNum , height);
    let lowerRow = generateLowerAngleRow(rowNum , height);
    upperTriangle += delimiter + upperRow; 
    lowerTriangle = lowerRow + delimiter + lowerTriangle;
    delimiter = "\n";
    middleRow = generateHollowRow(height -1, height) ;
  }
  let diamond = upperTriangle + "\n" + middleRow + "\n" + lowerTriangle;
  return diamond; 
}

const generateDiamond = function(height, type) {
  let delimiter = "";
  let upperTriangle = "";
  let lowerTriangle = "";
  let middleRow = "";
  let row = generateFilledRow(0, height);
  let diamond = "";

  for(let rowNum = 0; rowNum < height -2; rowNum +=2 ) {
    if(type == "filled") { 
      row = generateFilledRow(rowNum , height);
      middleRow = repeat(height -1,"*");
    }

    if(type == "hollow") {
      row = generateHollowRow(rowNum, height);
      middleRow = generateHollowRow(height -1 , height); 
    } 

    upperTriangle += delimiter + row;
    lowerTriangle  = row + delimiter + lowerTriangle;
    delimiter = "\n";
  }
  if(type == "angled") {
    diamond = generateAngledDiamond(height);
  }

  if(type != "angled"){
    diamond = upperTriangle +"\n" + middleRow +"\n" + lowerTriangle; 
  }

  return diamond;
}

exports.generateDiamond = generateDiamond;
