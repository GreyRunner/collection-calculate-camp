'use strict';

function double_to_one(collection) {
    var collection_result = [];
    var i = 0, j = 0;

    for (i in collection){
        if (typeof(collection[i]) != "number"){
            for (j in collection[i]) {
                if (!exist(collection[i][j], collection_result)) {
                    collection_result.push(collection[i][j]);
                }
            }
        }
        else {
            if (!exist(collection[i], collection_result)) {
                collection_result.push(collection[i]);
            }
        }
    }

    return collection_result;
}

function exist(number, collection) {
    for (var i in collection){
        if (collection[i] == number){
            return true;
        }
    }
    return false;
}

module.exports = double_to_one;
