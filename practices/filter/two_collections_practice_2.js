'use strict';

function choose_no_common_elements(collection_a, collection_b) {
    var collection_result = [];
    var i = 0, j = 0;
    var flag = false;

    for (i in collection_a){
        flag = false;
        for (j in collection_b){
            if (collection_a[i] == collection_b[j]) {
                flag = true;
                break;
            }
        }
        if (!flag) {
            collection_result.push(collection_a[i]);
        }
    }

    return collection_result;

}

module.exports = choose_no_common_elements;
