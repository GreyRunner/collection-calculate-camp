'use strict';

function choose_no_repeat_number(collection) {
    var collection_result = [];
    var i = 0, j = 0;
    var flag = false;

    for (i in collection) {
        flag = false;
        for (j in collection_result) {
            if (collection[i] == collection_result[j]){
                flag = true;
                break;
            }
        }
        if (!flag) {
            collection_result.push(collection[i]);
        }
    }

    return collection_result;
}

module.exports = choose_no_repeat_number;
