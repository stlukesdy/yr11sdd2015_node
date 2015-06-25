var index = 2;

var myArray = [];

myArray[0] = 1;
myArray[1] = 1;

do {
  myArray[index] = myArray[index - 1] + myArray[index -2];
  index = index + 1;
} while ( !(index === 10) )


console.log('Result = ' + JSON.stringify(myArray));
