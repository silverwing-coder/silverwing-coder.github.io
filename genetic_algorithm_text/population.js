var mating_threshold = 0.01;
class Population {
    constructor(target, mut_rate, max_pop) {
        this.target = target;
        this.mutation_rate = mut_rate;
        this.max_population = max_pop;

        // this.population;
        // this.mateingPool;
        // this.mating_pool = []
        this.average_fitness = 0;
        this.generations = 0;
        // this.perfectScore = 1;

        this.best_child = "";
        this.max_fitness = 0;

        this.population = [];
        for (let i = 0; i < this.max_population; i++) {
            this.population[i] = new Child(this.target.length);
            // console.log(this.population[i].genes.join(""));
        }
        // console.log("calculate_fitness : " + this.target);
        this.calculate_fitness_all(this.target);
        // console.log("get_best_child");
        this.set_best_child();
    }

    calculate_fitness_all(target) {
        for (let i = 0; i < this.max_population; i++) {
            this.population[i].fitness = this.population[i].calculate_fitness(
                target
            );
            // console.log(this.population[i].fitness);
        }
    }

    set_best_child() {
        var fit_rate = 0;
        var sum_fitness = 0;
        for (let i = 0; i < this.max_population; i++) {
            // if (this.population[i].fitness > 0) {
            //     console.log(this.population[i].fitness);
            // }
            if (this.population[i].fitness > fit_rate) {
                fit_rate = this.population[i].fitness;
                this.best_child = this.population[i].genes.join("");
                this.max_fitness = fit_rate;
                // console.log("fit : " + fit_rate);
            }
            sum_fitness += this.population[i].fitness;
        }
        this.average_fitness = sum_fitness / this.max_population;
        // console.log("best_child : " + this.best_child);
        // console.log("max_fitness : " + this.max_fitness);
    }

    selection_evolution() {
        var mating_pool = [];
        var num_to_pool = 0;
        var mate_no;
        var offspring;
        for (let i = 0; i < this.population.length; i++) {
            if (this.population[i].fitness > mating_threshold) {
                num_to_pool = Math.floor(this.population[i].fitness * 100);
                for (let j = 0; j < num_to_pool; j++) {
                    mating_pool.push(this.population[i]);
                }
            }
        }
        // console.log("no_mating_pool : " + mating_pool.length);

        // cross over process
        for (let i = 0; i < this.population.length; i++) {
            // console.log("enter_cross_over");
            mate_no = Math.floor(Math.random() * mating_pool.length);
            // console.log("mating_pool_len : " + mating_pool.length);
            // console.log("mate_no : " + mate_no);
            // console.log("mating_partner : " + mating_pool[mate_no]);
            offspring = this.population[i].cross_over(mating_pool[mate_no]);
            // offspring.fitness = offspring.calculate_fitness(this.target)
            this.population[i] = offspring;
            this.population[i].fitness = this.population[i].calculate_fitness(
                this.target
            );
            // console.log("cross_child_fitness :" + this.population[i].fitness);
        }

        // mutation process
        for (let i = 0; i < this.population.length; i++) {
            // console.log("enter_mutation");
            if (Math.random() < this.mutation_rate) {
                let mut_pos = Math.floor(
                    Math.random() * this.population[i].genes.length
                );
                this.population[i].genes[mut_pos] = this.population[
                    i
                ].get_new_gene();
                this.population[i].fitness = this.population[
                    i
                ].calculate_fitness(this.target);
                // console.log("mut_child_fitness :" + this.population[i].fitness);
            }
        }
    }
}
