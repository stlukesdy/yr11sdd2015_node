var readlineSync = require('readline-sync');

var first = readlineSync.question('');
var second = readlineSync.question('');

if (first > second) {
  console.log(first);
} else {
  console.log(second);
}



