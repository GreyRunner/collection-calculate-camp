function collect_same_elements(collection_a, collection_b) {
    var collection_result = [];
    var i, j, k;
    for (i in collection_a){
        for (j in collection_b) {
            for (k in collection_b[j]){
                if (collection_a[i] == collection_b[j][k]) {
                    collection_result.push(collection_a[i]);
                }
            }
        }
    }
    return collection_result;
}

module.exports = collect_same_elements;
