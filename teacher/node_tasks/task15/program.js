var fs = require("fs");

var contentArray = fs.readFileSync('input.txt', 'utf8').split("\n");

var wordArray = [];
var n = 1;

for (var i in contentArray) {
  var line = contentArray[i].trim();
  wordArray.push(line + ' ' + n++);
}

for (var i = 0; i < wordArray.length; i++) {
  console.log(wordArray[i]);
}

