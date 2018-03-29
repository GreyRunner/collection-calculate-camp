'use strict';

function get_integer_interval_2(number_a, number_b) {
    var collection_result = [];
    var i;
    if (number_a < number_b) {
        for (i = number_a; i <= number_b; i++) {
            if (i % 2 == 0) {
                collection_result.push(i);
            }
        }
    }
    else if (number_a > number_b) {
        for (i = number_a; i >= number_b; i--) {
            if (i % 2 == 0) {
                collection_result.push(i);
            }
        }
    }
    else if (number_a == number_b && number_a % 2 == 0) {
        collection_result.push(number_a);
    }
    return collection_result;
}

module.exports = get_integer_interval_2;
