class Particle {
    constructor(x, y, radius, debris, hu) {
        this.position = createVector(x, y);
        if (debris) {
            this.velocity = p5.Vector.random2D();
            this.velocity.mult(random(1, 6));
        } else {
            this.velocity = createVector(0, random(-10, -8));
        }
        this.accleration = createVector(0, 0);
        this.radius = radius;
        this.lifetime = 255;
        this.debris = debris;
        this.hu_Value = hu;
    }

    applyForce(force) {
        this.accleration.add(force);
    }

    show() {
        colorMode(HSB);
        if (this.debris) {
            stroke(this.hu_Value, 255, 255, this.lifetime);
            strokeWeight(3);
            fill(255, this.lifetime);
            ellipse(this.position.x, this.position.y, this.radius);
        } else {
            stroke(this.hu_Value, 255, 255);
            strokeWeight(4);
            fill(255);
            ellipse(this.position.x, this.position.y, this.radius);
        }
        // this.lifetime -= this.lifetime;
    }

    update() {
        this.lifetime -= random(0, 5);
        this.velocity.add(this.accleration);
        if (this.debris) {
            this.velocity.mult(0.97);
        }
        this.position.add(this.velocity);
        this.accleration.mult(0);
    }
}
