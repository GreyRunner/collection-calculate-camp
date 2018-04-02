'use strict';

function hybrid_operation_to_uneven(collection) {
    var collection_result = [];
    var i;

    for (i in collection){
        if (collection[i] % 2 != 0) {
            collection_result.push(collection[i] * 3 + 2);
        }
    }

    return collection_result;
}

module.exports = hybrid_operation_to_uneven;

