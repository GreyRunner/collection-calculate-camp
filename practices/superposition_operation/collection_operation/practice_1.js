'use strict';

function hybrid_operation(collection) {
    var sum = 0;
    var i;

    for (i in collection){
        sum += collection[i] * 3 + 2;
    }

    return sum;
}

module.exports = hybrid_operation;

