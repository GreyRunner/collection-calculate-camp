'use strict';

function choose_multiples_of_three(collection) {
    var collection_result = [];
    var i;

    for (i in collection){
        if (collection[i] % 3 ==0){
            collection_result.push(collection[i]);
        }
    }

    return collection_result;
}

module.exports = choose_multiples_of_three;
