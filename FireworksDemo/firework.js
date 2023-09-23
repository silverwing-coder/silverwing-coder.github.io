let winWidth = 600;
let winHeight = 600;
let fireballs = [];
let debris = [];

function setup() {
    gravity = createVector(0, 0.1);
    // colorMode(HSB);
    createCanvas(winWidth, winHeight);
    // background(0);
}

function draw() {
    colorMode(RGB);
    background(0, 0, 0, 100);
    if (random(1) < 0.015) {
        fireballs.push(
            new Particle(random(0, winWidth), winHeight, 3, false, random(255))
        );
        // fireballs.push(new Particle(random(0, winWidth), winHeight, 3, 0));
    }

    for (let i = fireballs.length - 1; i >= 0; i--) {
        if (fireballs[i].velocity.y >= 0) {
            for (let j = 0; j < 120; j++) {
                debris.push(
                    new Particle(
                        fireballs[i].position.x,
                        fireballs[i].position.y,
                        1,
                        true,
                        random(255)
                    )
                );
                // debris[j].velocity = p5.Vector.random2D();
            }
            fireballs.splice(i, 1); // remove fireball element
        } else {
            fireballs[i].applyForce(gravity);
            fireballs[i].update();
            fireballs[i].show();
        }
        // console.log(debris.length);
    }

    // console.log(fireballs.length);

    for (let i = debris.length - 1; i >= 0; i--) {
        // explosion_force = createVector(0, 0.1);
        explosion_force = gravity;
        if (debris[i].lifetime <= 10) {
            debris.splice(i, 1);
        } else {
            debris[i].applyForce(explosion_force);
            debris[i].update();
            debris[i].show();
        }
    }
    // console.log(fireballs.length);
}

// class Particle {
//     constructor(x, y, radius, debris, hu) {
//         this.position = createVector(x, y);
//         if (debris) {
//             this.velocity = p5.Vector.random2D();
//             this.velocity.mult(random(1, 6));
//         } else {
//             this.velocity = createVector(0, random(-10, -8));
//         }
//         this.accleration = createVector(0, 0);
//         this.radius = radius;
//         this.lifetime = 255;
//         this.debris = debris;
//         this.hu_Value = hu;
//     }

//     applyForce(force) {
//         this.accleration.add(force);
//     }

//     show() {
//         colorMode(HSB);
//         if (this.debris) {
//             stroke(this.hu_Value, 255, 255, this.lifetime);
//             strokeWeight(3);
//             fill(255, this.lifetime);
//             ellipse(this.position.x, this.position.y, this.radius);
//         } else {
//             stroke(this.hu_Value, 255, 255);
//             strokeWeight(4);
//             fill(255);
//             ellipse(this.position.x, this.position.y, this.radius);
//         }
//         // this.lifetime -= this.lifetime;
//     }

//     update() {
//         this.lifetime -= random(0, 5);
//         this.velocity.add(this.accleration);
//         if (this.debris) {
//             this.velocity.mult(0.97);
//         }
//         this.position.add(this.velocity);
//         this.accleration.mult(0);
//     }
// }
