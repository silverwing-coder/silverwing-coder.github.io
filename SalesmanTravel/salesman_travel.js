var nodes = [];
var no_nodes = 5;

var shortest_dist = 10000;
var best_path;
var rounds = 0;

function setup() {
    createCanvas(600, 400);
    for (let i = 0; i < no_nodes; i++) {
        var v = createVector(random(width), random(height));
        nodes[i] = v;
    }
}

function draw() {
    background(0);
    fill(255);
    for (let i = 0; i < nodes.length; i++) {
        ellipse(nodes[i].x, nodes[i].y, 10, 10);
    }

    /** Lexicographic Permutation */
    // 1. Find the largest x such as P[x] < p[x+1]
    var largestI = -1;
    for (let i = 0; i < nodes.length-1; i++) {
        if (nodes[i] < [nodes[i + 1]]) {
            largestI = i;
        }
    }
    if (largestI == -1) {
        nodes = [];
        beginShape();
        for (let i = 0; i < nodes.length; i++) {
            vertex(nodes[i].x, nodes[i].y);
        }
        endShape();

        stroke(255, 100, 250);
        strokeWeight(2);
        noFill();
        beginShape();
        for (let i = 0; i < best_path.length; i++) {
            vertex(best_path[i].x, best_path[i].y);
        }
        endShape();

        textSize(32);
        fill(255);
        text("Completed ! ", width / 2, height / 2);
        noLoop();
        // console.log("Finished !");
    }
    // 2. Find the largest y such that P[x] < P[y]
    var largestJ = -1;
    for (let i = largestI; i < nodes.length; i++) {
        if (nodes[i] > nodes[largestI]) {
            largestJ = i;
        }
    }
    // 3. Swap P[x] and P[y]
    swap(nodes, largestI, largestJ);
    // 4. reverse P[x+1, n]
    var endArray = nodes.splice(largestI + 1);
    endArray.reverse();
    nodes = nodes.concat(endArray);

    stroke(255);
    strokeWeight(2);
    noFill();
    beginShape();
    for (let i = 0; i < nodes.length; i++) {
        vertex(nodes[i].x, nodes[i].y);
    }
    endShape();

    // var i = floor(random(nodes.length));
    // var j = floor(random(nodes.length));
    // swap(nodes, i, j);

    var dist = calc_distance(nodes);
    if (dist < shortest_dist) {
        shortest_dist = dist;
        best_path = nodes.slice();
        console.log("dist : " + shortest_dist);
    }

    stroke(255, 100, 250);
    strokeWeight(2);
    noFill();
    beginShape();
    for (let i = 0; i < best_path.length; i++) {
        vertex(best_path[i].x, best_path[i].y);
    }
    endShape();
    rounds++;
    textSize(20);
    fill(255);
    text("Rounds : " + rounds, 20, 30);
}

function swap(a, i, j) {
    var tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
}

function calc_distance(nodes) {
    var sum = 0;
    for (let i = 0; i < nodes.length - 1; i++) {
        var d = dist(nodes[i].x, nodes[i].y, nodes[i + 1].x, nodes[i + 1].y);
        sum += d;
    }
    return sum;
}

function re_start() {
    shortest_dist = 10000;
    best_path = [];
    nodes = [];

    no_nodes = int(document.getElementById("no_nodes").value);
    // console.log("no_nodes : " + no_nodes);
    if (!Number.isInteger(no_nodes)) {
        alert("Input integer number in Max Population");
    }

    for (let i = 0; i < no_nodes; i++) {
        var vec = createVector(random(width), random(height));
        nodes[i] = vec;
    }

    loop();
}
