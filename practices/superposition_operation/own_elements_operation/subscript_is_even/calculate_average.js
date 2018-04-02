'use strict';
var calculate_average = function(collection){
    var sum = 0, result = 0;
    var i = 0;
    var even_number = 0;

    for (i = 0; i < collection.length; i++){
        if ((i + 1) % 2 == 0) {
            sum += collection[i];
            even_number++;
        }
    }
    result = sum / even_number;

    return result;
};
module.exports = calculate_average;
var collection_a = [1, 2, 3, 4, 5, 6];
console.log(calculate_average(collection_a));
