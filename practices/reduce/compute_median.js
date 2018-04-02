'use strict';

function compute_median(collection) {
    var result;

    collection.sort(function (a, b) { return a - b; })
    if (collection.length % 2 != 0) {
        result = collection[Math.ceil(collection.length / 2 - 1)];
    }
    else {
        result = (collection[collection.length / 2 - 1] + collection[collection.length / 2]) / 2;
    }

    return result;
}

module.exports = compute_median;


