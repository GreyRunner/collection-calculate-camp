'use strict';

function grouping_count(collection) {
    var obj_result = {};
    var i = 0;

    for (i in collection){
        if (!obj_result[collection[i]]){
            obj_result[collection[i]] = 1;
        }
        else {
            obj_result[collection[i]]++;
        }
    }

    return obj_result;
}

module.exports = grouping_count;
