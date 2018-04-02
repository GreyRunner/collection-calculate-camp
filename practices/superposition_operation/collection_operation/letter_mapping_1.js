'use strict';

function even_to_letter(collection) {
    var collection_result = [];
    var a_ASCII = 'a'.charCodeAt();
    var i;

    for (i in collection){
        if (collection[i] % 2 == 0) {
            collection_result.push(String.fromCharCode(a_ASCII + collection[i] - 1));
        }
    }

    return collection_result;
}

module.exports = even_to_letter;
