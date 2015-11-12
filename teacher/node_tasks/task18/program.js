var readlineSync = require('readline-sync');
var answer = '';
answer = readlineSync.question('Input: ');

var endsWith = function (word, suffix) {
  return word.indexOf(suffix, word.length - suffix.length) !== -1;
};

//console.log('1-', endsWith('hello', ''));
//console.log('2-', endsWith('hello', '0'));
//console.log('3-', endsWith('hello', 'ello'));


while (answer != -1) {
  var firstPart1 = answer.substring(0, answer.length - 1);
  var firstPart2 = answer.substring(0, answer.length - 2);
  console.log('firstPart1= '+ firstPart1);
  console.log('firstPart2= '+ firstPart2);


  if (endsWith(answer, 'km')) {

  }
 

  answer = readlineSync.question('Input: ');
}
