'use strict';
var number_map_to_word_over_26 = function(collection){


    var collection_result = [];
    var i = 0;
    var a_ASCII = 'a'.charCodeAt();
    var letter = '';

    for (i in collection){
        if (collection[i] > 26) {
            letter = '';
            if (collection[i] % 26 == 0){
                letter += String.fromCharCode(a_ASCII + collection[i] / 26 - 2);
                letter += 'z';
                collection_result.push(letter);
            }
            else {
                letter += String.fromCharCode(a_ASCII + collection[i] / 26 - 1);
                letter += String.fromCharCode(a_ASCII + collection[i] % 26 - 1);
                collection_result.push(letter);
            }
        }
        else {
            collection_result.push(String.fromCharCode(a_ASCII + collection[i] - 1));
        }
    }

    return collection_result;
};

module.exports = number_map_to_word_over_26;
