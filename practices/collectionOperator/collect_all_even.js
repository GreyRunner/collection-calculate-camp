'use strict';

function collect_all_even(collection) {
    var collection_result = [];
    var i = 0;
    for (i in collection){
        if (collection[i] % 2 == 0){
            collection_result.push(collection[i]);
        }
    }
    return collection_result;
}

module.exports = collect_all_even;

/*var collection_a = [1, 2, 3, 4, 5];
console.log(collect_all_even(collection_a));*/
