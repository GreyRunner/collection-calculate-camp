'use strict';

function get_union(collection_a, collection_b) {
    var collection_result = collection_a;
    var i = 0, j = 0;
    var exist = false;
    for (i in collection_b){
        exist = false;
        for (j in collection_a){
            if (collection_a[j] == collection_b[i]){
                exist = true;
                break;
            }
        }
        if (!exist){
            collection_result.push(collection_b[i])
        }
    }
    return collection_result;
}

module.exports = get_union;

