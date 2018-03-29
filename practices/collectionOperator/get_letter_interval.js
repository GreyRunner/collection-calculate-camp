'use strict';

function get_letter_interval(number_a, number_b) {
    var collection_c = [];
    var i;
    var a_ASCII = 'a'.charCodeAt();
    if (number_a < number_b) {
        for (i = number_a; i <= number_b; i++) {
            collection_c.push(String.fromCharCode(a_ASCII + i - 1));
        }
    }
    else if (number_a > number_b) {
        for (i = number_a; i >= number_b; i--) {
            collection_c.push(String.fromCharCode(a_ASCII + i - 1));
        }
    }
    else if (number_a == number_b) {
        collection_c.push(String.fromCharCode(a_ASCII + number_a - 1));
    }
    return collection_c;
}

module.exports = get_letter_interval;
