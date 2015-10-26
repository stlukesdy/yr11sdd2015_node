var readlineSync = require('readline-sync');

var length = parseInt(readlineSync.question("Length: "));
var word = readlineSync.question("Word: ");

if ( word.length <= length) {
  console.log("OK");
} else {
  console.log("TOO LONG");
}

