'use strict';

function calculate_elements_sum(collection) {
    return collection.reduce(getSum);
}

function getSum(number_a, number_b) {
    return number_a + number_b;
}

module.exports = calculate_elements_sum;

