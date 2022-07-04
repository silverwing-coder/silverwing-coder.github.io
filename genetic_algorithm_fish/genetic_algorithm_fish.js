let popsize = 20;
let geneCount = 100;
let geneIdx = 0;
let lifeSpan = 2000;
let age = 0;
let ageParagraph;

let rockets;
let target;

[rx, ry, rw, rh] = [150, 150, 100, 10]

function setup() {
    createCanvas(400, 300);
    rockets = new Population();
    ageParagraph = createP();

    target = createVector(width / 2, 50);
    ellipse(target.x, target.y, 50, 50);
}

function draw() {
    background(200);
    fill(255);
    rockets.run();
    ageParagraph.html(age);
    fill(255, 100, 0);
    ellipse(target.x, target.y, 20, 20);

    fill(255)
    rect(rx, ry, rw, rh)

    if (age >= lifeSpan) {
        rockets.evaluate();
        rockets.selection();
        age = 0;
    }
}
