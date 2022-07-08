
function bubble_sort(sdata) {
    for (let i = count + 1; i < sdata.length; i++) {
        if (sdata[count] < sdata[i]) {
            let temp = sdata[count];
            sdata[count] = sdata[i];
            sdata[i] = temp;
            // op_count++;
        }
    }
    return sdata;
}
