// Initialize canvas
var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

/** Set environment variables */
var rows; // Number of bubble rows at initial status
var cols; // Number of bubble columns at initial status

/*============ The function to find canvas size ==================*/
function setCanvasSize(element) {
  var size = [];
  if (element == "640by480") {
    canvas.width = 640;
    canvas.height = 480;
  } else if (element == "1024by768") {
    canvas.width = 1024;
    canvas.height = 768;
  }
}
//console.log(
//  "canvas width : " + canvas.width + " , canvas height : " + canvas.height
//);
/*=============================================================== */

/*============ The function to find number of bubbles ==================*/
function setNumberOfBubbles(element) {
  if (element == "3by4") {
    rows = 3;
    cols = 4;
    //number.push(3);
    //number.push(4);
  } else if (element == "4by5") {
    rows = 4;
    cols = 5;
  } else if (element == "5by6") {
    rows = 5;
    cols = 6;
  }
  //return number;
}
//console.log("rows : " + rows + " ,  cols : "+cols);
/*=============================================================== */

/*============ The function to find number of bubbles ==================*/

//Define variables
var bubbleArray = [];

//Conditional variables. Will be miditified by input values
//var maxBubbleCount = 500;
var speed = 2;

//Set the Game start environment
var initialBubbleSize = 20;

//var initialBubbleSize = document.getElementById("range_size").value;
//initialBubbleSize.removeEventListener("click", function(event));
//initialBubbleSize = document.getElementById("range_size").value;
//function getBubbleSize() {}

//console.log("Initial bubble size : " + initialBubbleSize);

//Random variables. Will be modified by random values
var colorArray = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#00ffff"];

//Temporary variables. Used only in development phase
var radius = 2 + Math.random() * 3;
var dx = Math.random() * 3;
var dy = Math.random() * 3;

//Event listener1. When mouse double clicked, clicked bubble splashes
//window.addEventListener("click", function(event) {
window.addEventListener("click", function (event)
{
  var rect = canvas.getBoundingClientRect();
  //console.log("canvas lett : "+rect.left);
  //console.log("canvas top : "+rect.top);
  splashBubbles(event.clientX - rect.left, event.clientY - rect.top);
  //splashBubbles(event.clientX, event.clientY);
});

//Define Bubble class. Position(x, y), speed(dx, dy), radius, and color parameters required
function Bubble(x, y, dx, dy, radius, color) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.color = color;

  this.draw = function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.stroke();
    //ctx.closePath();
  };

  this.update = function() {
    if (this.x + this.radius >= canvas.width) {
      this.x = canvas.width - this.radius;
      this.dx = -this.dx;
    } else if (this.x - this.radius <= 0) {
      this.x = this.radius;
      this.dx = -this.dx;
    }

    if (this.y + this.radius >= canvas.height) {
      this.y = canvas.height - this.radius;
      this.dy = -this.dy;
    } else if (this.y - this.radius <= 0) {
      this.y = this.radius;
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;
    //this.draw();
    setTimeout(this.draw(), 1000);
  };
}

function setStartCondition() {
  var numberBubbles = document.getElementById("number_bubbles").value;
  setNumberOfBubbles(numberBubbles);

  var canvasSize = document.getElementById("canvas_size").value;
  setCanvasSize(canvasSize);

  //initialBubbleSize = document.getElementById("range_size").value;

  //var bubbleSize = document.getElementById("range_size").value;
  //console.log("bubleSize : " + initialBubbleSize);
  //var bubbleSpeed = document.getElementById("range_paeed");

  bubbleArray.length = 0;
  //bubbleArray.push(new Bubble(canvas.width/2, canvas.height/2, 0, 0, initialBubbleSize, 'green'))

  var posX;
  var posY;
  var color;
  for (var i = 1; i < cols + 1; i++) {
    for (var j = 1; j < rows + 1; j++) {
      posX = (i * canvas.width) / (cols + 1);
      posY = (j * canvas.height) / (rows + 1);
      color = colorArray[Math.floor(Math.random() * 5)];
      bubbleArray.push(new Bubble(posX, posY, 0, 0, initialBubbleSize, color));
    }
  }
  //initialBubbleSize = document.getElementById("range_size").value;
  //console.log("bubble size : " + initialBubbleSize);

  animate();
}

// Set initial status of the Splash Bubble Game
/*
function initializeGame() {
  for (var i = 0; i < maxBubbleCount; i++) {
    bubble = new Bubble(
      Math.random() * canvas.width,
      Math.random() * canvas.height,
      //canvas.width/2,
      //canvas.height/2,
      Math.random() * 3 - 3,
      Math.random() * 3 - 3,
      radius,
      //colors
      colorArray[Math.floor(Math.random() * 5)]
    );
    console.log("created Color : " + bubble.color);
    bubbleArray.push(bubble);
  }
}
*/
//function startGame(){
//  var rect = canvas.getBoundingClientRect();
//  splashBubbles(canvas.width/2-rect.left, canvas.height/2-rect.top);
//}

