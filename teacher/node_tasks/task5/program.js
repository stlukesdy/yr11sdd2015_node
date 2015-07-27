var fs = require('fs');

var countOnes = function (line) {
  var i , counter = 0;
  for (i = 0; i < line.length; i++) {
    var ch = line.substring(i, i + 1);
    if (ch === '1') {
      counter++;
    }
  }
  console.log(line + ' ' + counter);
};


var contentArray = fs.readFileSync('input.txt', 'utf8').split("\n");

for(var i in contentArray) {
  var line = contentArray[i].trim();
  countOnes(line);
}



