var fs = require("fs");

var checkTime = function (line) {
  var hours = parseInt(line.substring(0, 2));
  var minutes = parseInt(line.substring(2, 4));

  if (hours < 24 && hours > 0 && minutes > 0 && minutes < 60) {
    console.log("Valid Time")
  } else {
    console.log("Invalid Time")
  }
};



var contentArray = fs.readFileSync('input.txt', 'utf8').split("\n");

for (var i in contentArray) {
  var line = contentArray[i].trim();
  checkTime(line);
}