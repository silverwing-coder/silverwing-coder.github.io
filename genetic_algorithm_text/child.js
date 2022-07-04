function newGene() {
    let c = Math.floor(Math.random() * (122 - 62) + 62); //character 63-122
    //   console.log(c);
    if (c === 62) {
        c = 32; // for "space" character
    }
    if (c === 63) {
        c = 33; // for "!" character
    }
    if (c === 64) {
        c = 46; // for "." character
    }
    return String.fromCharCode(c);
}

class Child {
    constructor(len_genes) {
        this.genes = [];
        this.fitness = 0;
        for (let i = 0; i < len_genes; i++) {
            this.genes[i] = newGene();
        }
    }

    calculate_fitness(target) {
        // console.log("genes:" + this.genes)
        // console.log("target:" + target)
        let score = 0;
        for (let i = 0; i < target.length; i++) {
            // console.log("genes:" + this.genes[i])
            // console.log("target:" + target[i])
            if (this.genes[i] == target[i]) {
                score++;
            }
        }
        // console.log("score : " + score);
        return score / target.length;
    }

    cross_over(partner) {
        let new_child = new Child(this.genes.length);
        let cross_point = Math.floor(Math.random() * this.genes.length);
        // let cross_point = Math.floor(this.genes.length / 2);

        for (let i = 0; i < this.genes.length; i++) {
            if (i < cross_point) {
                new_child.genes[i] = this.genes[i];
            } else {
                new_child.genes[i] = partner.genes[i];
            }
        }
        return new_child;
    }

    mutate(mut_rate) {
        for (let i = 0; i < this.genes.length; i++) {
            if (Math.random() < mut_rate) {
                this.genes[i] = newGene();
            }
        }
    }

    get_new_gene() {
        return newGene();
    }
    // get_string() {
    //     return this.genes.join("");
    // }
}
