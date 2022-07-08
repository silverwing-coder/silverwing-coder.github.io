var data = [];

var m = 1;
var b = 0;
var residual = 0;

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(50);
    stroke(255);
    fill(255);
    line(50, 50, 50, 575);
    line(45, 60, 55, 60);
    line(25, 550, 575, 550);
    line(540, 545, 540, 555);
    textSize(20);
    text("y=1", 10, 70);
    text("0", 30, 575);
    text("x=1", 520, 575);
    textSize(25);
    fill(255);
    text("m = " + m, 100, 50);
    text("b = " + b, 100, 80);
    text("(re)**2 = " + residual, 100, 110);
    text;
    for (let i = 0; i < data.length; i++) {
        var x = map(data[i].x, 0, 1, 0, width);
        var y = map(data[i].y, 0, 1, height, 0);
        // console.log(x + ", " + y);
        fill(255);
        stroke(255);
        ellipse(x, y, 8, 8);
    }
    if (data.length > 1) {
        drawLine();
        linearRegression()
        // gradientDescent();
    }
}

function mouseClicked() {
    if (mouseX > 50 && mouseX < 575 && mouseY > 50 && mouseY < 575) {
        var x = map(mouseX, 0, width, 0, 1);
        var y = map(mouseY, 0, height, 1, 0);
        var point = createVector(x, y);
        data.push(point);
        console.log(point + ", " + data.length);
    }
}

function drawLine() {
    var x1 = 0;
    var y1 = m * x1 + b;
    var x2 = 1;
    var y2 = m * x2 + b;

    x1 = map(x1, 0, 1, 0, width);
    y1 = map(y1, 0, 1, height, 0);
    x2 = map(x2, 0, 1, 0, width);
    y2 = map(y2, 0, 1, height, 0);

    stroke(255, 255, 0);
    line(x1, y1, x2, y2);
}

function linearRegression() {
    var xsum = 0;
    var ysum = 0;
    residual = 0;
    for (let i = 0; i < data.length; i++) {
        xsum += data[i].x;
        ysum += data[i].y;
    }
    var xmean = xsum / data.length;
    var ymean = ysum / data.length;

    var num = 0;
    var den = 0;
    for (let i = 0; i < data.length; i++) {
        var x = data[i].x;
        var y = data[i].y;
        num += (x - xmean) * (y - ymean);
        den += (x - xmean) * (x - xmean);
    }
    m = num / den;
    b = ymean - m * xmean;

    for (let i = 0; i < data.length; i++) {
        var x = data[i].x;
        var y = m * x + b;
        var diff = data[i].y - y;
        residual += diff * diff;
    }
    print(residual);
}

function gradientDescent() {
    var learning_rate = 0.1;
    for (let i = 0; i < data.length; i++) {
        var x = data[i].x;
        var y = data[i].y;

        var guess = m * x + b;
        var error = y - guess;

        m = m + error * x * learning_rate;
        b = b + error * learning_rate;
    }
}
