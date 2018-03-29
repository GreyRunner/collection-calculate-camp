function create_updated_collection(collection_a, object_b) {
    var collection_c = count_same_elements(collection_a);
    var i = 0, j = 0;

    for (i in object_b['value']){
        for (j in collection_c){
            if (object_b['value'][i] == collection_c[j]['key']){
                collection_c[j]['count'] -= parseInt(collection_c[j]['count'] / 3);
            }
        }
    }
    return collection_c;
}

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
        obj_factor["key"] = i;
        obj_factor["count"] = object_count[i];
        collection_result[j] = obj_factor;
        j++;
    }

    return collection_result;
}

module.exports = create_updated_collection;
