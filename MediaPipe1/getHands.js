let hands = [];

function onResults(results) {
    hands = results;
}

const handDetector = new Hands({
    locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
    },
});

handDetector.setOptions({
    maxNumHands: 2,
    modelComplexity: 1,
    minDetectionConfidence: 0.5,
    minTrackingConfidence: 0.5,
});

handDetector.onResults(onResults);

// const camera = new Camera(videoElement, {
//     onFrame: async () => {
//         await handDetector.send({ image: videoElement });
//     },
//     width: WIDTH,
//     height: HEIGHT,
// });
// camera.start();
