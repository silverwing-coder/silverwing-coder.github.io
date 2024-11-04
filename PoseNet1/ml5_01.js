/*  -- Pose Detection --
1. Input(image) -> Pose Detection(model) -> Output(x, y, (z) coordinates and confidence level)
2. Pre-trained models for body pose detection produces
    A. MoveNet model: 17 points
    B. BlazePose model: 33 points  
3. Datasets
    A. ImageNet dataset
    B. COCO dataset
*/

let CONFIDENCE_LEVEL = 0.15
let video;
let poseMOdel;          // pre-trained model
let poseObject = []
let connections 


function preload() {
    poseModel = ml5.bodyPose("MoveNet", {flipped: true});       // model selection
    // poseModel = ml5.bodyPose("BlazePose", {flipped: true});
}

function getPoses(results) {
    // console.log(results)
    poseObject = results
}

function mousePressed() {
    console.log(poseObject)
    // console.log(poses.length)
    // console.log(poses[0].keypoints)
}

function setup() {
    createCanvas(640, 480);
    // background(0)
    video = createCapture(VIDEO, {flipped: true});
    video.hide();
    
    poseModel.detectStart(video, getPoses)
    connections = poseModel.getSkeleton()
    // console.log(connections)
}

function draw() {
    image(video, 0, 0);
    // console.log(poses[0])
    // console.log(poses.length)

    /** Draw keypoints*/
    if (poseObject.length > 0) {
        let pose = poseObject[0];
        let x = pose.nose.x
        let y = pose.nose.y
        fill(255, 0, 0)
        circle(x, y, 20)

        /** Draw keypoints if confidenece > 0.2     */
        for (let i=0; i<pose.keypoints.length; i++) {
            let keypoint = pose.keypoints[i]
            if (keypoint.confidence > CONFIDENCE_LEVEL) {
                noStroke()
                fill(0, 255, 255)
                circle(keypoint.x, keypoint.y, 10)
           }
        }

        /** Draw connections if kepoint confidence  > 0.2   */
        for(let j=0; j < connections.length; j++){
            let connection = connections[j]
            let keyA = connection[0]
            let keyB = connection[1]
            let keyPointA = pose.keypoints[keyA]
            let keyPointB = pose.keypoints[keyB]
            
            if(keyPointA.confidence > CONFIDENCE_LEVEL 
                && keyPointB.confidence > CONFIDENCE_LEVEL) {
                stroke(255, 255, 255)
                strokeWeight(3)
                line(keyPointA.x, keyPointA.y, keyPointB.x, keyPointB.y)
            }
        }
    }
}



// // console.log("ml5 version:", ml5.version);
// let video;
// let poseNet;
// let pose;
// let skeleton;

// function modelLoaded() {
//     // console.log("poseNet ready");
// }

// function gotPoses(poses) {
//     // console.log(poses);
//     if (poses.length > 0) {
//         pose = poses[0].pose;
//         skeleton = poses[0].skeleton;
//     }
// }

// function setup() {
//     createCanvas(640, 480);
//     video = createCapture(VIDEO);
//     video.hide();

//     poseNet = ml5.poseNet(video, modelLoaded);
//     poseNet.on("pose", gotPoses);
// }

// function draw() {
//     translate(video.width, 0);
//     scale(-1, 1);
//     image(video, 0, 0);

//     // console.log(pose);
//     // let skeleton = pose.skeleton;
//     // console.log(skeleton);

//     if (pose) {
//         /** draw eye glass */
//         let eyeL = pose.leftEye;
//         let eyeR = pose.rightEye;
//         let earL = pose.leftEar;
//         let earR = pose.rightEar;
//         // let dist = (eyeL.x - eyeR.x)^2 + (eyeL.x - eyeR.x)^2;
//         let dist = (eyeL.x - eyeR.x) ^ 2;
//         size = sqrt(dist) * 6;
//         fill(0, 0, 255, 70);
//         stroke(255, 0, 0);
//         ellipse(eyeL.x, eyeL.y, size);
//         ellipse(eyeR.x, eyeR.y, size);
//         strokeWeight(3);
//         line(eyeL.x + size / 2, eyeL.y, earL.x, earL.y - 10);
//         line(eyeR.x - size / 2, eyeR.y, earR.x, earR.y - 10);
//         line(eyeR.x + size / 2, eyeR.y - 10, eyeL.x - size / 2, eyeL.y - 10);

//         /** draw pose */
//         fill(255);
//         for (let i = 5; i < pose.keypoints.length; i++) {
//             ellipse(
//                 pose.keypoints[i].position.x,
//                 pose.keypoints[i].position.y,
//                 10
//             );
//         }

//         stroke(255, 255, 255);
//         // console.log(skeleton);
//         for (let j = 0; j < skeleton.length; j++) {
//             line(
//                 skeleton[j][0].position.x,
//                 skeleton[j][0].position.y,
//                 skeleton[j][1].position.x,
//                 skeleton[j][1].position.y
//             );
//         }
//     }
// }

// function recievedPoses(poses) {
//     console.log(poses);
//     if (poses.length > 0) {
//         singlePose = poses[0].pose;
//         skeleton = poses[0].skeleton;
//     }
// }
