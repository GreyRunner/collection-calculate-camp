'use strict';

function compute_chain_median(collection) {
    var collection = collection.split("->");
    var result;
    var i;

    for (i in collection){
        collection[i] = parseInt(collection[i]);
    }
    collection = collection.sort(function (a, b) {return a - b;});
    console.log(collection);
    if (collection.length % 2 != 0) {
        result = collection[Math.ceil(collection.length / 2 - 1)];
    }
    else {
        result = (collection[collection.length / 2 - 1] + collection[collection.length / 2]) / 2;
    }

    return result;
}

module.exports = compute_chain_median;
//var chain = '1->4->6->2->3->10->9->8->11->20->19->30';
//console.log(compute_chain_median(chain));
