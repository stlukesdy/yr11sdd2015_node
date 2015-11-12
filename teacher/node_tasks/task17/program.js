var fs = require("fs");

var contentArray = fs.readFileSync('input.txt', 'utf8').split("\n");

var int2dotString = function (number) {
  var result = '';

  for (var i = 0; i < number; i++) {
    result = result + '.';
  }

  return result;
}

var wordArray = [];
var n = 1;

for (var i in contentArray) {
  var line = contentArray[i].trim();
  var newLine = line + ' ' + n;
  var dots = 15 - newLine.length;
  var dotString = int2dotString(dots);
  newLine = line + dotString + n++;
  wordArray.push(newLine);
}

wordArray.sort();




for (var i = 0; i < wordArray.length; i++) {
  console.log(wordArray[i]);
}

















