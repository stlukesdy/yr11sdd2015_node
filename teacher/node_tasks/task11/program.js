var fs = require("fs");

var readText = function (line) {
    var i, counter = 0;
    var checkA = "no";
    for (i = 0; i < line.length; i++) {
        var ch = line.substring(i, i + 1);
        if (ch === 'e') {
            counter++;
        }
        if (ch == "a") {
            checkA = "yes";
        }
    }
    console.log("a - " + checkA + ",  e - " + counter);

};


var contentArray = fs.readFileSync('input.txt', 'utf8').split("\n");

for (var i in contentArray) {
    var line = contentArray[i].trim();
    readText(line);
}