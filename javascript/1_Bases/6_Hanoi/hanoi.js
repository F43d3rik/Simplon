let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let x;
let y;
let w;
let h;
let drag = false;

function draw() {
    // construction de la base
    ctx.fillStyle = 'grey';
    ctx.fillRect(0, 90, 300, 10);
    ctx.fillRect(60, 40, 10, 50);
    ctx.fillRect(228, 40, 10, 50);
    ctx.fillRect(141, 40, 10, 50);

    // Injection des cercles
    base01();
    base02();
    base03();
};

function base01(x, y, w, h) {
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.fillRect(40, 80, 50, 10)
    ctx.closePath();
    ctx.fill();
    clear();
}

function base02(x, y, w, h) {
    ctx.beginPath();
    ctx.fillStyle = "yellow";
    ctx.fillRect(45, 70, 40, 10)
    ctx.closePath();
    ctx.fill();
    clear();
}

function base03(x, y, w, h) {
    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.fillRect(50, 60, 30, 10)
    ctx.closePath();
    ctx.fill();
    clear();
}


function clear() {
    ctx.clearRect(0, 0, w, h);
}

function init() {

    return setInterval(draw, 100);
    clear();
}



function myMove(e) {
    if (drag) {
        x = e.pageX - canvas.offsetLeft;
        y = e.pageY - canvas.offsetTop;
    }
}

function myDown(e) {
    if (e.pageX < x + 15 + canvas.offsetLeft && e.pageX > x - 15 +
        canvas.offsetLeft && e.pageY < y + 15 + canvas.offsetTop &&
        e.pageY > y - 15 + canvas.offsetTop) {
        x = e.pageX - canvas.offsetLeft;
        y = e.pageY - canvas.offsetTop;
        drag = true;
        canvas.onmousemove = myMove;
    }
}

function myUp() {
    drag = false;
    canvas.onmousemove = null;
}

init();
canvas.onmousedown = myDown;
canvas.onmouseup = myUp;