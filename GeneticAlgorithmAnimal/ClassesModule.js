class DNA {
    constructor(genes) {
        if (genes) {
            this.genes = genes;
        } else {
            this.genes = [];
            for (let i = 0; i < geneCount; i++) {
                this.genes[i] = p5.Vector.random2D();
                // this.genes[i].setMag(0.5);
            }
        }
    }

    crossOver(partnerDna) {
        let newGenes = [];
        let midPoint = floor(random(this.genes.length));
        // console.log(this.genes.length);
        // console.log(midPoint);
        for (let i = 0; i < this.genes.length; i++) {
            if (i > midPoint) {
                newGenes[i] = this.genes[i];
            } else {
                newGenes[i] = partnerDna.genes[i];
            }
        }
        // console.log(newGenes.length)
        return new DNA(newGenes);
    }

    mutation() {
        for (let i = 0; i < this.genes.length; i++) {
            if (random(1) < 0.01) {
                this.genes[i] = p5.Vector.random2D();
                this.genes[i].setMag(0.1);
            }
        }
    }
}

class Rocket {
    constructor(px = 0, py = 0, dna) {
        this.pos = createVector(px, py);
        // this.vel = createVector(vx, vy);
        // this.vel = p5.Vector.random2D();
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
        this.fitness = map(dst, 0, width, width, 0);
        // console.log(this.fitness)
        if (this.completed) {
            // let time = (lifeSpan-age)/lifeSpan
            this.fitness = this.fitness * 5 + (lifeSpan - age) * 30;
        }
    }

    update() {
        let dst = dist(this.pos.x, this.pos.y, target.x, target.y);
        if (dst < 10) {
            this.completed = true;
            this.fitness *= 10
            this.pos = target.copy();
        }

        /** If an agent reaches to the obstacle, it is crashed*/
        if (
            this.pos.x > rx &&
            this.pos.x < rx + rw &&
            this.pos.y > ry &&
            this.pos.y < ry + rh
        ) {
            this.fitness = 0;
            this.applyForce([0,0])
            this.acc.mult(0)
            this.vel.mult(0);
        }

        /** If an agent reaches to a border, it is crashed*/
        if (
            this.pos.x < 0 ||
            this.pos.x > width ||
            this.pos.y > height ||
            this.pos.y < 0
        ) {
            // this.fitness = 0;
            this.vel.mult(0);
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
        push();
        translate(this.pos.x, this.pos.y);
        rotate(this.vel.heading());
        rectMode(CENTER);
        rect(0, 0, 20, 5);
        pop();
    }
}

class Population {
    constructor() {
        this.matingpool = [];
        this.rockets = [];
        for (let i = 0; i < popsize; i++) {
            this.rockets[i] = new Rocket(width / 2, height);
        }
    }

    /** Develop a matingpool for pull-based selection algorithm implementation.
     *  The agents having higher fitness value will have higher chance to enter
     *  into the matingpool.
     */
    evaluate() {
        let maxFit = 0;
        for (let i = 0; i < popsize; i++) {
            this.rockets[i].calculateFitness();
            // console.log(this.rockets[i].fitness)
            if (this.rockets[i].fitness > maxFit) {
                maxFit = this.rockets[i].fitness;
            }
        }

        // console.log(this.rockets);
        // createP(maxFit);

        /** Normalize each rocket's fitness value: 0 ~ 1 */
        for (let i = 0; i < popsize; i++) {
            this.rockets[i].fitness /= maxFit;
            // console.log(this.rockets[i].fitness);
        }

        /** Setup matingpool: Take a number of agents proportional to each agent's
         * fitness value,  and stores the agents in matingpool */
        for (let i = 0; i < popsize; i++) {
            let n = this.rockets[i].fitness * 100;
            for (let j = 0; j < n; j++) {
                this.matingpool.push(this.rockets[i]);
            }
        }
    }

    /** Select two parent agents(rockets) from matingpool and produce a new child agent.
     *  Two operations are executed.
     *    1) Cross over: Child agent inherits genes form parent's DNA
     *    2) Mutation: Represents gene mutation
     */
    selection() {
        // console.log(this.matingpool.length);
        let newRockets = [];
        for (let i = 0; i < this.rockets.length; i++) {
            let parentAdna = random(this.matingpool).dna;
            let parentBdna = random(this.matingpool).dna;
            let childDna = parentAdna.crossOver(parentBdna);
            childDna.mutation();
            newRockets[i] = new Rocket(width / 2, height, childDna);
        }
        this.rockets = newRockets;
        this.matingpool.length = 0;
    }

    run() {
        for (let i = 0; i < popsize; i++) {
            this.rockets[i].update();
            this.rockets[i].show();
        }
    }
}
