'use strict';

function amount_even(collection) {
    var sum = 0;
    var i = 0;
    for (i in collection){
        if (collection[i] % 2 == 0){
            sum += collection[i]
        }
    }

    return sum;
}

module.exports = amount_even;
