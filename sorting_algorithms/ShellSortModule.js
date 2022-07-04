
function shell_sort(sdata, gap) {
    let j = 0;
    let leng = sdata.length;
    for (let i = gap; i < leng; i++) {
        let temp = sdata[i];
        for (j = i; j >= gap && sdata[j - gap] < temp; j -= gap) {
            sdata[j] = sdata[j - gap];
        }
        sdata[j] = temp;
    }

    return sdata;
}
