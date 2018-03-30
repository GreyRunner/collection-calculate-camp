'use strict';

function choose_even(collection) {
    var collection_result = [];
    var i;

    for (i in collection){
        if (collection[i] % 2 ==0){
            collection_result.push(collection[i]);
        }
    }

    return collection_result;
}

module.exports = choose_even;
