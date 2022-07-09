class Agent {
    constructor(px = 0, py = 0, dna) {
        this.pos = createVector(px, py);
        this.vel = createVector();
        this.acc = createVector();
        // this.fitness = 0;
        this.completed = false;
        // this.crashed = false;
        if (dna) {
            this.dna = dna;
        } else {
            this.dna = new DNA();
        }
    }

    applyForce(force) {
        this.acc.add(force);
    }

    calculateFitness() {
        let dst = dist(this.pos.x, this.pos.y, target.x, target.y);
        // console.log(dst);
        // this.fitness = 1 / dst;
        this.fitness = map(dst, 0, width, width, 0) * 10;
        // console.log(this.fitness)
        if (this.completed) {
            // let time = (lifeSpan-age)/lifeSpan
            this.fitness = this.fitness * 5 + (lifeSpan - age) * 50;
        }
    }

    update() {
        let dst = dist(this.pos.x, this.pos.y, target.x, target.y);
        if (dst < 20) {
            if (!this.completed) {
                targethit++;
            }
            this.completed = true;
            this.fitness *= 10;
            this.pos = target.copy();
        }

        /** If an agent reaches to the obstacle, it is crashed*/
        if (
            this.pos.x > tx &&
            this.pos.x < tx + tw &&
            this.pos.y > ty &&
            this.pos.y < ty + th
        ) {
            this.fitness = 0;
            // this.applyForce([0, 0]);
            // this.acc.mult(0);
            // this.vel.mult(0);
            this.vel.mult(-0.5);
        }

        /** If an agent reaches to a border, it is crashed*/
        if (
            this.pos.x < 0 ||
            this.pos.x > width ||
            this.pos.y > height ||
            this.pos.y < 0
        ) {
            // this.fitness = 0;
            this.vel.mult(-0.5);
        }

        // if (this.crashed) {
        //     this.fitness = 0;
        //     this.vel.mult(0);
        // }

        let geneId = floor(geneIdx / popsize);
        this.applyForce(this.dna.genes[geneId]);
        // console.log(this.dna.genes[geneId]);
        geneIdx++;
        age++;

        if (geneIdx >= geneCount * popsize) {
            geneIdx = 0;
        }

        if (!this.completed) {
            this.vel.add(this.acc);
            this.pos.add(this.vel);
            this.acc.mult(0);
        }
    }

    show() {
        if (!this.completed) {
            push();
            translate(this.pos.x, this.pos.y);
            rotate(this.vel.heading());
            fill(0, 255, 0);
            // nostroke()
            beginShape(TRIANGLES);
            vertex(10, 0);
            vertex(-20, 5);
            vertex(-20, -5);
            endShape();
            stroke(255, 0, 255);
            line(0, 0, 10, 0);
            // rectMode(CENTER);
            // rect(0, 0, 20, 5);
            pop();
        }
    }
}
