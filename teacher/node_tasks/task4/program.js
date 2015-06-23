
var myArr = [];

var createRandomArray = function(highIndex) {
  var count = 0;
  while (count < highIndex) {
    count = count + 1;
    myArr[count] = count;
  }

};

createRandomArray(6);

console.log(JSON.stringify(myArr));