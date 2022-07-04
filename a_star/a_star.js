var cols = 50;
var rows = 50;
var grid = new Array(cols);

var openSet = [];
var closedSet = [];
var start;
var end;
var path = [];
//var nosolution = false;

var w, h;
var shortest_path;

function removeFromArray(array, element) {
  for (let i = array.length - 1; i >= 0; i--) {
    //  for (let i = 0; i < array.length; i++) {
    if (array[i] == element) {
      array.splice(i, 1);
    }
  }
  // console.log("openSet element removed.");
}

function heuristic(current, end) {
  //  d = dist(current.i, current.j, end.i, end.j)
  d = abs(current.i - end.i) + abs(current.j - end.j);
  return d;
}

function Spot(i, j) {
  this.i = i;
  this.j = j;
  this.f = 0;
  this.g = 0;
  this.h = 0;
  this.neighbors = [];
  this.previous = null;
  this.wall = false;
  if (random() < 0.3) {
    this.wall = true;
  }

  this.show = function (color) {
    fill(color);
    noStroke();
    if (this.wall) {
      fill(0);
      noStroke();
      //ellipse(this.i * w+w/2, this.j * h+h/2, w/2, h/2);
    }
    rect(this.i * w, this.j * h, w - 1, h - 1);
    //ellipse(this.i * w+w/2, this.j * h+h/2, w/2, h/2);
  };
  this.addNeighbors = function (grid) {
    var i = this.i;
    var j = this.j;
    if (i < cols - 1) {
      this.neighbors.push(grid[i + 1][j]);
    }
    if (i > 0) {
      this.neighbors.push(grid[i - 1][j]);
    }
    if (j < rows - 1) {
      this.neighbors.push(grid[i][j + 1]);
    }
    if (j > 0) {
      this.neighbors.push(grid[i][j - 1]);
    }
    // if (i > 0 && j > 0) {
    //   this.neighbors.push(grid[i][j - 1]);
    // }
    // if (i > 0 && j > 0) {
    //   this.neighbors.push(grid[i - 1][j - 1]);
    // }
    // if (i < cols - 1 && j > 0) {
    //   this.neighbors.push(grid[i + 1][j - 1]);
    // }
    // if (i > 0 && j < rows - 1) {
    //   this.neighbors.push(grid[i - 1][j + 1]);
    // }
    // if (i < cols - 1 && j < rows - 1) {
    //   this.neighbors.push(grid[i + 1][j + 1]);
    // }
  };
}

function a_plus_search() {
  setup();
  draw();
}

function setup() {
  createCanvas(600, 600);
  shortest_path = document.getElementById("shortest_path");
  //  background(255);
  stroke(255);
  w = width / cols;
  h = height / rows;
  for (let i = 0; i < cols; i++) {
    grid[i] = new Array(rows);
  }
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = new Spot(i, j);
    }
  }
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j].addNeighbors(grid);
    }
  }
  //  console.log(grid);
  start = grid[0][0];
  end = grid[cols - 1][rows - 1];
  start.wall = false;
  end.wall = false;
  openSet.push(start);
}
/** Draw function */
function draw() {
  background(255);
  if (openSet.length > 0) {
    // we can keep going
    var winner = 0;
    for (let i = 0; i < openSet.length; i++) {
      if (openSet[i].f < openSet[winner].f) {
        winner = i;
      }
    }

    var current = openSet[winner];
    if (current == end) {
      noLoop();
      console.log("DONE");
    }

    var neighbors = current.neighbors;
    for (let i = 0; i < neighbors.length; i++) {
      var neighbor = neighbors[i];
      var mewPath = false;
      if (!closedSet.includes(neighbor) && !neighbor.wall) {
        var tempG = current.g + 1;
        if (openSet.includes(neighbor)) {
          neighbor.g = tempG;
          newPath = true;
        } else {
          neighbor.g = tempG;
          openSet.push(neighbor);
          newPath = true;
        }
        if (newPath) {
          neighbor.h = heuristic(neighbor, end);
          neighbor.f = neighbor.h + neighbor.g;
          neighbor.previous = current;
        }
      }
    }
    removeFromArray(openSet, current);
    closedSet.push(current);
  } else {
    noLoop();
    console.log("NO SOLUTION");
    shortest_path.textContent = "There is NO-PATH from Start to End !";
    //  nosolution = true;
    //    return;
    //no solution
  }
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j].show(color(255));
    }
  }

  // for (let i = 0; i < openSet.length; i++) {
  //   openSet[i].show(color(0, 255, 0));
  // }

  // for (let i = 0; i < closedSet.length; i++) {
  //   closedSet[i].show(color(255, 0, 0));
  // }

  //  if (!nosolution) {
  path = [];
  var temp = current;
  path.push(temp);
  while (temp.previous != null) {
    path.push(temp.previous);
    temp = temp.previous;
  }

  // for (let i = 0; i < path.length; i++) {
  //   path[i].show(color(0, 0, 255));
  // }

  noFill();
  stroke(255, 0, 100);
  strokeWeight(w / 2);
  beginShape();
  for (let i = 0; i < path.length; i++) {
    vertex(path[i].i * w + w / 2, path[i].j * h + h / 2);
  }
  endShape();
}
