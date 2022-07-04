var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext('2d');
/*
//fill rectangle
ctx.fillStyle = 'rgba(255, 0, 0 ,0.5)';
ctx.fillRect(100, 100, 100, 100)
ctx.fillStyle = 'rgba(0, 0, 255 ,0.5)';
ctx.fillRect(400, 100, 100, 100)
ctx.fillStyle = 'rgba(0, 255, 0 ,0.5)';
ctx.fillRect(300, 300, 100, 100)

//line;
ctx.beginPath();
ctx.moveTo(50, 300);
ctx.lineTo(300, 100);
ctx.lineTo(400, 300);
ctx.strokeStyle = "#fa34a3";
ctx.stroke();

// Arc & circle
//ctx.beginPath();
//ctx.arc(300, 300, 30, 0, 2*Math.PI, true);
//ctx.strokeStyle = 'blue';
//ctx.stroke();

for(var i = 0; i < 100; i++){
    x = Math.random() * window.innerWidth;
    y = Math.random() * window.innerHeight;
    r = Math.random() * 255;
    g = Math.random() * 255;
    b = Math.random() * 255;
    ctx.beginPath();
    ctx.arc(x, y, 30, 0, 2*Math.PI, true);
    ctx.strokeStyle = 'rgba('+r+', '+g+', '+b+', 1)';
    ctx.stroke();
}
*/

var mouse = {
    x:undefined, y:undefined
}

var maxRadius = 40;
var minRadius = 2;

var colorArray = [
    '#C1D6D9', '#01261F', '#F2B705', '#BF9460', '#8C5B30'
];

window.addEventListener('mousemove', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
//    console.log(mouse);
})

window.addEventListener('resize', function(event) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    init()
 })

var x = Math.random() * innerWidth;
var y = Math.random() * innerHeight;
var dx = (Math.random() - 0.5) *3;
var dy = (Math.random() - 0.5) *3;
var radius = 20;



function Circle(x, y, dx, dy, radius){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

    this.draw = function(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        //ctx.strokeStyle = 'yellow';
        ctx.fillStyle = this.color;
        //ctx.stroke()
        ctx.fill();
    }

    this.update = function(){
        if(this.x+this.radius > innerWidth || this.x-this.radius < 0){
            this.dx = -this.dx;
        }
    
        if(this.y+this.radius > innerHeight || this.y-this.radius < 0){
            this.dy = -this.dy;
        }
    
        this.x += this.dx;
        this.y += this.dy;

        if(mouse.x - this.x < 50 && mouse.x - this.x > -50
            && mouse.y -this.y < 50 && mouse.y -this.y > -50 ){
                if(this.radius < maxRadius){
                    this.radius += 1;
                }
        }
        else if(this.radius > this.minRadius){
            this.radius -= 1;
        }
        
        this.draw();
    }
}


//console.log(circleArray);

//var circle = new Circle(200, 200, 3, 3, 30);
//circle.draw()

var circleArray = [];

function init() {
    circleArray =[];
    for(var i = 0; i < 500; i++){
        var x = Math.random() * (innerWidth-radius*2)+radius;
        var y = Math.random() * (innerHeight-radius*2)+radius;
        var dx = (Math.random() - 0.5) * 2;
        var dy = (Math.random() - 0.5) * 2;
        //var radius = 30;
        var radius = Math.random() * 5 + 1;
        circleArray.push(new Circle(x, y, dx, dy, radius));
    }
}

// Arc & circle
function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    for(var i =0; i < 500; i++){
        circleArray[i].update();
    }
//    circle.update();
    /*
    circle.draw();
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2*Math.PI, true);
    ctx.strokeStyle = 'blue';
    ctx.stroke();

    if(x+radius > innerWidth || x-radius < 0){
        dx = -dx;
    }

    if(y+radius > innerHeight || y-radius < 0){
        dy = -dy;
    }

    x += dx;
    y += dy;
*/
}
init();
animate();