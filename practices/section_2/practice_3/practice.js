function count_same_elements(collection) {
    var object_count = {};
    var collection_result = [{}];
    var obj_factor = {};
    var i = 0, j = 0;

    for (i in collection) {
        if (collection[i].length > 1) {
            if (!object_count[collection[i].charAt(0)]) {
                object_count[collection[i].charAt(0)] = parseInt(collection[i].match(/\d/g).join(""));
            }
            else {
                object_count[collection[i].charAt(0)] += parseInt(collection[i].match(/\d/g).join(""));
            }
            continue;
        }
        if (!object_count[collection[i]]) {
            object_count[collection[i]] = 1;
        }
        else {
            object_count[collection[i]]++;
        }
    }
    for (i in object_count){
        obj_factor = {};
        obj_factor["name"] = i;
        obj_factor["summary"] = object_count[i];
        collection_result[j] = obj_factor;
        j++;
    }

    return collection_result;
}

module.exports = count_same_elements;
