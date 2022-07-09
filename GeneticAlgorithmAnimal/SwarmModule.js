class Population {
    constructor() {
        this.matingpool = [];
        this.agents = [];
        for (let i = 0; i < popsize; i++) {
            this.agents[i] = new Agent(width / 2, height);
        }
    }

    /** Develop a matingpool for pull-based selection algorithm implementation.
     *  The agents having higher fitness value will have higher chance to enter
     *  into the matingpool.
     */
    evaluate() {
        let maxFit = 0;
        for (let i = 0; i < popsize; i++) {
            this.agents[i].calculateFitness();
            // console.log(this.agents[i].fitness)
            if (this.agents[i].fitness > maxFit) {
                maxFit = this.agents[i].fitness;
            }
        }

        // console.log(this.agents);
        // createP(maxFit);

        /** Normalize each agent's fitness value: 0 ~ 1 */
        for (let i = 0; i < popsize; i++) {
            this.agents[i].fitness /= maxFit;
            // console.log(this.agents[i].fitness);
        }

        /** Setup matingpool: Take a number of agents proportional to each agent's
         * fitness value,  and stores the agents in matingpool */
        for (let i = 0; i < popsize; i++) {
            let n = this.agents[i].fitness * 100;
            for (let j = 0; j < n; j++) {
                this.matingpool.push(this.agents[i]);
            }
        }
    }

    /** Select two parent agents(agents) from matingpool and produce a new child agent.
     *  Two operations are executed.
     *    1) Cross over: Child agent inherits genes form parent's DNA
     *    2) Mutation: Represents gene mutation
     */
    selection() {
        // console.log(this.matingpool.length);
        let newAgents = [];
        for (let i = 0; i < this.agents.length; i++) {
            let parentAdna = random(this.matingpool).dna;
            let parentBdna = random(this.matingpool).dna;
            let childDna = parentAdna.crossOver(parentBdna);
            childDna.mutation();
            newAgents[i] = new Agent(width / 2, height, childDna);
        }
        this.agents = newAgents;
        this.matingpool.length = 0;
    }

    run() {
        for (let i = 0; i < popsize; i++) {
            this.agents[i].update();
            this.agents[i].show();
        }
    }
}
