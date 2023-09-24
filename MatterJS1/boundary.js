class Boundary {
    constructor(x, y, w, h, a) {
        var options = {
            friction: 0.3,
            restitution: 0.7,
            angle: a,
            isStatic: true,
        };
        this.w = w;
        this.h = h;
        this.body = Bodies.rectangle(x, y, w, h, options);
        // this.body.friction = 1;
        // this.body.angle = PI / 6;
        // this.color = [random(0, 255), random(0, 255), random(0, 255)];
        World.add(world, this.body);
    }

    show() {
        var pos = this.body.position;
        var angle = this.body.angle;

        rectMode(CENTER)
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(1);
        stroke(255);
        fill(100);
        rect(0, 0, this.w, this.h);
        pop();
    }
}
