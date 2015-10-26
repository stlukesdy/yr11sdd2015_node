var fs = require("fs");

var camelCase = function (line) {
    //console.log(line);
    var wordArray = line.split(' ');
    //console.log(wordArray);

    var camelCaseWord = wordArray[0].toLowerCase();

    for (var i = 1; i < wordArray.length; i++) {
        var word = wordArray[i];
        var modWord = firstLetterUpperCase(word);
        camelCaseWord = camelCaseWord + modWord;
    }

    console.log(camelCaseWord);
};

var firstLetterUpperCase = function (word) {
    word = word.toLowerCase();
    var firstChar = word[0].toUpperCase();
    var secondPartOfResult = word.substring(1, word.length);
    return firstChar + secondPartOfResult;
};


var contentArray = fs.readFileSync('input.txt', 'utf8').split("\n");

for (var i in contentArray) {
    var line = contentArray[i].trim();
    camelCase(line);
}