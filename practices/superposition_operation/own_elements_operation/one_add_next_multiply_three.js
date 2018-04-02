'use strict';
function one_add_next_multiply_three(collection){
    var collection_result = [];
    var i;

    for (i = 0; i < collection.length - 1; i++){
        collection_result.push((collection[i] + collection[i + 1]) * 3);
    }

    return collection_result;
}
module.exports = one_add_next_multiply_three;
