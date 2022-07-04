
function insertion_sort(sdata) {
    if (count + 1 < sdata.length) {
        let key = sdata[count + 1];
        for (let j = count; j >= 0; j--) {
            if (key > sdata[j]) {
                sdata[j + 1] = sdata[j];
                sdata[j] = key;
                // op_count++;
            } else {
                break;
            }
        }
    }
    return sdata;
}