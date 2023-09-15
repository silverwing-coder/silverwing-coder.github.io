let faces = [];

function getFaceMesh(results) {
    faces = results;
    // console.log(faces);
}

const faceMeshDetector = new FaceMesh({
    locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`;
    },
});

faceMeshDetector.setOptions({
    maxNumFaces: 1,
    refineLandmarks: true,
    minDetectionConfidence: 0.5,
    minTrackingConfidence: 0.5,
});

faceMeshDetector.onResults(getFaceMesh);

// const camera = new Camera(videoElement, {
//     onFrame: async () => {
//         await faceMesh.send({ image: videoElement });
//     },
//     width: WIDTH,
//     height: HEIGHT,
// });
// camera.start();
