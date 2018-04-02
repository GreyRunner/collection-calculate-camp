'use strict';
var is_exist_element = function(collection,element){
    var i = 0;
    var result = false;

    for (i = 0; i < collection.length; i++) {
        if (collection[i] == element && i % 2 == 0) {
            result = true;
            break;
        }
    }

    return result;
};
module.exports = is_exist_element;
