var data;
var graph;
var dropdown_start;
var dropdown_end;
const dist = 230;
var arrowSize = 15;
var min_cost_path;
var shortest_path;

function preload() {
  data = loadJSON("nodes_distance.json");
}

function Graph() {
  this.nodes = [];
  this.graph = {};
  this.start = null;
  this.end = null;
}
Graph.prototype.addNode = function(_node) {
  this.nodes.push(_node);
  var t_name = _node.name;
  this.graph[t_name] = _node;
};
function Node(_name) {
  this.name = _name;
  this.neighbors = [];
  //  console.log("neighbors : " + this.neighbors);
  this.minVal = 1000000;
  this.steps = 0;
  this.visited = false;
  this.parent = null;
  this.x = 0;
  this.y = 0;
}
Node.prototype.draw_node = function() {
  fill(255);
  ellipse(this.x, this.y - 5, 60, 30);
  fill(0);
  noStroke();
  textAlign(CENTER);
  textSize(17);
  text(this.name, this.x, this.y);
};

function setup() {
  createCanvas(600, 500);
  background(50);
  dropdown_start = document.getElementById("select_start");
  dropdown_end = document.getElementById("select_end");
  create_graph(); // create a Graph object : src-data, output-graph
  draw_graph();
  min_cost_path = document.getElementById("min_cost");
  shortest_path = document.getElementById("shortest_path");
}
function bfs_min_cost() {
  /** Set start_node and end_node */
  var start_node = document.getElementById("select_start").value;
  var end_node = document.getElementById("select_end").value;
  // console.log("st-1 :" + start_node);
  // console.log("en-1 :" + end_node);
  if (start_node == end_node) {
    min_cost_path.textContent =
      "YOU CAN NOT CHOOSE TO TRAVERSE THE SAME NODES.";
  } else {
    bfs_min_cost_function(start_node, end_node);
    //    bfs_shortest_path_function(start_node, end_node);
  }
}
function bfs_short_path() {
  /** Set start_node and end_node */
  var start_node = document.getElementById("select_start").value;
  var end_node = document.getElementById("select_end").value;
  // console.log("st-1 :" + start_node);
  // console.log("en-1 :" + end_node);
  if (start_node == end_node) {
    min_cost_path.textContent =
      "YOU CAN NOT CHOOSE TO TRAVERSE THE SAME NODES.";
  } else {
    //    bfs_min_cost_function(start_node, end_node);
    bfs_short_path_function(start_node, end_node);
  }
}

