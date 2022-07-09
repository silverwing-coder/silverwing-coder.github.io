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
