var readlineSync = require('readline-sync');

var number1String = readlineSync.question('First number :');
var number2String = readlineSync.question('Second number :');

var number1 = parseInt(number1String);
var number2 = parseInt(number2String);

var result = number1 + number2;

console.log('Result = ' + result);
