let WIDTH = 1280,
    HEIGHT = 720;
const videoElement = document.getElementById("video");
const canvasElement = document.getElementById("canvas");
const canvasCtx = canvasElement.getContext("2d");

function settings() {}

function setup() {
    canvas = createCanvas(WIDTH, HEIGHT);
    canvas.id("canvas");

    // capture = createCapture(VIDEO);
    // capture.size(WIDTH, HEIGHT);
    // capture.hide();
}

function draw() {
    // console.log(hdetection.multiHandlandmarks);
    clear();
    noStroke();
    textSize(32);
    text("Test", 10, 30);

    if (hdetected.multiHandLandmarks) {
        drawHandLandmarks();
    }

    if (detection != undefined) {
        if (
            detection.multiFaceLandmarks != undefined &&
            detection.multiFaceLandmarks.length >= 1
        ) {
            drawFacemesh();
        }
    }
}

function drawHandLandmarks() {
    stroke(255, 255, 0);
    strokeWeight(5);
    // clear();
    beginShape(POINTS);
    if (hdetected.multiHandedness.length > 0) {
        for (let j = 0; j < hdetected.multiHandedness.length; j++) {
            for (let i = 0; i < hdetected.multiHandLandmarks[0].length; i++) {
                let x = hdetected.multiHandLandmarks[j][i].x * WIDTH;
                let y = hdetected.multiHandLandmarks[j][i].y * HEIGHT;
                vertex(x, y);
            }
        }
    }
    endShape();
}

function drawFacemesh() {
    stroke(255);
    strokeWeight(3);
    beginShape(POINTS);
    for (let i = 0; i < detection.multiFaceLandmarks[0].length; i++) {
        let x = detection.multiFaceLandmarks[0][i].x * WIDTH;
        let y = detection.multiFaceLandmarks[0][i].y * HEIGHT;
        vertex(x, y);
    }
    endShape();
}
