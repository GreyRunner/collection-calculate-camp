function collect_same_elements(collection_a, collection_b) {
    var collection_result = [];
    var i, j;
    for (i in collection_a){
        for (j in collection_b) {
            if (collection_a[i] == collection_b[j]) {
              collection_result.push(collection_a[i]);
              }
        }
    }
    return collection_result;
}
module.exports = collect_same_elements;

//var collection_a = ["a", "e", "h", "t", "f", "c", "g", "b", "d"];
//var collection_b = ["a", "d", "e", "f"];
//console.log(collect_same_elements(collection_a, collection_b));

