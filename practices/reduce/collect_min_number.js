'use strict';

function collect_min_number(collection) {
    var result = collection[0];
    var i = 0;

    for (i in collection) {
        if (result > collection[i]) {
            result = collection[i];
        }
    }

    return result;
}

module.exports = collect_min_number;

