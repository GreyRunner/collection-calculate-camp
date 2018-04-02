'use strict';

function compute_average(collection) {
    var sum = 0, average = 0;
    var i;

    for (i in collection){
        sum += collection[i];
    }
    average = sum / collection.length;

    return average;
}

module.exports = compute_average;

