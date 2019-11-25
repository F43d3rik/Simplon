let body = document.querySelector('body');
let canvas = document.createElement('canvas');
canvas.style.border = '1px solid black';

let ctx = canvas.getContext('2d');

let abricot = new Image();
abricot.src = './images/abricot.png';
abricot.onload = function () {
    ctx.drawImage(abricot, 50, 20, 50, 50);
}

let cerises = new Image();
cerises.src = './images/cerises.png';
cerises.onload = function () {
    ctx.drawImage(cerises, 100, 20, 50, 50);
}

let mangue = new Image();
mangue.src = './images/mangue.png';
mangue.onload = function () {
    ctx.drawImage(mangue, 150, 20, 50, 50);
}

let olive = new Image();
olive.src = './images/olive.png';
olive.onload = function () {
    ctx.drawImage(olive, 200, 20, 50, 50);
}

let poire = new Image();
poire.src = './images/poire.png';
poire.onload = function () {
    ctx.drawImage(poire, 50, 80, 50, 50);
}


let pommeR = new Image();
pommeR.src = './images/pomme_rouge.png';
pommeR.onload = function () {
    ctx.drawImage(pommeR, 100, 80, 50, 50);
}

let pomme = new Image();
pomme.src = './images/pomme.png';
pomme.onload = function () {
    ctx.drawImage(pomme, 150, 80, 50, 50);
}

let prune = new Image();
prune.src = './images/prune.png';
prune.onload = function () {
    ctx.drawImage(prune, 200, 80, 50, 50);
}


body.appendChild(canvas);


