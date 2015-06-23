var readlineSync = require('readline-sync');

var dataItemString = readlineSync.question('DataItem ? :');
var dataItem = parseInt(dataItemString);

var total = 0;
var counter = dataItem;

do {
  total = total + counter;
  counter = counter - 1;
} while( !( counter === 0))

console.log(total);