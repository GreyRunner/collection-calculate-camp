'use strict';

function average_uneven(collection) {
    var sum = 0;
    var i = 0;
    var uneven_count = 0;
    for (i in collection){
        if (collection[i] % 2 != 0){
            sum += collection[i]
            uneven_count++;
        }
    }

    return sum / uneven_count;
}

module.exports = average_uneven;
