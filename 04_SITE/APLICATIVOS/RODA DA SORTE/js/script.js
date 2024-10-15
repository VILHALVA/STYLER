const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const width = canvas.width;
const height = canvas.height;
const centerX = width / 2;
const centerY = height / 2;
const radius = width / 2;
let speed = 0;
let maxRotation = randomRange(360 * 3, 360 * 6); 
let pause = false; 
let items = document.getElementsByTagName("textarea")[0].value.split("\n");
let currentDeg = 0;
let step = 360 / items.length; 
let colors = [];
let itemDegs = {};

function toRad(deg) {
    return deg * (Math.PI / 180.0);
}

function easeOutSine(x) {
    return Math.sin((x * Math.PI) / 2);
}

function randomColor() {
    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);
    return {r, g, b}
}

function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getPercent(input, min, max) {
    return (((input - min) * 100) / (max - min)) / 100;
}

function createWheel() {
    items = document.getElementsByTagName("textarea")[0].value.split("\n");
    step = 360 / items.length;
    colors = [];
    for (let i = 0; i < items.length + 1; i++) {
        colors.push(randomColor());
    }
    draw();
}

for (let i = 0; i < items.length + 1; i++) {
    colors.push(randomColor());
}

function draw() {
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, toRad(0), toRad(360));
    ctx.fillStyle = `rgb(${33},${33},${33})`; 
    ctx.lineTo(centerX, centerY);
    ctx.fill();

    let startDeg = currentDeg;

    for (let i = 0; i < items.length; i++, startDeg += step) {
        let endDeg = startDeg + step;
        color = colors[i];
        let colorStyle = `rgb(${color.r},${color.g},${color.b})`;
        ctx.beginPath();
        rad = toRad(360 / step);
        ctx.arc(centerX, centerY, radius - 2, toRad(startDeg), toRad(endDeg));
        let colorStyle2 = `rgb(${color.r - 30},${color.g - 30},${color.b - 30})`;
        ctx.fillStyle = colorStyle2;
        ctx.lineTo(centerX, centerY);
        ctx.fill();
        ctx.beginPath();
        rad = toRad(360 / step);
        ctx.arc(centerX, centerY, radius - 30, toRad(startDeg), toRad(endDeg));
        ctx.fillStyle = colorStyle;
        ctx.lineTo(centerX, centerY);
        ctx.fill();
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(toRad((startDeg + endDeg) / 2));
        ctx.textAlign = "center";

        if (color.r > 150 || color.g > 150 || color.b > 150) {
            ctx.fillStyle = "#000"; 
        } 
        else {
            ctx.fillStyle = "#fff"; 
        }

        ctx.font = 'bold 24px serif';
        ctx.fillText(items[i], 130, 10);
        ctx.restore();

        itemDegs[items[i]] = {
            "startDeg": startDeg,
            "endDeg": endDeg
        };

        if (startDeg % 360 < 360 && startDeg % 360 > 270 && endDeg % 360 > 0 && endDeg % 360 < 90) {
            document.getElementById("Ganhador").innerHTML = items[i];
        }
    }
}

function spin() {
    if (speed !== 0) {
        return;
    }

    speed = 0;
    pause = false;

    maxRotation = randomRange(360 * 3, 360 * 6); 
    currentDeg = 0;

    createWheel();
    draw();
    window.requestAnimationFrame(animate);
}

function animate() {
    if (pause) {
        return;
    }
    speed = easeOutSine(getPercent(currentDeg, maxRotation, 0)) * 20;

    if (speed < 0.01) {
        speed = 0;
        pause = true; 
        return;
    }

    currentDeg += speed;
    draw();
    window.requestAnimationFrame(animate);
}

draw();
