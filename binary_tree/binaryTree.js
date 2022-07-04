var tree ;
var vals;
var sorted;

document.getElementById("btn_referesh").onclick = function(){
  setup();
}
function setup() {
  tree = new Tree();
  vals = [];
  sorted =[];
  createCanvas(800, 600);
  background(50);
  for (let i = 0; i < 15; i++) {
    let x = floor(random(0, 100));
    tree.addValue(x);
    vals.push(x);
  }
//  console.log(tree);
//  document.write(vals);
  const valArr = document.getElementById("source_data");
  valArr.textContent = "Source Data : [ " + vals +" ]";
  console.log(vals);
  tree.traverse();
  const sortArr = document.getElementById("sorted_data")
  sortArr.textContent = "Sorted Data : [ " + sorted +" ]";

  // let res = tree.search(10);
  // if(res != null){
  // //    console.log("Found");
  //     console.log(res);
  // }else{
  //     console.log("NOT FOUND");
  // }
}
function Tree() {
  this.root = null;
}
Tree.prototype.addValue = function(val) {
  var n = new Node(val);
  if (this.root == null) {
    this.root = n;
    this.root.x = width / 2;
    this.root.y = 30;
    this.level = 0;
  } else {
    this.root.addNode(n);
  }
};
Tree.prototype.traverse = function() {
  this.root.visit(this.root);
};
Tree.prototype.search = function(val) {
  return this.root.search(val);
  // let res = this.root.search(val);
  // console.log(res);
  // if(res != null){
  //     console.log("FOUND");
  // }else {
  //     console.log("NOT FOUND");
  // }
};

function Node(val, x, y) {
  this.val = val;
  this.left = null;
  this.right = null;
  this.x = x;
  this.y = y;
  this.level = 0;
}
Node.prototype.addNode = function(n) {
  //        console.log("this.val : " + this.val);
  //        console.log("n.val : " + n.val);
  if (n.val <= this.val) {
    if (this.left == null) {
      n.level = this.level + 1;
      this.left = n;
      this.left.x = this.x - 100 + this.level * 15;
      this.left.y = this.y + 50;
    } else {
      this.left.addNode(n);
    }
  } else if (n.val > this.val) {
    if (this.right == null) {
      n.level = this.level + 1;
      this.right = n;
      this.right.x = this.x + 100 - this.level * 15;
      this.right.y = this.y + 50;
    } else {
      this.right.addNode(n);
    }
  }
};
Node.prototype.visit = function(parent) {
  if (this.left != null) {
    this.left.visit(this);
  }
  console.log("visit : " + this.val + ", level : " + this.level);
  sorted.push(this.val);

  fill(255);
  noStroke();
  textAlign(CENTER);
  text(this.val, this.x, this.y);
  stroke(255);
  noFill();
  ellipse(this.x, this.y - 5, 20, 20);
  if (this.level != 0) {
    line(parent.x, parent.y + 5, this.x, this.y - 15);
  }
  if (this.right != null) {
    this.right.visit(this);
  }
};
Node.prototype.search = function(val) {
  if (this.val == val) {
    //        console.log("FOUND : " + this.val);
    return this;
  } else {
    if (this.val > val && this.left != null) {
      return this.left.search(val);
    } else if (this.val < val && this.right != null) {
      return this.right.search(val);
    } else {
      return null;
    }
  }
};
