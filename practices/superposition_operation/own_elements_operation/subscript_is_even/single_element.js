'use strict';
var single_element = function(collection){
    var i = 0, j = 0;
    var collection_result = [];
    var exist = false;

    for (i = 0; i < collection.length; i++){
        if ((i + 1) % 2 == 0){
            exist = false;
            for (j = 0; j < collection.length; j++){
                if (j == i) {
                    continue;
                }
                if (collection[i] == collection[j] && (j + 1) % 2 == 0){
                    exist = true;
                    break;
                }
            }
            if (!exist) {
                collection_result.push(collection[i]);
            }
        }
    }

    return collection_result;
};
module.exports = single_element;
//var collection_a = [1, 2, 3, 2, 5, 6, 21, 43, 12, 5];
//var collection_b = [11, 11, 22, 11, 33, 11];
//console.log(single_element(collection_a));
