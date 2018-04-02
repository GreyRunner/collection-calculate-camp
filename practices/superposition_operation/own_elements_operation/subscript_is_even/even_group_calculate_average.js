'use strict';
var even_group_calculate_average = function(collection){
    var count_one = 0, count_two = 0, count_three = 0;
    var sum_one = 0, sum_two = 0, sum_three = 0;
    var i = 0;
    var collection_result = [];

    for (i = 0; i < collection.length; i++){
        if (collection[i] % 2 == 0 && (i + 1) % 2 == 0) {
            if (collection[i] / 100 > 1) {
                count_three++;
                sum_three += collection[i];
            }
            else if (collection[i] / 10 > 1){
                count_two++;
                sum_two += collection[i];
            }
            else if (collection[i] / 1 > 1){
                count_one++;
                sum_one += collection[i];
            }
        }
    }
    if (count_one + count_two + count_three == 0) {
        collection_result = [0];
    }
    else {
        if (count_one != 0) {
            collection_result.push(sum_one / count_one);
        }
        if (count_two != 0) {
            collection_result.push(sum_two / count_two);
        }
        if (count_three != 0) {
            collection_result.push(sum_three / count_three);
        }
    }

    return collection_result;
};

module.exports = even_group_calculate_average;
/*var collection_a = [1, 2, 3, 4, 5, 6, 12, 454, 324, 21, 45, 644, 34, 56, 345, 570, 8, 4, 14];
var collection_b = [1, 3, 5, 7, 33, 55, 31, 555, 777];
var collection_c = [344, 256, 55, 777, 322, 180];
var collection_d = [2, 4, 6]
console.log(even_group_calculate_average(collection_d));*/
