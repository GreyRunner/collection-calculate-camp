'use strict';
function map_to_even(collection){
    var collection_result = [];
    var i;

    for (i in collection){
        collection_result.push(collection[i] * 2);
    }

    return collection_result;
}
module.exports = map_to_even;
