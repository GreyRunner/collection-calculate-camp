'use strict';

function hybrid_operation_to_uneven(collection) {
    var sum = 0;
    var i;

    for (i in collection){
        if (collection[i] % 2 != 0) {
            sum += collection[i] * 3 + 5;
        }
    }

    return sum;
}

module.exports = hybrid_operation_to_uneven;

