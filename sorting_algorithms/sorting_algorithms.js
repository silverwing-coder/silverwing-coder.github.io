let win_wd = 1000;
let win_ht = 400;
let sorting_data = [];
let count = 0;

let shell_gap; // shell_sorting parameter.

// let op_count = 0;
let timer;
let fps = 10;
let startTime = 0;
let endTime = 0;

/** Sorting algorithm selection */
let selection = false;
let bubble = false;
let insertion = false;
let merge = false;
let quick = false;
let shell = false;

let arr;
let arr_size;

function checkIfSorted(sdata, len) {
    if (len == 1 || len == 0) {
        return true;
    }
    if (sdata[len - 1] > sdata[len - 2]) {
        return false;
    }
    return checkIfSorted(sdata, len - 1);
}

function reset_data() {
    count = 0;
    shell_gap = sorting_data.length;
    selection = false;
    bubble = false;
    insertion = false;
    merge = false;
    quick = false;
    shell = false;
    sorting_data.length = 0;
    sorting_data = new SortingClass(win_wd, win_ht).data_sorting;
}

function setup() {
    createCanvas(win_wd, win_ht);
    frameRate(fps);

    createButton("Reset").mousePressed(reset_data);

    createButton("Selection SORT").mousePressed(() => {
        selection = true;
        count = 0;
        startTime = performance.now();
    });
    createButton("Bubble SORT").mousePressed(() => {
        bubble = true;
        count = 0;
        startTime = performance.now();
    });
    createButton("Insertion SORT").mousePressed(() => {
        insertion = true;
        count = 0;
        startTime = performance.now();
    });
    createButton("Merge SORT").mousePressed(() => {
        merge = true;
        count = 0;
        startTime = performance.now();
    });
    createButton("Quick SORT").mousePressed(() => {
        quick = true;
        count = 0;
        startTime = performance.now();
    });
    createButton("Shell SORT").mousePressed(() => {
        shell = true;
        count = 0;
        startTime = performance.now();
    });

    timer = createP("timer");
    createP("Data Size: " + win_wd / 4);
    // background(0);
    // stroke(255, 255, 0);
    sorting_data = new SortingClass(win_wd, win_ht).data_sorting;
    shell_gap = sorting_data.length;
}

function draw() {
    if (count < sorting_data.length) {
        if (selection) {
            sorting_data = selection_sort(sorting_data);
        }
        if (bubble) {
            sorting_data = bubble_sort(sorting_data);
        }
        if (insertion) {
            sorting_data = insertion_sort(sorting_data);
        }
        if (merge) {
            sorting_data = merge_sort(sorting_data, 0, sorting_data.length - 1);
        }
        if (quick) {
            sorting_data = quick_sort(sorting_data, 0, sorting_data.length - 1);
            // sorting_data.pop()
            // console.log(sorting_data.length);
        }
        if (shell) {
            shell_gap = Math.floor(shell_gap / 2);
            sorting_data = shell_sort(sorting_data, shell_gap);
            // sorting_data = shell_sort(sorting_data);
        }

        /** Draw the current sorted status in Canvas*/
        background(200);
        stroke(255, 0, 0);

        for (let i = 0; i < win_wd; i += 4) {
            // if (!quick) {
            line(i, sorting_data[i / 4], i, win_ht);
            // }
        }
        count++;

        /** Display time elapsed. */
        if (!checkIfSorted(sorting_data, sorting_data.length)) {
            // quick =false;
            if (
                !selection &&
                !bubble &&
                !insertion &&
                !merge &&
                !quick &&
                !shell
            ) {
                timer.html("Time elapsed: " + 0);
            } else {
                endTime = performance.now();
                timer.html("Time elapsed: " + round(endTime - startTime));
            }
        }
        // else {
        //     endTime = startTime
        //     timer.html("Time elapsed: " + endTime - startTime);
        // }
    }
}
