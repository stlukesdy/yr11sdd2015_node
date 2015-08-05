var readlineSync = require('readline-sync');

var line = readlineSync.question('');

var highestDigit = 0;

for (var i = 0; i < line.length; i++) {
  var char = line.substring(i, i + 1);
  var digit = parseInt(char);
  if (digit > highestDigit) {
    highestDigit = digit;
  }
}

console.log(highestDigit);


