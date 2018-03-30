'use strict';

function choose_divisible_integer(collection_a, collection_b) {
    var collection_result = [];
    var i = 0, j = 0;

    for (i in collection_a){
        for (j in collection_b){
            if (collection_a[i] % collection_b[j] == 0){
                collection_result.push(collection_a[i]);
                break;
            }
        }
    }

    return collection_result;
}

module.exports = choose_divisible_integer;
