class Snake {
  constructor(_size) {
    this.xspd = 1;
    this.yspd = 0;
    this.size = _size;
    this.total = 2;
    this.body = [];
    this.body[0] = createVector(1 * this.size, 0);
    this.body[1] = createVector(0 * this.size, 0);
  }
  setDirection(_xspd, _yspd) {
    this.xspd = _xspd;
    this.yspd = _yspd;
  }
  eatFood(foods) {
    let d;
    for (var i = 0; i < foods.length; i++) {
      d = dist(foods[i].x, foods[i].y, this.body[0].x, this.body[0].y);
      if (d < 5) {
        foods.splice(i, 1);
        this.body.push(createVector(0, 0));
      }
    }
  }

  update() {
    var tx = this.body[1].x;
    var ty = this.body[1].y;
    for (var i = 1; i < this.body.length; i++) {
      this.body[this.body.length - i].x = this.body[this.body.length - i - 1].x;
      this.body[this.body.length - i].y = this.body[this.body.length - i - 1].y;
    }
    if (this.body[0].x <= 0 || this.body[0].x >= width - size) {
      if (this.body[0].x != tx) {
        if (this.body[0].y > Math.floor(height / 2)) {
          this.setDirection(0, -1);
        } else {
          this.setDirection(0, 1);
        }
      }
    }
    if (this.body[0].y <= 0 || this.body[0].y >= height - size) {
      //      console.log("Ty : "+ ty);
      if (this.body[0].y != ty) {
        if (this.body[0].x > Math.floor(height / 2)) {
          this.setDirection(-1, 0);
        } else {
          this.setDirection(1, 0);
        }
      }
    }
    this.body[0].x += this.xspd * this.size;
    this.body[0].y += this.yspd * this.size;
  }
  show() {
    fill(255, 255, 0);
    for (var i = 1; i < this.body.length; i++) {
      rect(this.body[i].x, this.body[i].y, this.size - 1, this.size - 1);
    }
    fill(255, 0, 0);
    if (this.xspd === 1) {
      arc(
        this.body[0].x + 10,
        this.body[0].y + 10,
        this.size + 1,
        this.size + 1,
        PI / 4,
        (PI * 7) / 4
      );
    }
    if (this.xspd === -1) {
      arc(
        this.body[0].x + 10,
        this.body[0].y + 10,
        this.size + 1,
        this.size + 1,
        (PI * 5) / 4,
        (PI * 3) / 4
      );
    }
    if (this.yspd === -1) {
      arc(
        this.body[0].x + 10,
        this.body[0].y + 10,
        this.size + 1,
        this.size + 1,
        (PI * 7) / 4,
        (PI * 5) / 4
      );
    }
    if (this.yspd === 1) {
      arc(
        this.body[0].x + 10,
        this.body[0].y + 10,
        this.size + 1,
        this.size + 1,
        (PI * 3) / 4,
        PI / 4
      );
    }
    //    arc(this.body[0].x+10, this.body[0].y+10, this.size+1, this.size+1)
    //    ellipse(this.body[0].x+10, this.body[0].y+10, this.size+1, this.size+1);
    //    this.polygon(this.body[0].x+10, this.body[0].y+10, this.size-9, 7);
  }
  polygon(x, y, radius, npoints) {
    let angle = TWO_PI / npoints;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius;
      let sy = y + sin(a) * radius;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }
}

class Food {
  constructor(_x, _y, _size) {
    this.x = _x;
    this.y = _y;
    this.size = _size;
  }
  show() {
    fill(0, 255, 0);
    rect(this.x, this.y, this.size, this.size);
  }
}
