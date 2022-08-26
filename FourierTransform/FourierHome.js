// "use strict";
const frmheight = 120;
let time = 0;
let wave = []; // array for saving y values

let xa;
let ya;

const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth - 40;
canvas.height = frmheight;
// console.log(canvas.width);

let ctx = canvas.getContext("2d");

function init() {
    // ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.rect(0, 0, canvas.width - 40, canvas.height);
    ctx.fill();
    ctx.translate(canvas.width * 0.1, 70);
}

// window.addEventListener("resize", function (event) {
//     canvas.width = window.innerWidth - 40;
//     canvas.height = frmheight;
//     init();
// });

function animate() {
    requestAnimationFrame(animate);
    // ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawPendulm();

    // let xa = 0;
    // let ya = 0;

    // // for (let i = 0; i < slider.value(); i++) {
    // ctx.beginPath();
    // ctx.translate(innerWidth * 0.1, 70);
    // // ctx.save();
    // for (let i = 0; i < 3; i++) {
    //     let prevx = xa;
    //     let prevy = ya;

    //     let n = i * 2 + 1; // for setting the radius of circles(length of pendulum shaft)
    //     let radius;

    //     radius = 20 * (5 / (n * Math.PI));
    //     ya += radius * Math.sin(n * time);
    //     xa += radius * Math.cos(n * time);
    //     // ctx.save()
    //     ctx.strokeStyle = "white";
    //     ctx.arc(prevx, prevy, radius, 0, 2 * Math.PI, false);
    //     // ctx.stroke()
    //     // ctx.restore()

    //     // ctx.strokeStyle = "green";
    //     ctx.moveTo(prevx, prevy);
    //     ctx.lineTo(prevx, prevy, xa, ya);
    //     // ctx.stroke()
    //     // ctx.restore();
    // }
    // ctx.stroke()
    // ctx.restore();
    // wave.unshift(ya);

    // ctx.translate(100, 0);
    // ctx.moveTo(xa - 100, ya);
    // ctx.lineTo(0, wave[0]);

    // ctx.beginShape();
    // noFill();
    // stroke(255, 0, 0);
    // for (let i = 0; i < wave.length; i++) {
    //     // vertex(i, wave[i]);
    //     ctx.moveTo(i, wave[i]);
    //     ctx.fillRect(i, wave[i], 1, 1);
    // }

    // ctx.endShape();
    // fill(255);
    // noStroke();
    // text(`Pendulums: ${slider.value()}`, -100, wave[0] - ya + 100);
    // text("test", -100, wave[0]);
    // console.log(slider.value());
    time += 0.03;
    if (wave.length > 370) {
        wave.pop();
    }
    // console.log(time);
    ctx.stroke();

    // ctx.restore();
    // ctx.endPath();
    // requestAnimationFrame(animate);
}

function drawPendulm() {
    ctx.translate(-canvas.width * 0.1, -70);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    init();
    xa = 0;
    ya = 0;
    ctx.beginPath();
    // ctx.fillStyle = "black"
    // ctx.moveTo(innerWidth * 0.1, 70)
    // ctx.translate(innerWidth * 0.1, 70);
    // ctx.save();
    for (let i = 0; i < 3; i++) {
        let prevx = xa;
        let prevy = ya;

        let n = i * 2 + 1; // for setting the radius of circles(length of pendulum shaft)
        let radius;

        radius = 20 * (5 / (n * Math.PI));
        ya += radius * Math.sin(n * time);
        xa += radius * Math.cos(n * time);

        ctx.strokeStyle = "white";
        ctx.arc(prevx, prevy, radius, 0, 2 * Math.PI, false);
        ctx.moveTo(prevx, prevy);
        ctx.lineTo(prevx, prevy, xa, ya);
        // ctx.fill();

        // ctx.beginPath();
        ctx.fillStyle = "yellow";
        ctx.arc(xa, ya, 3, 0, 2 * Math.PI, false);
        ctx.fill('nonzero');
        // ctx.restore();
        // ctx.stroke()
        // ctx.restore()

        // ctx.strokeStyle = "green";
        // ctx.stroke()
        // ctx.restore();
    }
}

init();
animate();
