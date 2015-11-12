var readlineSync = require('readline-sync');
var input = '';

var endsWith = function (word, suffix) {
  return word.indexOf(suffix, word.length - suffix.length) !== -1;
};

var convert2m = function (input) {
  var firstPart1 = input.substring(0, input.length - 1);
  var firstPart2 = input.substring(0, input.length - 2);

  var firstPart = firstPart2;
  var multiplier = 1;

  if (endsWith(input, 'km')) {
    multiplier = 1000;
  } else if (endsWith(input, 'cm')) {
    multiplier = 0.01;
  } else if (endsWith(input, 'mm')) {
    multiplier = 0.001;
  } else {
    firstPart = firstPart1;
  }

  var result = parseInt(firstPart) * multiplier;
  return result + 'm';
}


while (true) {
  var input = readlineSync.question('Input (-1 to stop): ');
  if (input === '-1') {
    break;
  }

  console.log(convert2m(input));
};
