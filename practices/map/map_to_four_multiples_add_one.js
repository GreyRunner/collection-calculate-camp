'use strict';
var map_to_four_multiples_add_one = function(collection){
    var collection_result = [];
    var i;

    for (i in collection){
        collection_result.push(collection[i] * 4 + 1);
    }

    return collection_result;
};

module.exports = map_to_four_multiples_add_one;
