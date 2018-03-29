'use strict';

function get_integer_interval(number_a, number_b) {
    var collection_c = [];
    var i;
    if (number_a < number_b) {
        for (i = number_a; i <= number_b; i++) {
                collection_c.push(i);
        }
    }
    else if (number_a > number_b) {
        for (i = number_a; i >= number_b; i--) {
                collection_c.push(i);
        }
    }
    else if (number_a == number_b) {
        collection_c.push(number_a);
    }
    return collection_c;
}

module.exports = get_integer_interval;
