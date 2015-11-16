////
//// Task 1 Daniel
////

//var readlineSync = require('readline-sync');

//var firstNumber = parseInt(readlineSync.question('Number: '));
//var secondNumber = parseInt(readlineSync.question('Another Number: '));

//if (firstNumber < secondNumber) {
//  console.log("OK");
//} else {
//  console.log("NOT OK");
//}

////
//// Task 1 Matthew
////

//var fs = require('fs');
//var contentArray = fs.readFileSync('input.txt', 'utf8').split("\n");
//var readlineSync = require('readline-sync');
//var num1 = parseInt(readlineSync.question("number 1:"))
//var num2 = parseInt(readlineSync.question("number 2:"))
//if (num1 < num2) {
//  console.log("OK")
//}
//else {
//  console.log("NOT OK")
//}

////
//// Task 1 Benjamin
////

//var readlineSync = require('readline-sync');
//var second = false;

//var firstNum = 0;
//var secondNum = 0;

//var checkHigher = function () {
//  if (firstNum < secondNum) {
//    console.log("OK")
//  } else {
//    console.log("NOT OK");
//  }
//}

//var program = function (line) {
//  if (second === false) {
//    firstNum = parseInt(line);
//    second = true;
//    ask();
//  } else {
//    secondNum = parseInt(line);
//    checkHigher();
//  }
//};

//var ask = function (question) {
//  var input = readlineSync.question('Input: ');
//  program(input);

//}

//ask();



////
//// Task 1 Charlie
////

//var readlineSync = require('readline-sync');


//var number1String = readlineSync.question('Number 1:');
//var number2String = readlineSync.question('Number 2:');
//var number1 = parseInt(number1String);
//var number2 = parseInt(number2String);

//if (number1 < number2) {
//  console.log('OK');
//} else {
//  console.log('NOT OK');
//}

////
//// Task 1 Robert
////

//var fs = require('fs');
//var readlineSync = require('readline-sync');
//var num1 = parseInt(readlineSync.question("First number: "))
//var num2 = parseInt(readlineSync.question("Second number: "))
//if (num1 < num2) {
//  console.log("OK")
//} else {
//  console.log("NOT OK")
//}


////
//// Task 2 Daniel
////

//var readlineSync = require('readline-sync');

//var firstNumber = parseInt(readlineSync.question('Number: '));
//var secondNumber = parseInt(readlineSync.question('Another Number: '));
//var i = secondNumber


//for (var i = firstNumber; i < secondNumber + 1; i++) {
//  console.log(i);
//}



////
//// Task 2 Matthew
////

//var fs = require('fs');
//var contentArray = fs.readFileSync('input.txt', 'utf8').split("\n");
//var readlineSync = require('readline-sync');
//var num1 = parseInt(readlineSync.question("number 1:"))
//var num2 = parseInt(readlineSync.question("number 2:"))
//for (var i = num1; i < num2 + 1; i++) {
//  console.log(i)
//}


////
//// Task 2 Benjamin
////

//var readlineSync = require('readline-sync');
//var second = false;

//var firstNum = 0;
//var secondNum = 0;

//var logNums = function () {
//  for (var i = firstNum; i < secondNum + 1; i++) {
//    console.log(i);
//  }
//}

//var program = function (input) {
//  if (second === false) {
//    firstNum = parseInt(input);
//    second = true;
//    ask();
//  } else if (second) {
//    secondNum = parseInt(input);
//    logNums();
//  }
//}

//var ask = function (question) {
//  var input = readlineSync.question('Input: ');
//  program(input);
//}

//ask();


////
//// Task 2 Charlie
////

//var readlineSync = require('readline-sync');


//var number1String = readlineSync.question('Number 1:');
//var number2String = readlineSync.question('Number 2:');
//var num1 = parseInt(number1String);
//var num2 = parseInt(number2String);
//var count = num1;
//console.log(num1);
//for (var i = num1; i < num2; i++) {
//  count = count + 1;
//  console.log(count);


//}
////
//// Task 2 Robert
////

//var fs = require('fs');
//var readlineSync = require('readline-sync');
//var num1 = parseInt(readlineSync.question("First number: "))
//var num2 = parseInt(readlineSync.question("Second number: "))
//while (num2 + 1 !== num1) {
//  console.log(num1);
//  num1 = num1 + 1;
//}


////
//// Task 3 Daniel
////
//var fs = require("fs");
//total = 0


//var findAverage = function (line) {
//  for (var i = 0; i < line.length ; i++) {
//    total = total + parseInt(line);

//  }
//  var average = total / parseInt(line.length);
//  console.log(average);
//};


//var contentArray = fs.readFileSync('input.txt', 'utf8').split("\n");

//for (var i in contentArray) {
//  var line = contentArray[i].trim();
//  findAverage(line);
//}



////
//// Task 3 Matthew
////
//var fs = require('fs');
//var contentArray = fs.readFileSync('input.txt', 'utf8').split("\n");
//var readlineSync = require('readline-sync');
//var total = 0
//var avg = 0
//for (var i = 0; i < contentArray.length - 1; i++) {
//  total = total + parseInt(contentArray[i])
//}
//avg = total / (contentArray.length - 1)
//console.log(avg)

////
//// Task 3 Benjamin
////
//var readlineSync = require('readline-sync');
//var numbers = [];
//var total = 0;

//var program = function (input) {
//  for (var i = 0; i < numbers.length; i++) {
//    total = total + i;
//  }
//  var average = total / numbers.length;
//  console.log(average);
//}

