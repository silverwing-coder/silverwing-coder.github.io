"use strict";

let time = 0;
let wave = []; // array for saving y values
let canvas;
let slider;
let btn_pulse;
let btn_square;
let btn_skew;
let wavetype = 2; // 1-square wave,  2-impulse

function setup() {
    canvas = createCanvas(700, 400);
    canvas.parent("canvas-parent");
    canvas.id("canvas-1");

    btn_pulse = createButton("PULSE WAVE");
    btn_pulse.parent("button-parent");
    btn_pulse.style(
        "width:150px; height:40px; background: lightgreen; margin-left: 5px; padding: 5px;"
    );
    btn_pulse.mouseClicked(() => (wavetype = 2));

    btn_square = createButton("SQUARE WAVE");
    btn_square.parent("button-parent");
    btn_square.style(
        "width:150px; height:40px; background: lightgreen;  margin-left: 50px; padding: 5px;;"
    );
    btn_square.mouseClicked(() => (wavetype = 1));

    btn_skew = createButton("SKEWED WAVE");
    btn_skew.parent("button-parent");
    btn_skew.style(
        "width:150px; height:40px; background: lightgreen;  margin-left: 50px; padding: 5px;;"
    );
    btn_skew.mouseClicked(() => (wavetype = 3));

    slider = createSlider(1, 10, 5); // number of pendulums
    slider.parent("input-parent");
    slider.style("width:300px; ");
}

function draw() {
    background(0);
    translate(150, 250);

    let xa = 0;
    let ya = 0;

    for (let i = 0; i < slider.value(); i++) {
        let prevx = xa;
        let prevy = ya;

        let n = i * 2 + 1; // for setting the radius of circles(length of pendulum shaft)
        let radius;
        if (wavetype == 1) {
            // square wave
            radius = 50 * (5 / (n * PI));
            ya += radius * sin(n * time);
            xa += radius * cos(n * time);
        } else if (wavetype == 2) {
            // pulse wave
            radius = 30 * (-1) ** i * (2 / PI);
            ya += radius * cos((i + 1) * time);
            xa += (radius * sin((i + 1) * time)) / (i + 1);
        } else if (wavetype == 3) {
            radius = 50 * (5 / (n * PI));
            ya += radius * sin((i + 1) * time) * (-1) ** i;
            xa += radius * cos((i + 1) * time) * (-1) ** i;
        }
        stroke(255, 100);
        noFill();
        ellipse(prevx, prevy, radius * 2);
        stroke(255, 255, 0);
        fill(255);
        ellipse(xa, ya, 5);
        line(prevx, prevy, xa, ya);
    }
    wave.unshift(ya);
    // wave.push(ya);

    translate(200, 0);
    stroke(0, 255, 0);
    line(xa - 200, ya, 0, wave[0]);
    beginShape();
    noFill();
    stroke(255, 0, 0);
    for (let i = 0; i < wave.length; i++) {
        vertex(i, wave[i]);
    }
    endShape();
    fill(255);
    noStroke();
    text(`Pendulums: ${slider.value()}`, -100, wave[0] - ya + 100);
    // text("test", -100, wave[0]);
    // console.log(slider.value());
    time += 0.03;
    if (wave.length > 350) {
        wave.pop();
    }
}
