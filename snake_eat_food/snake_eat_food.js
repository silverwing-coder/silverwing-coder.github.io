var snake;
var foods=[];
var noOfFoods=20;
var size = 20;
var cols;// = Math.floor(width/size);
var rows;// = Math.floor(height/size);
var loc;


function setup() {
  createCanvas(600, 600);
  frameRate(15);
//  rectMode(CENTER)
  snake = new Snake(size);
  for(var i=0; i<noOfFoods; i++){
    loc = pickFoodLocation();
    var food = new Food(loc.x, loc.y, size);
    foods.push(food);
  }
}
function pickFoodLocation(){
  cols = Math.floor(width/size);
  rows = Math.floor(height/size);
  var pos = createVector(Math.floor(random(cols)), Math.floor(random(rows)));
  pos.mult(size);
  return pos;
}
function draw() {
  background(50);
  snake.eatFood(foods);
  snake.update();
  snake.show();
  for(var i=0; i< foods.length;i++){
    foods[i].show();
  }
}    
function keyPressed() {
  if (keyCode === UP_ARROW) {
    snake.setDirection(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    snake.setDirection(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDirection(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    snake.setDirection(-1, 0);
  }
}

