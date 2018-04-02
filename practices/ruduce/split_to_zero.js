'use strict';

function spilt_to_zero(number, interval) {
    var collection = [number];

    while (number > 0){
        number -= interval;
        number = parseFloat(number.toFixed(1));
        collection.push(number)
    }

    return collection;
}

module.exports = spilt_to_zero;
