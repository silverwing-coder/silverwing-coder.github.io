"use strict";

/** Variables */
let popsize = 20; // number of agents
let geneCount = 100; // number of gens in an agent
let geneIdx = 0; // index for force alighment
let lifeSpan = 3000; // lifespan of agent
let age = 0; // the current age of agent
let ageParagraph; // html object for <p>age</p>

let targethit = 0; // number of agents hit th target
let hitParagraph; // html object for <p>targethit</p>

let agents; // agents
let framerate = 60;

let target; // target dimension
let tx, ty, tw, th; // obstacle dimension
[tx, ty, tw, th] = [150, 150, 100, 10];

let slider;
// let frameRate;

function setup() {
    createCanvas(600, 400);
    agents = new Population();
    ageParagraph = createP();
    hitParagraph = createP();

    target = createVector(width / 2, 50);
    slider = createSlider(20, 60, 40, 10);
    slider.position(width / 4, height + 110);
    slider.size(width / 2, 20);
    // slider.sytle(width, 80px);
}

function draw() {
    background(200, 180, 10);
    frameRate(slider.value());

    fill(255);
    agents.run();
    ageParagraph.html("<h3>Age: " + age / 20 + "</h3>");
    hitParagraph.html("<h3>Target Hit: " + targethit + "</h3>");
    fill(0, 255, 255);
    ellipse(target.x, target.y, 50, 30);

    fill(255, 0, 0);
    rect(tx, ty, tw, th);

    if (age >= lifeSpan) {
        agents.evaluate();
        agents.selection();
        age = 0;
        targethit = 0;
    }
}