/** Create a Graph object with golbal variables of "data" and "graph" */
function create_graph() {
  graph = new Graph();
  var nodes = data.nodes;
  for (let i = 0; i < nodes.length; i++) {
    var name = nodes[i].id;
    var neighbors = nodes[i].ddst;
    var node = new Node(name);
    node.neighbors = neighbors;
    graph.addNode(node);
    var option_start = document.createElement("option");
    var option_end = document.createElement("option");
    option_start.text = name;
    option_end.text = name;
    dropdown_start.add(option_start);
    dropdown_end.add(option_end);
  }
}
/** Draw a Graph on Canvas */
function draw_graph() {
  /** Draw nodes. node-A is in center, others are around a circle. */
  var x = width / 2;
  var y = height / 2;
  graph.nodes[0].x = x;
  graph.nodes[0].y = y;
  graph.nodes[0].draw_node();
  for (let i = 1; i < graph.nodes.length; i++) {
    graph.nodes[i].x = x + floor(cos((i * PI) / 3) * dist);
    graph.nodes[i].y = y + floor(sin((i * PI) / 3) * dist);
    graph.nodes[i].draw_node();
  }

  /** Draw edges, arrows and costs of each edge. */
  var destinations = [];
  var distances = [];
  var sx = 0;
  var sy = 0;
  var dx = 0;
  var dy = 0;
  var rad = 0;
  var tx = 0;
  var ty = 0;
  var val = 0;

  for (let i = 0; i < graph.nodes.length; i++) {
    destinations = Object.keys(graph.nodes[i].neighbors);
    distances = Object.values(graph.nodes[i].neighbors);
    sx = graph.nodes[i].x;
    sy = graph.nodes[i].y;
    //    console.log("src : " + node.name);
    //    console.log("src x: " + sx +", y : " + sy);
    for (let j = 0; j < destinations.length; j++) {
      //      console.log("dest : " + destinations[j]);
      for (let k = 0; k < graph.nodes.length; k++) {
        if (destinations[j] == graph.nodes[k].name) {
          //          console.log("src : " + graph.nodes[i].name);
          //          console.log("dest : " + graph.nodes[k].name);
          dx = graph.nodes[k].x;
          dy = graph.nodes[k].y;
          stroke(255);
          line(sx, sy, dx, dy);

          val = distances[j];
          //          console.log("val : " + val);
          rad = atan((dy - sy) / (dx - sx));
          //          console.log("rad : " + rad);
          tx = sx + floor((dx - sx) * 0.85);
          ty = sy + floor((dy - sy) * 0.85);
          noStroke();
          fill(255, 255, 0);
          if (tx >= sx) {
            triangle(
              tx,
              ty,
              tx + arrowSize * cos(PI / 2 + PI / 3 - rad),
              ty - arrowSize * sin(PI / 2 + PI / 3 - rad),
              tx + arrowSize * cos(PI / 2 + PI / 3 + PI / 3 - rad),
              ty - arrowSize * sin(PI / 2 + PI / 3 + PI / 3 - rad)
            );
          } else {
            triangle(
              tx,
              ty,
              tx - arrowSize * cos(PI / 2 + PI / 3 - rad),
              ty + arrowSize * sin(PI / 2 + PI / 3 - rad),
              tx - arrowSize * cos(PI / 2 + PI / 3 + PI / 3 - rad),
              ty + arrowSize * sin(PI / 2 + PI / 3 + PI / 3 - rad)
            );
          }
          fill(255, 255, 0);
          noStroke();
          textAlign(CENTER);
          textSize(15);
          text(val, sx + floor((dx - sx) * 0.7), sy + floor((dy - sy) * 0.7));
        }
      }
      //      console.log("dest : " + destinations[j]);
    }
  }
  graph.nodes[0].x = width / 2;
  graph.nodes[0].y = height / 2;
  graph.nodes[0].draw_node();
  for (let i = 1; i < graph.nodes.length; i++) {
    graph.nodes[i].x = x + floor(cos((i * PI) / 3) * dist);
    graph.nodes[i].y = y + floor(sin((i * PI) / 3) * dist);
    graph.nodes[i].draw_node();
  }
}
function draw_node(_x, _y, _txt) {
  fill(255);
  ellipse(_x, _y, 50, 30);
  fill(0);
  noStroke();
  textAlign(CENTER);
  text(_txt, _x, _y);
}
function bfs_min_cost_function(start_node, end_node) {
  min_cost_path.textContent = "";
  // console.log("start : " + start_node);
  // console.log("end : " + end_node);
  for (let i = 0; i < graph.nodes.length; i++) {
    graph.nodes[i].minVal = 1000000;
  }
  clear();
  background(50);
  draw_graph();
  var queue = [];
  var min_value = 0;
  for (let i = 0; i < graph.nodes.length; i++) {
    if (start_node == graph.nodes[i].name) {
      graph.nodes[i].minVal = 0;
      queue.push(graph.nodes[i]);
    }
  }
  while (queue.length > 0) {
    var current = queue.shift();
    //    console.log("current : " + current.name);
    if (current.name == end_node) {
      console.log("Found !" + end_node + ", min value " + current.minVal);
      min_value = current.minVal;
      continue;
    }
    var edges = current.neighbors;
    destinations = Object.keys(edges);
    distances = Object.values(edges);
    //    console.log(destinations);
    for (let i = 0; i < destinations.length; i++) {
      var dest = destinations[i];
      //      console.log("dest : " + dest);
      var dist = distances[i];
      //      console.log("dist : " + dist);
      for (let j = 0; j < graph.nodes.length; j++) {
        //        console.log(nodes[j].name);
        if (
          dest == graph.nodes[j].name &&
          graph.nodes[j].minVal > current.minVal + dist
        ) {
          graph.nodes[j].minVal = current.minVal + dist;
          graph.nodes[j].parent = current.name;
          //         console.log("curr val " + nodes[j].minVal);
          queue.push(graph.nodes[j]);
        }
      }
    }
  }
  var path = [];
  var sx;
  var sy;
  var dx;
  var dy;
  for (let i = 0; i < graph.nodes.length; i++) {
    if (end_node == graph.nodes[i].name) {
      path.push(graph.nodes[i]);
      //      console.log(nodes[i].parent);
    }
  }
  //  min_cost_path.textContent = "  =>  " +  end_node;
  var next = path[0].parent;
  dx = path[0].x;
  dy = path[0].y;
  // console.log("dx : " + dx + ", dy : " + dy);
  // console.log("parent : " + next);
  fill(255, 255, 0);
  //  noStroke();
  textAlign(CENTER);
  textSize(18);
  text("END NODE", dx, dy + 30);
  while (next != null) {
    for (let i = 0; i < graph.nodes.length; i++) {
      if (next == graph.nodes[i].name) {
        path.push(graph.nodes[i]);
        sx = graph.nodes[i].x;
        sy = graph.nodes[i].y;
        stroke(255, 100, 255);
        strokeWeight(2);
        line(sx, sy, dx, dy);
        //      min_cost_path.textContent = "  => " + next + min_cost_path.textContent;
        if (start_node == next) {
          fill(150, 255, 0);
          noStroke();
          textAlign(CENTER);
          textSize(18);
          text("START NODE", sx, sy + 30);
          // console.log("start node : " + start_node);
          // console.log("start node : " + next);
          for (let j = 0; j < path.length; j++) {
            path[j].draw_node();
          }
          next = null;
          break;
        }
        dx = graph.nodes[i].x;
        dy = graph.nodes[i].y;
        next = graph.nodes[i].parent;
        // console.log("next : " + graph.nodes[i].parent);
      }
    }
  }
  // console.log(path);
  for (let i = path.length - 2; i >= 0; i--) {
    min_cost_path.textContent =
      min_cost_path.textContent + " ==> " + path[i].name;
  }
  min_cost_path.textContent =
    "Minimum Cost Path : " +
    path[path.length - 1].name +
    min_cost.textContent +
    ", with minimum cost of " +
    min_value;
  shortest_path.textContent = "";
}

