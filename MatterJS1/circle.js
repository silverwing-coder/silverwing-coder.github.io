class Circle {
    constructor(x, y, r) {
        // console.log("circle created");
        var options = {
            friction: 0,
            restitution: 0.7,
        };
        this.body = Bodies.circle(x, y, r, options);
        // this.body.friction = 1;
        this.r = r;

        this.color = [random(0, 255), random(0, 255), random(0, 255)];
        World.add(world, this.body);
    }

    show() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(1);
        stroke(255);
        fill(this.color[0], this.color[1], this.color[2]);
        ellipse(0, 0, 2 * this.r, 2 * this.r);
        pop();
    }

    isOffScreen() {
        var pos = this.body.position;
        if (pos.y > height + 50) {
            return true;
        } else {
            return false;
        }
    }

    removeFromWorld() {
        World.remove(world, this.body);
    }
}
