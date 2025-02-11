let video;
let model;
let faces = []

function preload() {
    // humanBodyPose = ml5.bodyPose();
    // model = ml5.faceMesh({flipped: true});
    model = ml5.faceMesh({flipped: false});
}

function getFaces(results) {
    // console.log(results)
    faces = results
    // console.log(faces)
}

function setup() {
    createCanvas(640, 480)
    video = createCapture(VIDEO, {flipped: true})
    // video = createCapture(VIDEO, {flipped: false})
    // video.hide()

    model.detectStart(video, getFaces)  // detectStart(imabe, call-back-function)
}

function draw() {
    background(100)
    // image(video, 0, 0)

    if(faces.length > 0) {
        for (let face of faces) {
            console.log(face)

            /* entire 483 keypoints */
            // for (let i=0; i < face.keypoints.length; i++){
            //     let keypoint = face.keypoints[i];
            //     fill(255, 255, 0)
            //     noStroke()
            //     circle(keypoint.x, keypoint.y, 2)
            // }

            /* left eye-brow */
            let lEyeBrow = face.leftEyebrow;
            for (let i=0; i < lEyeBrow.keypoints.length; i++){
                let keypoint = lEyeBrow.keypoints[i];
                fill(255, 255, 0)
                noStroke()
                circle(keypoint.x, keypoint.y, 3)
            }
                        
            /* lips */
            let lips = face.lips;
            for (let i=0; i < lips.keypoints.length; i++){
                let keypoint = lips.keypoints[i];
                fill(255, 0, 0)
                noStroke()
                circle(keypoint.x, keypoint.y, 5)
            }

            /* right eye */
            let rightEye = face.rightEye;
            for (let i=0; i < rightEye.keypoints.length; i++){
                let keypoint = rightEye.keypoints[i];
                fill(0, 255, 0)
                noStroke()
                circle(keypoint.x, keypoint.y, 3)
            }

            /* left eye */
            let leftEye = face.leftEye;
            for (let i=0; i < leftEye.keypoints.length; i++){
                let keypoint = leftEye.keypoints[i];
                fill(0, 255, 0)
                noStroke()
                circle(keypoint.x, keypoint.y, 3)
            }

        }
    }
}