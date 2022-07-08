// Initialize canvas
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Define environment variables
var colorArray = ['#A62934','#0B1426','#7395D9','#F2BB16','#F29422'];
var gravity = 0.5;
var friction = 0.8;
var ballNumber = 100;

var mouse = {
    //x:undefined,  y:undefined
    x: innerWidth/2, y:innerHeight/2
}

// Mouse event Listener function
window.addEventListener('mousemove', function(event){
    mouse.x = event.clientX;
    mouse.y = event.clientY;
//    console.log(event);
});

window.addEventListener('resize', function(event){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
});

window.addEventListener('click', function(event){
    init();
    //console.log(event);
});

// Define Circle Class
function Ball(x, y, dx, dy, radius, color){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;

    this.draw = function(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        //ctx.strokeStyle = this.color;
        //ctx.stroke()
    }

    this.update = function(){
        if(this.y + this.radius +this.dy > canvas.height || this.y < 0 ){
            this.dy = -this.dy * friction;
        }
        else{
            this.dy += gravity;
            //console.log(this.dy);
        }

        if(this.x + this.radius > canvas.width || this.x < 0){
            this.dx = -this.dx;
        }
        this.y += this.dy;
        if(this.y + this.radius < canvas.height){
            this.x += this.dx;
        }
        this.draw();
    }
    
}
var ball;
var ballArray;
//var ballX;
//var ballY;
//var ballRadius;
//var ballColor;
//var dx;
var minRadius = 2;
function init(){
    ballArray = [];
    for(var i=0; i < ballNumber; i++){
        let ballX = Math.random()*canvas.width;
        let ballY = Math.random()*canvas.height * 0.5;
        let ballRadius = Math.random()*20;
        //let ballX = rrandomIntFromRange(0, canvas.width);
        //let ballY = randomIntFromRange(0, canvas.height);
        //let ballRadius = randomIntFromRange(2, 10);
        let dx = (Math.random()-0.5)*4;
        let ballColor = colorArray[Math.trunc(Math.random()*colorArray.length)];
        if(ballRadius < minRadius){
            ballRadius = minRadius;
        }
        ballArray.push(new Ball(ballX, ballY, dx, 1, ballRadius, ballColor));
    }
//    ballArry[i].update();
//    console.log(ball);
}

function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight)
    for(var i = 0; i < ballNumber; i++){
        ballArray[i].update();
    }
    //ball.update();
    //ctx.fillText("HTML", mouse.x, mouse.y);
}


init();
animate();