// Get the radian position of new bubble creation
var angle = Math.random() * Math.PI * 2;
var newBubbleRadius = 2 + Math.random() * 3;
function getNewBubblePosition(bubble, bubbleCenterDistance, newBubbleRadius) {
  while (true) {
    if (
      bubble.x + bubbleCenterDistance * Math.cos(angle) + newBubbleRadius + 5 >=
        canvas.width ||
      bubble.x + bubbleCenterDistance * Math.cos(angle) - newBubbleRadius - 5 <=
        0 ||
      bubble.y - bubbleCenterDistance * Math.sin(angle) + newBubbleRadius + 5 >=
        canvas.height ||
      bubble.y - bubbleCenterDistance * Math.sin(angle) - newBubbleRadius - 5 <=
        0
    ) {
      angle += Math.PI / 12;
      //console.log("angleA : " + angle);
    } else {
      //console.log("angleB : " + angle);
      break;
    }
    return angle;
  }
}

//function createNewBubbles() {}

// Event listener function. When double clicked, called by "dblclick" listener
function splashBubbles(x, y) {
//function splashBubbles(event) {
  //var rect = canvas.getBoundingClientRect();
  //event.clientX = event.clientX - rect.left;
  //event.clientY = event.clientY - rect.top;
  //splashBubbles(event.clientX - rect.left, event.clientY - rect.top);
  var clickedBubbleArea;
  var bubbleCenterDistance;

  //Newly created bubble variables;
  var newBubbleArea;
  var mouseDistance;

  var count = 0;
  for (var i = 0; i < bubbleArray.length; i++) {
    console.log("bubbleArray i radius : " + bubbleArray[i].radius);
    mouseDistance = Math.sqrt(
      Math.pow(bubbleArray[i].x - x, 2) + Math.pow(bubbleArray[i].y - y, 2)
    );
    console.log("mouse distance : " + mouseDistance);
    if (mouseDistance < bubbleArray[i].radius) {
      bubbleCenterDistance = bubbleArray[i].radius + newBubbleRadius;
      angle = getNewBubblePosition(
        bubbleArray[i],
        bubbleCenterDistance,
        newBubbleRadius
      );
      //console.log("bubbleCenterDistance : " + bubbleCenterDistance);
      console.log("bubble clicked.");
      break;
    } else {
      count++;
    }

    if (count == bubbleArray.length) {
      console.log("click miss.");
    }
  }

  if (count != bubbleArray.length) {
    console.log("bubbleArray i radius : " + bubbleArray[i].radius);
    while (true) {
      clickedBubbleArea = Math.PI * Math.pow(bubbleArray[i].radius, 2);
      newBubbleArea = Math.PI * Math.pow(newBubbleRadius, 2);
      clickedBubbleArea -= newBubbleArea;
      //console.log(i + " + clickedBubbleArea : " + clickedBubbleArea);
      bubbleArray[i].radius = Math.sqrt(clickedBubbleArea / Math.PI);
      //console.log(i + " + clickedBubble.radius : " + bubbleArray[i].radius);

      if (Math.cos(angle) > 0 && Math.sin(angle) > 0) {
        bubbleArray.push(
          new Bubble(
            bubbleArray[i].x + bubbleCenterDistance * Math.cos(angle) + 5,
            bubbleArray[i].y - bubbleCenterDistance * Math.sin(angle) - 5,
            bubbleArray[i].dx + dx * Math.cos(angle) * speed,
            bubbleArray[i].dy - dy * Math.sin(angle) * speed,
            newBubbleRadius,
            colorArray[Math.floor(Math.random() * 5)]
          )
        );
      } else if (Math.cos(angle) > 0 && Math.sin(angle) < 0) {
        bubbleArray.push(
          new Bubble(
            bubbleArray[i].x + bubbleCenterDistance * Math.cos(angle) + 5,
            bubbleArray[i].y - bubbleCenterDistance * Math.sin(angle) + 5,
            bubbleArray[i].dx + dx * Math.cos(angle) * speed,
            bubbleArray[i].dy - dy * Math.sin(angle) * speed,
            newBubbleRadius,
            colorArray[Math.floor(Math.random() * 5)]
          )
        );
      } else if (Math.cos(angle) < 0 && Math.sin(angle) > 0) {
        bubbleArray.push(
          new Bubble(
            bubbleArray[i].x + bubbleCenterDistance * Math.cos(angle) - 5,
            bubbleArray[i].y - bubbleCenterDistance * Math.sin(angle) - 5,
            bubbleArray[i].dx + dx * Math.cos(angle) * speed,
            bubbleArray[i].dy - dy * Math.sin(angle) * speed,
            newBubbleRadius,
            colorArray[Math.floor(Math.random() * 5)]
          )
        );
      } else {
        bubbleArray.push(
          new Bubble(
            bubbleArray[i].x + bubbleCenterDistance * Math.cos(angle) - 5,
            bubbleArray[i].y - bubbleCenterDistance * Math.sin(angle) + 5,
            bubbleArray[i].dx + dx * Math.cos(angle) * speed,
            bubbleArray[i].dx - dy * Math.sin(angle) * speed,
            newBubbleRadius,
            colorArray[Math.floor(Math.random() * 5)]
          )
        );
      }
      //setTimeout(function() {}, 1000);
      if (clickedBubbleArea < 100) {
        console.log("break by bubbleArea");
        break;
      }

      //Inintialize new bubble properties(size and position)
      newBubbleRadius = 2 + Math.random() * 2;
      angle = Math.random() * Math.PI * 3;
    }
  }
}

