var readlineSync = require('readline-sync');
var answer = '';
answer = readlineSync.question('Input: ');

var endsWith = function (word, suffix) {
  return word.indexOf(suffix, word.length - suffix.length) !== -1;
};

console.log('1-', endsWith('hello', ''));
console.log('2-', endsWith('hello', '0'));
console.log('3-', endsWith('hello', 'ello'));


while (answer != -1) {
  console.log('h');

  if ()
 

  answer = readlineSync.question('Input: ');
}
