let hdetected = [];

function onResults(results) {
    hdetected = results;
    canvasCtx.save();
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    // canvasCtx.drawImage(
    //     results.image,
    //     0,
    //     0,
    //     canvasElement.width,
    //     canvasElement.height
    // );
    if (results.multiHandLandmarks) {
        for (const landmarks of results.multiHandLandmarks) {
            drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS, {
                color: "#00FF00",
                lineWidth: 2,
            });
            // drawLandmarks(canvasCtx, landmarks, {
            //     color: "#FF0000",
            //     lineWidth: 3,
            // });
        }
    }
    canvasCtx.restore();
}

const hands = new Hands({
    locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
    },
});
hands.setOptions({
    maxNumHands: 2,
    modelComplexity: 1,
    minDetectionConfidence: 0.5,
    minTrackingConfidence: 0.5,
});
hands.onResults(onResults);

const camera = new Camera(videoElement, {
    onFrame: async () => {
        await hands.send({ image: videoElement });
        await faceMesh.send({image: videoElement});
    },
    width: WIDTH,
    height: HEIGHT,
});
camera.start();
