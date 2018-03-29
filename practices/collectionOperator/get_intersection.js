'use strict';

function get_intersection(collection_a, collection_b) {
    var collection_result = [];
    var i, j;

    for (i in collection_b){
        for (j in collection_a){
            if (collection_b[i] == collection_a[j]) {
                collection_result.push(collection_a[j]);
            }
        }
    }

    return collection_result;
}

module.exports = get_intersection;
