'use strict';

function median_to_letter(collection) {
    var middle;
    var letters = "";
    var a_ASCII = 'a'.charCodeAt();


    collection.sort(function (a, b){
        return a - b;
    });
    if (collection.length % 2 == 0){
        middle = (collection[collection.length / 2] + collection[collection.length / 2 - 1]) / 2;
    }
    else {
        middle = collection[Math.floor(collection.length / 2)];
    }
    middle = Math.ceil(middle);
    letters = String.fromCharCode(a_ASCII + Math.floor(middle / 26) - 1);
    letters += String.fromCharCode(a_ASCII + middle % 26 - 1);
    return letters;
}

module.exports = median_to_letter;
var collection = [20,21,22,23,24,25,26,27,28,29,
    30,31,32,33,34,35,36,37,38,39,
    40,41,42,43,44,45,46,47,48,49,
    50,51,52,53];
console.log(median_to_letter(collection));