//var ask = function (question) {
//  var input = readlineSync.question('Input: ');

//  if (input !== '-1') {
//    numbers.push(input);
//    ask();
//  } else {
//    program();
//  }
//}

//ask();


////
//// Task 3 Charlie
////
////
//// Task 3 Robert
////

////
//// Task 4 Daniel
////

//var fs = require("fs");

//var countDollars = function (line) {
//  var i, counter = 0;
//  for (i = 0; i < line.length; i++) {
//    var ch = line.substring(i, i + 1);
//    if (ch === '$') {
//      counter++;
//    }
//  }
//  console.log(counter);
//};


//var contentArray = fs.readFileSync('input.txt', 'utf8').split("\n");

//for (var i in contentArray) {
//  var line = contentArray[i].trim();
//  countDollars(line);
//}




////
//// Task 4 Matthew
////
//var fs = require('fs');
//var contentArray = fs.readFileSync('input.txt', 'utf8').split("\n");
//var readlineSync = require('readline-sync');
//for (var i = 0; i < contentArray.length; i++) {
//  var line = contentArray[i]
//  var dollarTotal = 0
//  for (var j = 0; j < line.length; j++) {
//    if (line[j] == "$") {
//      dollarTotal++
//    }
//  }
//  console.log(dollarTotal)
//}

////
//// Task 4 Benjamin
////

//var fs = require('fs');
//var contentArray = fs.readFileSync('input.txt', 'utf8').split("\n");

//function proccess(line) {
//  var characters = line.split("");
//  var dollarydooCount = 0;

//  for (var i = 0; i < characters.length; i++) {
//    if (characters[i] === '$') {
//      dollarydooCount++;
//    }
//  }

//  console.log(dollarydooCount);
//}

//for (var i in contentArray) {
//  proccess(contentArray[i]);
//}



////
//// Task 4 Charlie
////
//var fs = require('fs');

//var counter = 0;

//var count = function (line) {
//  for (i = 0; i < line.length; i++) {
//    if (line[i] === '$') {
//      counter++;
//    }
//  }
//  console.log(counter);
//}

//var contentArray = fs.readFileSync('input.txt', 'utf8').split("\n");

//for (var i in contentArray) {
//  var line = contentArray[i].trim();
//  count(line);
//};

////
//// Task 4 Robert
////

//var fs = require('fs');

//var count$ = function (line) {
//  var i, counter = 0;
//  for (i = 0; i < line.length; i++) {
//    var ch = line.substring(i, i + 1);
//    if (ch === '$') {
//      counter++;
//    }
//  }
//  console.log(line + ' ' + counter);
//};



////
//// Task 5 Daniel
////

//var fs = require('fs');

//var count = function (line) {

//  var words = line.split(' ');
//  var wordCount = words.length;

//  var chCounter = 0;

//  for (var i = 0; i < line.length; i++) {
//    var ch = line[i];

//    if (ch !== ' ') {
//      chCounter = chCounter + 1;
//    }
//  }

//  console.log(wordCount + ' words, ' + chCounter + ' characters');
//};


//var contentArray = fs.readFileSync('input.txt', 'utf8').split("\n");

//for (var i in contentArray) {
//  var line = contentArray[i].trim();
//  count(line);
//}


////
//// Task 5 Matthew
////

//var fs = require('fs');
//var contentArray = fs.readFileSync('input.txt', 'utf8').split("\n");
//var readlineSync = require('readline-sync');
//for (var i = 0; i < contentArray.length; i++) {
//  var line = contentArray[i];
//  var splitArr = line.split(" ")
//  var totalChar = 0;
//  for (var j = 0; j < splitArr.length; j++) {
//    totalChar = totalChar + splitArr[j].length;
//  }
//  if (i !== contentArray.length - 1) {
//    totalChar--
//  }
//  var totalWords = splitArr.length;
//  console.log(totalWords + " words, " + totalChar + " characters")
//}

////
//// Task 5 Benjamin
////

//var fs = require('fs');
//var contentArray = fs.readFileSync('input.txt', 'utf8').split("\n");

//function proccess(line) {
//  var words = line.split(" ");
//  var wordCount = words.length;

//  var characters = line.split("")
//  var chCount = 0;

//  for (var i = 0; i < characters.length; i++) {
//    var ch = characters[i];
//    if (ch !== " ") {
//      chCount++
//    }
//  }
//  console.log(wordCount + ' words, ' + chCount + ' characters');
//}

//for (var i in contentArray) {
//  proccess(contentArray[i]);
//}



////
//// Task 5 Charlie
////
////
//// Task 5 Robert
////

//var fs = require('fs');

//var count = function (line) {

//  var words = line.split(' ');
//  var wordCount = words.length;

//  var chCounter = 0;

//  for (var i = 0; i < line.length; i++) {
//    var ch = line[i];

//    if (ch !== ' ') {
//      chCounter = chCounter + 1;
//    }
//  }

//  console.log(wordCount + ' words, ' + chCounter + ' characters');
//};


//var contentArray = fs.readFileSync('input.txt', 'utf8').split("\n");

//for (var i in contentArray) {
//  var line = contentArray[i].trim();
//  count(line);
//}


////
//// Task 6 Daniel
////
////
//// Task 6 Matthew
////
////
//// Task 6 Benjamin
////
////
//// Task 6 Charlie
////
////
//// Task 6 Robert
////




