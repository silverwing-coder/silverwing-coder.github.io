"use strict";

let theta;
let trees = [120, 30, 60];
let slider;
let wind; // = 10;
let count = 0;
let angle;
let canvas;

function setup() {
    canvas = createCanvas(800, 400);
    canvas.parent("canvas-parent");
    canvas.id("my-canvas");

    slider = createSlider(-20, 20, 0);
    slider.parent("input-parent");
    slider.id("my-slider");
    // console.log(canvas);
}

function draw() {
    wind = slider.value();
    background(50);

    stroke(0, 255, 255, 255 - (angle + 100));

    angle = count % 180;
    theta = radians(angle);

    translate(width / 3, height);
    // console.log(trees.length);
    // line(0, 0, 0, -trees[0]);
    // translate(0, -trees[0]);
    // branch(trees[0]);
    for (let i = 0; i < trees.length; i++) {
        // console.log(trees[i]);
        line(0, 0, wind, -trees[i]);
        translate(wind, -trees[i]);
        branch(trees[i]);
        translate(0 + 100, trees[i]);
    }
    count++;
    if (count > 1800) {
        count = 0;
    }
}

function branch(h) {
    h = h * 0.66;

    stroke(0, 255, 255, 255 - (angle + 50));
    if (h > 3) {
        push();
        rotate(theta);
        line(0, 0, wind, -h);
        translate(wind, -h);
        noStroke();
        // fill(255, 0, 255, 255 - (angle + 50));
        // ellipse(0, 0, 10);
        branch(h);
        pop();

        push();
        rotate(-theta);
        line(0, 0, wind, -h);
        translate(wind, -h);
        noStroke();
        fill(255, 255, 0, 255 - (angle + 50));
        ellipse(0, 0, 10);
        branch(h);
        pop();
    }
}
