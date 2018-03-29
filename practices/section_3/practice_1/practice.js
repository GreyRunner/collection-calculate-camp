function create_updated_collection(collection_a, object_b) {
    var i = 0, j = 0;

    for (i in object_b['value']){
        for (j in collection_a){
            if (object_b['value'][i] == collection_a[j]['key']){
                collection_a[j]['count']--;
            }
        }
    }
    return collection_a;
}

module.exports = create_updated_collection;
