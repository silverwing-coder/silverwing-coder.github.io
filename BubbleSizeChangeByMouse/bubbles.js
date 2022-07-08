const frameheight = 200;
const maxRadius = 40;
const minRadius = 2;

const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth - 40;
canvas.height = frameheight;

let ctx = canvas.getContext("2d");

let mouse = {
    x: undefined,
    y: undefined,
};

let colorArray = ["#C1D6D9", "#01261F", "#F2B705", "#BF9460", "#8C5B30"];

window.addEventListener("mousemove", function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
});

window.addEventListener("resize", function (event) {
    canvas.width = window.innerWidth - 40;
    canvas.height = frameheight;

    init();
});

let x;
let y;
let dx;
let dy;
let radius;

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

    this.draw = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        //ctx.strokeStyle = 'yellow';
        ctx.fillStyle = this.color;
        //ctx.stroke()
        ctx.fill();
    };

    this.update = function () {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }

        if (this.y + this.radius > 200 || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        if (
            mouse.x - this.x < 50 &&
            mouse.x - this.x > -50 &&
            mouse.y - this.y < 50 &&
            mouse.y - this.y > -50
        ) {
            if (this.radius < maxRadius) {
                this.radius += 1;
            }
        } else if (this.radius > this.minRadius) {
            this.radius -= 1;
        }

        this.draw();
    };
}

let circleArray = [];

function init() {
    circleArray = [];
    for (let i = 0; i < 200; i++) {
        x = Math.random() * (innerWidth - radius * 2) + radius;
        y = Math.random() * (frameheight - radius * 2) + radius;
        dx = (Math.random() - 0.5) * 2;
        dy = (Math.random() - 0.5) * 2;
        //var radius = 30;
        radius = Math.random() * 5 + 1;
        circleArray.push(new Circle(x, y, dx, dy, radius));
    }
}

// Arc & circle
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, frameheight);
    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
}

init();
animate();
