const canvas = document.getElementById("polygonCanvas");
const ctx = canvas.getContext("2d");

let cssWidth = window.innerWidth;
let cssHeight = window.innerHeight;

function resizeCanvas() {
    cssWidth = window.innerWidth;
    cssHeight = window.innerHeight;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = cssWidth * dpr;
    canvas.height = cssHeight * dpr;
    canvas.style.width = cssWidth + "px";
    canvas.style.height = cssHeight + "px";
    ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset transform
    ctx.scale(dpr, dpr);
}
resizeCanvas();

class Polygon {
    constructor(x, y, sides, size, speed) {
        this.x = x;
        this.y = y;
        this.sides = sides;
        this.size = size;
        this.speed = speed;
        this.rotation = Math.random() * Math.PI * 2;
    }

    draw() {
        ctx.beginPath();
        for (let i = 0; i < this.sides; i++) {
            const angle = (i / this.sides) * Math.PI * 2 + this.rotation;
            const px = this.x + Math.cos(angle) * this.size;
            const py = this.y + Math.sin(angle) * this.size;
            if (i === 0) {
                ctx.moveTo(px, py);
            } else {
                ctx.lineTo(px, py);
            }
        }
        ctx.closePath();
        ctx.strokeStyle = "white";
        ctx.lineWidth = 2;
        ctx.stroke();
    }

    update() {
        this.y += this.speed;
        this.rotation += 0.005;
        if (this.y - this.size > cssHeight) {
            this.y = -this.size;
            this.x = Math.random() * cssWidth;
            this.sides = Math.floor(Math.random() * 5) + 3;
            this.size = Math.random() * 30 + 10;
            this.speed = Math.random() * 2 + 1;
        }
        this.draw();
    }
}

const polygons = [];
for (let i = 0; i < 50; i++) {
    polygons.push(new Polygon(
        Math.random() * cssWidth,
        Math.random() * cssHeight,
        Math.floor(Math.random() * 5) + 3,
        Math.random() * 30 + 10,
        Math.random() * 2 + 1
    ));
}

function animate() {
    ctx.clearRect(0, 0, cssWidth, cssHeight);
    polygons.forEach(polygon => polygon.update());
    requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize", () => {
    resizeCanvas();
    polygons.forEach(polygon => {
        polygon.x = Math.random() * cssWidth;
        polygon.y = Math.random() * cssHeight;
    });
});