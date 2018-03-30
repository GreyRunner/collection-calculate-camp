'use strict';

function double_to_one(collection) {
    var collection_result = [];
    var i = 0, j = 0;

    for (i in collection){
        if (typeof(collection[i]) != "number"){
            for (j in collection[i]) {
                collection_result.push(collection[i][j]);
            }
        }
        else {
            collection_result.push(collection[i]);
        }
    }

    return collection_result;
}

module.exports = double_to_one;
