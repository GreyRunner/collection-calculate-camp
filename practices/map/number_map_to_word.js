'use strict';
var number_map_to_word = function(collection){
    var collection_result = [];
    var i;
    var a_ASCII = 'a'.charCodeAt();

    for (i in collection){

        collection_result.push(String.fromCharCode(a_ASCII + collection[i] - 1));
    }

    return collection_result;
};

module.exports = number_map_to_word;
