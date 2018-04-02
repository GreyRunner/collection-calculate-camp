'use strict';
function rank_by_two_large_one_small(collection){
    var i;
    var t;

    collection.sort(function (a, b) {
        return a - b;
    });
    for (i = 0; i < collection.length; i++) {
        if ((i + 1) % 3 == 0){
            t = collection[i - 2];
            collection = truncate(collection, i - 2);
            collection = insert(collection, i, t);
        }
    }

    return collection;
}

function insert(collection, n, value) {
    var i = 0
    var collection_result = [];

    for (i in collection){
        if (i == n){
            collection_result.push(value);
        }
        collection_result.push(collection[i]);
    }

    return collection_result;
}

function truncate(collection, n) {
    var i = 0;
    var collection_result = [];

    for (i in collection){
        if ( i != n ){
            collection_result.push(collection[i]);
        }
    }

    return collection_result;
}
module.exports = rank_by_two_large_one_small;
//var collection_a = [2, 8, 1, 9, 6, 4, 3, 10];
//console.log(rank_by_two_large_one_small(collection_a));
