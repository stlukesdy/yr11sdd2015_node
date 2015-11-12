
//input integer: number
//output string containing number of dots
var int2dotString = function (number) {
  var result = '';

  for (var i = 0; i< number; i++){
    result = result + '.';
  }

  return result;
}

var test = int2dotString(5);
console.log('input = 1 output = ', test);

