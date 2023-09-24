var Engine = Matter.Engine;
var Render = Matter.Render;
var World = Matter.World;
var Bodies = Matter.Bodies;

var engine;
var world;
// var box1;
var boxes = [];
var circles = [];
var boundaries = [];
// var ground;

function setup() {
    createCanvas(640, 480);
    engine = Engine.create();
    world = engine.world;
    // box1 = Bodies.rectangle(200, 200, 80, 80);
    // Engine.run(engine);
    Matter.Runner.run(engine);
    // World.add(world, box1);
    // console.log(box);
    // box1 = new Box(200, 100, 50, 50);
    // var option = {
    //     isStatic: true,
    // };
    // ground = Bodies.rectangle(200, height - 50, width, 30, option);
    // ground = new Boundary(200, height - 50, width, 30);
    boundaries.push(new Boundary(250, height - 100, 450, 20, 0.3));
    boundaries.push(new Boundary(350, height - 250, 250, 20, -0.3));
    // World.add(world, ground);
}

function draw() {
    background(50);
    // rect(box1.position.x, box1.position.y, 80, 80);
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].show();
        if (boxes[i].isOffScreen()) {
            boxes[i].removeFromWorld();
            boxes.splice(i, 1);
            i--;
        }
    }
    for (let i = 0; i < circles.length; i++) {
        circles[i].show();
        if (circles[i].isOffScreen()) {
            circles[i].removeFromWorld();
            circles.splice(i, 1);
            i--;
        }
    }
    // console.log(circles.length);

    for (let i = 0; i < boundaries.length; i++) {
        boundaries[i].show();
    }

    console.log("circles.length: ", circles.length);
    console.log("circles in world: ", world.bodies.length);
}

function mousePressed() {
    boxes.push(new Box(mouseX, mouseY, random(10, 40), random(10, 40)));
}

function mouseDragged() {
    circles.push(new Circle(mouseX, mouseY, random(5, 10)));
}
