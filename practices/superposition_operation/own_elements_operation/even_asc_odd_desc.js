'use strict';
var even_asc_odd_desc = function(collection){
    var collection_even = [], collection_uneven = [];
    var collection_result =[];
    var i;
    for (i in collection){
        if (collection[i] % 2 == 0){
            collection_even.push(collection[i]);
        }
        else {
            collection_uneven.push(collection[i]);
        }
    }
    collection_even.sort(function (a, b) {
        return a - b;
    });
    collection_uneven.sort(function (a, b)
    {
        return b - a;
    });
    for (i in collection_even){
        collection_result.push(collection_even[i]);
    }
    for (i in collection_uneven) {
        collection_result.push(collection_uneven[i]);
    }

    return collection_result;
};
module.exports = even_asc_odd_desc;
