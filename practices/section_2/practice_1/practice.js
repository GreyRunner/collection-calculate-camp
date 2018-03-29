function count_same_elements(collection) {
    var object_count = {};
    var collection_result = [{}];
    var obj_factor = {};
    var i = 0, j = 0;

    for (i in collection){
        if (!object_count[collection[i]]) {
            object_count[collection[i]] = 1;
        }
        else {
            object_count[collection[i]]++;
        }
    }
    for (i in object_count){
        obj_factor = {};
        obj_factor["key"] = i;
        obj_factor["count"] = object_count[i];
        collection_result[j] = obj_factor;
        j++;
    }

    return collection_result;
}

module.exports = count_same_elements;

/*var collection = [
    "a", "a", "a",
    "e", "e", "e", "e", "e", "e", "e",
    "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h",
    "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t",
    "f", "f", "f", "f", "f", "f", "f", "f", "f",
    "c", "c", "c", "c", "c", "c", "c", "c",
    "g", "g", "g", "g", "g", "g", "g",
    "b", "b", "b", "b", "b", "b",
    "d", "d", "d", "d", "d"
];
console.log(count_same_elements(collection));*/
