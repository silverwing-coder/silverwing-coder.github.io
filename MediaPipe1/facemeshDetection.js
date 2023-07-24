let detection = [];
// const videoElement = document.getElementsByClassName('input_video')[0];
// const videoElement = document.getElementById('video');

// const canvasElement = document.getElementsByClassName('output_canvas')[0];
// const canvasCtx = canvasElement.getContext('2d');

function getFaceMesh(results) {
  detection = results;
  // console.log(detection);
}

const faceMesh = new FaceMesh({locateFile: (file) => {
  return `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`;
}});

faceMesh.setOptions({
  maxNumFaces: 1,
  refineLandmarks: true,
  minDetectionConfidence: 0.5,
  minTrackingConfidence: 0.5
});

faceMesh.onResults(getFaceMesh);

// const camera = new Camera(videoElement, {
//   onFrame: async () => {
//     await faceMesh.send({image: videoElement});
//   },
//   width: WIDTH,
//   height: HEIGHT
// });
// camera.start();
