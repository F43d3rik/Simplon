//***** EXERCICE 4 *****\\

let main = document.querySelector('body');

// On se sert du constructeur... Easy!
let monImage = new Image();
monImage.src = './img3.jpg';
monImage.style.position = 'fixed';
monImage.style.top = '0px';
monImage.style.left = '0px';
monImage.style.width = '100%';

console.log(monImage);

main.appendChild(monImage);

// Ajout de l'evennement onclick
monImage.addEventListener('click', change);

// On initialize l'état
let state = false;

function change() {
    if (state !== false) {
        monImage.src = './img3.jpg';
        state = false;
    }
    else {
        monImage.src = './img4.jpg';
        state = true;
    } 
}