function rgbToHex(color) {
  let hex = color.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}
//Combine overlapped bubbles. called by "animate()"
function combineBubbles(bubbleA, bubbleB) {
  var combinedArea =
    Math.PI * Math.pow(bubbleA.radius, 2) +
    Math.PI * Math.pow(bubbleB.radius, 2);
  var tmpRadius = Math.sqrt(combinedArea / Math.PI);
  var newX =
    (bubbleA.x * bubbleA.radius + bubbleB.x * bubbleB.radius) /
    (bubbleA.radius + bubbleB.radius);
  var newY =
    (bubbleA.y * bubbleA.radius + bubbleB.y * bubbleB.radius) /
    (bubbleA.radius + bubbleB.radius);

  if (newX >= canvas.width - tmpRadius) {
    bubbleA.x = canvas.width - tmpRadius;
  } else if (newX <= tmpRadius) {
    bubbleA.x = tmpRadius;
  } else {
    bubbleA.x = newX;
  }

  if (newY >= canvas.height - tmpRadius) {
    bubbleA.y = canvas.height - tmpRadius;
  } else if (newY <= tmpRadius) {
    bubbleA.y = tmpRadius;
  } else {
    bubbleA.y = newY;
  }

  //Set combined bubble speed. Will be modified on gravity, time function etc.
  bubbleA.dx =
    (bubbleA.dx * bubbleA.radius + bubbleB.dx * bubbleB.radius) /
    (bubbleA.radius + bubbleB.radius);
  bubbleA.dy =
    (bubbleA.dy * bubbleA.radius + bubbleB.dy * bubbleB.radius) /
    (bubbleA.radius + bubbleB.radius);
  bubbleA.radius = tmpRadius;

  let colorA = bubbleA.color;
  //console.log("bubbleA.color-A " + bubbleA.color);
  let colorB = bubbleB.color;
  //console.log("bubbleA.color-B " + bubbleB.color);
  let rColor = Math.round(
    (parseInt(colorA.slice(1, 3), 16) + parseInt(colorB.slice(1, 3), 16)) / 2
  );
  let gColor = Math.round(
    (parseInt(colorA.slice(3, 5), 16) + parseInt(colorB.slice(3, 5), 16)) / 2
  );
  let bColor = Math.round(
    (parseInt(colorA.slice(5, 7), 16) + parseInt(colorB.slice(5, 7), 16)) / 2
  );
  bubbleA.color = "#" + rgbToHex(rColor) + rgbToHex(gColor) + rgbToHex(bColor);
  return bubbleA;
}

//Animate all the bubbles in bubbleArray. call "combineBubbles()"
function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  console.log("arrayLength : " + bubbleArray.length);
  for (var i = 0; i < bubbleArray.length; i++) {
    for (var j = i + 1; j < bubbleArray.length; j++) {
      //console.log("i , j, array.length : " + i +", " + j + ", " + bubbleArray.length);
      if (
        // Check if two bubbles are overlapped, If yes->combineBubbles()
        Math.pow(bubbleArray[i].x - bubbleArray[j].x, 2) +
          Math.pow(bubbleArray[i].y - bubbleArray[j].y, 2) <
        Math.pow(bubbleArray[i].radius + bubbleArray[j].radius, 2)
      ) {
        //bubbleArray[i] = combineBubbles(bubbleArray[i], bubbleArray[j]);
        bubbleArray.splice(
          i,
          1,
          combineBubbles(bubbleArray[i], bubbleArray[j])
        );
        bubbleArray.splice(j, 1); // Remove one of combined bubble
      }
    }
  }
  for (var i = 0; i < bubbleArray.length; i++) {
    bubbleArray[i].update();
  }
}

function startGame() {
  //setStartCondition();
  var rect = canvas.getBoundingClientRect();
  for (var i = 1; i < cols + 1; i++) {
    for (var j = 1; j < rows + 1; j++) {
      splashBubbles(
        (i * canvas.width) / (cols + 1),
        (j * canvas.height) / (rows + 1)
      );
    }
  }
  //splashBubbles(canvas.width/2-rect.left, canvas.height/2-rect.top);
}

setStartCondition();
//animate();

//bubble.update()
