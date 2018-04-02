'use strict';
var calculate_median = function(collection){
    var result;
    var collection_even = [];
    var i;

    collection.sort(function (a , b) {
        return a - b;
    });
    for (i = 0; i < collection.length; i++) {
        if ((i + 1) % 2 == 0){
            collection_even.push(collection[i]);
        }
    }
    if (collection_even.length % 2 == 0){
        result = (collection_even[collection_even.length / 2]
            + collection_even[collection_even.length / 2 - 1]) / 2;
    }
    else {
        result = collection_even[Math.floor(collection_even.length / 2)];
    }

    return result;
};
module.exports = calculate_median;
