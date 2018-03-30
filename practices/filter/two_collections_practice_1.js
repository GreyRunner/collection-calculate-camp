'use strict';

function choose_common_elements(collection_a, collection_b) {
    var collection_result = [];
    var i = 0, j = 0;

    for (i in collection_a){
        for (j in collection_b){
            if (collection_a[i] == collection_b[j]){
                collection_result.push(collection_a[i]);
            }
        }
    }

    return collection_result;
}

module.exports = choose_common_elements;
