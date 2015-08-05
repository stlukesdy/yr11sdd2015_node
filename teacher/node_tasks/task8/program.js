var fs = require('fs');

var addDigits = function (line) {
  var result = 0;
  for (var i = 0; i < line.length; i++) {
    var char = line.substring(i, i + 1);
    var digit = parseInt(char);
    result = result + digit;
  }
  console.log(result);
};


var contentArray = fs.readFileSync('input.txt', 'utf8').split("\n");

for(var i in contentArray) {
  var line = contentArray[i].trim();
  addDigits(line);
}



