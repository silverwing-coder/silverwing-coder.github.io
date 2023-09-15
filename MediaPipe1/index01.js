let WIDTH = 640,
    HEIGHT = 480;

const videoElement = document.getElementById("video");
const canvasElement = document.getElementById("canvas");

function settings() {}

function setup() {
    canvas = createCanvas(WIDTH, HEIGHT);
    video = createCapture(VIDEO);
    video.size(WIDTH, HEIGHT);
    video.hide();
    canvas.id("canvas");

    const camera = new Camera(videoElement, {
        onFrame: async () => {
            await faceMeshDetector.send({ image: videoElement });
            await handDetector.send({ image: videoElement });
        },
        width: WIDTH,
        height: HEIGHT,
    });
    camera.start();
}

function draw() {
    clear();

    translate(video.width, 0);
    scale(-1, 1);
    // console.log(faces.multiFaceLandmarks);
    image(video, 0, 0);

    if (faces != undefined) {
        if (
            faces.multiFaceLandmarks != undefined &&
            faces.multiFaceLandmarks.length >= 1
        ) {
            drawFacemesh();
        }
    }

    if (hands.multiHandLandmarks) {
        drawHandLandmarks();
    }
}

function drawHandLandmarks() {
    stroke(255, 255, 0);
    strokeWeight(1);
    // clear();
    // beginShape(POINTS);
    if (hands.multiHandedness.length > 0) {
        for (let j = 0; j < hands.multiHandedness.length; j++) {
            for (let i = 0; i < hands.multiHandLandmarks[0].length; i++) {
                let x = hands.multiHandLandmarks[j][i].x * WIDTH;
                let y = hands.multiHandLandmarks[j][i].y * HEIGHT;
                // vertex(x, y);
                fill(255, 0, 0);
                ellipse(x, y, 5);

                if (i % 4 == 1) {
                    line(
                        x,
                        y,
                        hands.multiHandLandmarks[j][0].x * WIDTH,
                        hands.multiHandLandmarks[j][0].y * HEIGHT
                    );
                }
                if (i % 4 != 1 && i > 1) {
                    line(
                        x,
                        y,
                        hands.multiHandLandmarks[j][i - 1].x * WIDTH,
                        hands.multiHandLandmarks[j][i - 1].y * HEIGHT
                    );
                }
            }
        }
    }
    // endShape();
}

function drawFacemesh() {
    stroke(255);
    strokeWeight(2);
    beginShape(POINTS);
    for (let i = 0; i < faces.multiFaceLandmarks[0].length; i++) {
        let x = faces.multiFaceLandmarks[0][i].x * WIDTH;
        let y = faces.multiFaceLandmarks[0][i].y * HEIGHT;
        vertex(x, y);
    }
    endShape();
}
