class Box {
    constructor(x, y, w, h) {
        var options = {
            friction: 0.7,
            restitution: 0.7,
        };
        this.body = Bodies.rectangle(x, y, w, h, options);
        // this.body.friction = 1;
        this.w = w;
        this.h = h;
        this.color = [random(0, 255), random(0, 255), random(0, 255)];
        World.add(world, this.body);
    }

    show() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(1);
        stroke(255);
        fill(this.color[0], this.color[1], this.color[2]);
        rect(0, 0, this.w, this.h);
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

// function Box(x, y, w, h) {
//     this.body = Bodies.rectangle(x, y, w, h);
//     this.w = w;
//     this.h = h;
//     World.add(world, this.body);

//     this.show = function () {
//         var pos = this.body.position;
//         var angle = this.body.angle;

//         push();
//         translate(pos.x, pos.y);
//         rect(0, 0, this.w, this.h);
//         pop();
//     };
// }
