// test = createP();
// let idx = -1;

function partition(sdata, ln, rn) {
    let pivot = sdata[Math.floor((ln + rn) / 2)];

    let l = ln;
    let r = rn;

    while (l <= r) {
        while (sdata[l] > pivot) {
            l++;
        }

        while (sdata[r] < pivot) {
            r--;
        }

        if (l <= r) {
            let temp = sdata[l];
            sdata[l] = sdata[r];
            sdata[r] = temp;
            l++;
            r--;
        }
    }
    return l;
}

function quick_sort(sdata, ln, rn) {
    if (ln >= rn) {
        return;
    }

    let idx = partition(sdata, ln, rn);

    if (sdata.length > 0) {
        if (ln < idx - 1) {
            quick_sort(sdata, ln, idx - 1);
        }
        if (idx < rn) {
            quick_sort(sdata, idx, rn);
        }
        return sdata;
    }
}
