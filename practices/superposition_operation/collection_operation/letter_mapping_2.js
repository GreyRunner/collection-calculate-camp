'use strict';

function average_to_letter(collection) {
    var result;
    var a_ASCII = 'a'.charCodeAt();
    var i;
    var sum = 0;

    for (i in collection){
        sum += collection[i]
    }
    result = String.fromCharCode(a_ASCII + Math.ceil(sum / collection.length) - 1);

    return result;
}

module.exports = average_to_letter;