function bfs_short_path_function(start_node, end_node) {
  shortest_path.textContent = "";
  // console.log("start : " + start_node);
  // console.log("end : " + end_node);
  for (let i = 0; i < graph.nodes.length; i++) {
    graph.nodes[i].steps = 0;
    graph.nodes[i].visited = false;
  }
  clear();
  background(50);
  draw_graph();
  var queue = [];
  var steps = 0;
  for (let i = 0; i < graph.nodes.length; i++) {
    if (start_node == graph.nodes[i].name) {
      graph.nodes[i].steps = 0;
      graph.nodes[i].visited = true;
      queue.push(graph.nodes[i]);
    }
  }
  while (queue.length > 0) {
    var current = queue.shift();
    //    console.log("current : " + current.name);
    if (current.name == end_node) {
      console.log("Found !" + end_node + ", min steps of " + current.steps);
      steps = parseInt(current.steps);
      continue;
    }
    var edges = current.neighbors;
    destinations = Object.keys(edges);
    //    distances = Object.values(edges);
    //    console.log("dests : " + destinations);
    for (let i = 0; i < destinations.length; i++) {
      var dest = destinations[i];
      // console.log("dest : " + dest);
      // console.log("curr steps : " + current.steps);
      // var dist = distances[i];
      // console.log("dist : " + dist);
      for (let j = 0; j < graph.nodes.length; j++) {
        //        console.log("curr-A steps " + steps + 1);
        //        console.log("node-j-A steps " + graph.nodes[j].steps +1);
        if (dest == graph.nodes[j].name && graph.nodes[j].visited == false) {
          // console.log("q-length : " + queue.length);
          graph.nodes[j].steps = steps++;
          graph.nodes[j].visited = true;
          graph.nodes[j].parent = current.name;
          queue.push(graph.nodes[j]);
          // console.log("queue : " + queue.length);
        }
        if (dest == graph.nodes[j].name && graph.nodes[j].visited == true) {
          if (graph.nodes[j].steps > steps + 1) {
            // console.log("change steps to : " + current.steps + 1);
            graph.nodes[j].steps = current.steps + 1;
            graph.nodes[j].parent = current.name;
          }
        }
      }
    }
  }
  var path = [];
  var sx;
  var sy;
  var dx;
  var dy;
  for (let i = 0; i < graph.nodes.length; i++) {
    if (end_node == graph.nodes[i].name) {
      path.push(graph.nodes[i]);
      //      console.log(graph.nodes[i].name);
    }
  }
  //  shortestt_path.textContent = "  =>  " +  end_node;
  var next = path[0].parent;
  dx = path[0].x;
  dy = path[0].y;
  //  console.log("dx : " + dx + ", dy : " + dy);
  // console.log("end node : " + path[0].name);
  // console.log("parent : " + next);
  fill(255, 255, 0);
  //  noStroke();
  textAlign(CENTER);
  textSize(18);
  text("END NODE", dx, dy + 30);
  while (next != null) {
    for (let i = 0; i < graph.nodes.length; i++) {
      if (next == graph.nodes[i].name) {
        path.push(graph.nodes[i]);
        sx = graph.nodes[i].x;
        sy = graph.nodes[i].y;
        stroke(255, 100, 100);
        strokeWeight(2);
        line(sx, sy, dx, dy);
        //      shortest_path.textContent = "  => " + next + shortest_path.textContent;
        if (start_node == next) {
          fill(150, 255, 0);
          noStroke();
          textAlign(CENTER);
          textSize(18);
          text("START NODE", sx, sy + 30);
          // console.log("start node : " + start_node);
          // console.log("start node : " + next);
          for (let j = 0; j < path.length; j++) {
            path[j].draw_node();
          }
          next = null;
          break;
        }
        dx = graph.nodes[i].x;
        dy = graph.nodes[i].y;
        next = graph.nodes[i].parent;
        // console.log("next : " + graph.nodes[i].parent);
      }
    }
  }
  // console.log(path);
  for (let i = path.length - 2; i >= 0; i--) {
    shortest_path.textContent =
      shortest_path.textContent + " ==> " + path[i].name;
  }
  shortest_path.textContent =
    "Shortest Path : " + path[path.length - 1].name + shortest_path.textContent;
  min_cost_path.textContent = "";
}
