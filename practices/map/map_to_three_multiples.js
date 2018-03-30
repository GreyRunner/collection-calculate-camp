'use strict';
var map_to_three_multiples = function(collections){
    var collection_result = [];
    var i;

    for (i in collections){
        collection_result.push(collections[i] * 3);
    }

    return collection_result;
};

module.exports = map_to_three_multiples;
