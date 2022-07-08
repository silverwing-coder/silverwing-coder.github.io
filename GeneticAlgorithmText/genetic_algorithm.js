var best_child = "";
var generations = 0;
var average_fitness = 0;
var target = "Developed by Sangmork Park.";
// var target = "Hello";

var population = [];

var max_population = 1000;
var mutation_rate = 0.01;

function setup() {
    createCanvas(600, 400);
    population = new Population(target, mutation_rate, max_population);
}

function draw() {
    background(100);

    textFont("Courier");
    textSize(18);
    textAlign(LEFT);
    stroke(255);
    fill(255);
    text("Best Child  : " + best_child, 20, 50);
    text("Generations : " + generations, 20, 80);
    text("Average Fitness : " + average_fitness, 20, 110);
    textFont("Courier New");
    textSize(20);
    stroke("yellow");
    fill("yellow");
    text("*** Setup Variables ***\nTarget Text    : " + target, 20, 200);
    text("Max Population : " + max_population, 20, 250);
    text("Mutation Rate  : " + mutation_rate, 20, 275);
    // text(intro_text, 20, 200);

    if (population.max_fitness > 0.999) {
        // console.log("max_fit : " + population.max_fitness)
        noLoop();
    }
    generations++;
    population.selection_evolution();
    population.set_best_child();
    average_fitness = population.average_fitness;
    best_child = population.best_child;
    // console.log(best_child);
}

function re_start() {
    var tgt = document.getElementById("target_text").value;
    var max = int(document.getElementById("max_popu").value);
    var mut = float(document.getElementById("mut_rate").value);
    // console.log("restart btn");
    // console.log("tgt : " + tgt);
    // console.log("max : " + max);
    // console.log("mut : " + mut);
    if (tgt == "" || max == "" || mut == "") {
        alert("Check input data : Target Text, MAX Population, Mutation Rate.");
    }
    if (!Number.isInteger(max)) {
        alert("Input integer number in Max Population");
    }
    if (mut < 0 || mut > 1) {
        alert("Input Mutation Rate between 0 and 1");
    }

    best_child = "";
    generations = 0;
    average_fitness = 0;
    population = [];

    target = tgt;
    max_population = max;
    mutation_rate = mut;
    population = new Population(tgt, mut, max);
    // console.log(population);
    loop();
}
