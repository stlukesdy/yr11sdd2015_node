var fs = require('fs');

var countOnes = function (line) {
  var numbers = line.split('+');
  var number1 = parseInt(numbers[0]);
  var number2 = parseInt(numbers[1]);
  var result = number1 + number2;

  console.log(line + '=' + result);
};


var contentArray = fs.readFileSync('input.txt', 'utf8').split("\n");

for(var i in contentArray) {
  var line = contentArray[i].trim();
  countOnes(line);
}



