function selection_sort(sdata) {
    let min_idx = count;
    for (let i = count + 1; i < sdata.length; i++) {
        if (sdata[min_idx] < sdata[i]) {
            min_idx = i;
            // op_count++;
        }
    }

    let temp = sdata[min_idx];
    sdata[min_idx] = sdata[count];
    sdata[count] = temp;

    return sdata;
}

// function bubble_sort(sdata) {
//     for (let i = count + 1; i < sdata.length; i++) {
//         if (sdata[count] < sdata[i]) {
//             let temp = sdata[count];
//             sdata[count] = sdata[i];
//             sdata[i] = temp;
//             // op_count++;
//         }
//     }
//     return sdata;
// }

// function insertion_sort(sdata) {
//     if (count + 1 < sdata.length) {
//         let key = sdata[count + 1];
//         for (let j = count; j >= 0; j--) {
//             if (key > sdata[j]) {
//                 sdata[j + 1] = sdata[j];
//                 sdata[j] = key;
//                 // op_count++;
//             } else {
//                 break;
//             }
//         }
//     }
//     return sdata;
// }

// function merge_set(sdata, ln, md, rn) {
//     let n1 = md - ln + 1;
//     let n2 = rn - md;

//     let LA = new Array(n1);
//     let RA = new Array(n2);

//     for (let i = 0; i < n1; i++) {
//         LA[i] = sdata[ln + i];
//     }
//     for (let j = 0; j < n2; j++) {
//         RA[j] = sdata[md + 1 + j];
//     }

//     let i = 0;
//     let j = 0;
//     let k = ln;

//     while (i < n1 && j < n2) {
//         if (LA[i] >= RA[j]) {
//             sdata[k] = LA[i];
//             i++;
//         } else {
//             sdata[k] = RA[j];
//             j++;
//         }
//         k++;
//     }

//     while (i < n1) {
//         sdata[k] = LA[i];
//         i++;
//         k++;
//     }

//     while (j < n2) {
//         sdata[k] = RA[j];
//         j++;
//         k++;
//     }
//     return sdata;
// }

// function merge_sort(sdata, ln, rn) {
//     if (ln >= rn) {
//         return;
//     }

//     let md = ln + parseInt((rn - ln) / 2);
//     tp_sdata = merge_set(sdata, ln, md, rn);

//     merge_sort(sdata, ln, md);
//     merge_sort(sdata, md + 1, rn);
//     // op_count++
//     return tp_sdata;
// }

// function quick_sort(sdata) {
//     if (count + 1 < sdata.length) {
//         let key = sdata[count + 1];
//         for (let j = count; j >= 0; j--) {
//             if (key > sdata[j]) {
//                 sdata[j + 1] = sdata[j];
//                 sdata[j] = key;
//                 // op_count++;
//             } else {
//                 break;
//             }
//         }
//     }
//     return sdata;
// }

// function shell_sort(sdata) {
//     if (count + 1 < sdata.length) {
//         let key = sdata[count + 1];
//         for (let j = count; j >= 0; j--) {
//             if (key > sdata[j]) {
//                 sdata[j + 1] = sdata[j];
//                 sdata[j] = key;
//                 // op_count++;
//             } else {
//                 break;
//             }
//         }
//     }
//     return sdata;
// }
