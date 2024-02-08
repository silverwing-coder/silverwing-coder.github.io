const FRAME_WIDTH = 1200,
    FRAME_HEIGHT = 130;
const MAX_FONT_SIZE = 40;
let canvas; // canvas object
let count = 0;

let time = 0;
let num_pendulms = 5;
let wave = []; // array for saving y values to draw

let wavetype = -1; // 1-square wave

function preload() {}

function setup() {
    // window.onload = () => {
    canvas = createCanvas(FRAME_WIDTH, FRAME_HEIGHT);
    canvas.parent("header_animation");
    canvas.id("header_canvas");
    // }
}

function draw() {
    // console.log("test");
    background(50);
    translate(500, 75);

    let xa = 0;
    let ya = 0;

    for (let i = 0; i < num_pendulms; i++) {
        let prevx = xa;
        let prevy = ya;

        let n = i * 2 + 1; // for setting the radius of circles(length of pendulum shaft)
        let radius;
        if (wavetype == 1) {
            // square wave
            radius = 30 * (5 / (n * PI));
            ya += radius * sin(n * time);
            xa += radius * cos(n * time);
        } else if (wavetype == -1) {
            // pulse wave
            radius = 20 * (-1) ** i * (2 / PI);
            ya += radius * cos((i + 1) * time);
            xa += (radius * sin((i + 1) * time)) / (i + 1);
        }

        stroke(255);
        strokeWeight(1);
        noFill();
        ellipse(prevx, prevy, radius * 2);
        stroke(255, 255, 0);
        fill(255);
        ellipse(xa, ya, 5);
        line(prevx, prevy, xa, ya);
    }
    wave.unshift(ya);
    // wave.push(ya);

    translate(120, 0);
    strokeWeight(1);
    stroke(0, 255, 0, 95);
    line(xa - 120, ya, 0, wave[0]);
    beginShape();
    noFill();
    stroke(0, 255, 255);
    strokeWeight(1);
    for (let i = 0; i < wave.length; i++) {
        vertex(i, wave[i]);
    }
    endShape();

    fill(200, 255, 0);
    noStroke();
    textSize(12);
    if (wavetype == 1) {
        text("square wave", -70, wave[0]);
    } else if (wavetype == -1) {
        text("pulse wave", -70, wave[0]);
    }

    translate(-620, -100);
    fill(255 - mouseX / 5, 255 - mouseY / 2, 255 - mouseY / 5);
    // if()
    textSize(30 + mouseX * 0.01);
    text("SILVER-WING-CODER's BASE", 20, 80);
    fill(200, 200, 255);
    textSize(12);
    text(
        "                                 __|__\n               __|__      *---o0o---*\
       __|__\n            *---o0o---*                      *---o0o---*",
        20,
        95
    );

    if (time > 50) {
        wavetype *= -1;
        time = 0;
    }
    time += 0.03;
    if (wave.length > 600) {
        wave.pop();
        // wavetype *= -1;
    }
}
