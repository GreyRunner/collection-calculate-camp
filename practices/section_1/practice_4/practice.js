function collect_same_elements(collection_a, object_b) {
    var collection_result = [];
    var i, j;
    for (i in collection_a){
        for (j in object_b['value']) {
            if (collection_a[i]['key'] == object_b.value[j]) {
                collection_result.push(collection_a[i]['key']);
            }
        }
    }
    return collection_result;
}

module.exports = collect_same_elements;

//var collection_a = [
//    {key: "a"}, {key: "e"}, {key: "h"}, {key: "t"}, {key: "f"}, {key: "c"}, {key: "g"}, {key: "b"}, {key: "d"}
//];
//var collection_b = {value: ["a", "d", "e", "f"]};
//console.log(collect_same_elements(collection_a, collection_b));
