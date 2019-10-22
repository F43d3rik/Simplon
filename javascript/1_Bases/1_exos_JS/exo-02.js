//***** EXERCICE 2 *****\\

//On récupère les elements principaux:
let main = document.querySelector('body');

// Ajout de 3 div(s) contenant du texte:
let divExo21 = document.createElement('div');
let divExo22 = document.createElement('div');
let divExo23 = document.createElement('div');

divExo21.textContent = 'Il y a du rouge dedans';
divExo21.style.color = 'red';
divExo22.textContent = 'Il y a du vert dedans';
divExo22.style.color = 'green';
divExo23.textContent = 'Il y a du bleu dedans';
divExo23.style.color = 'blue';
main.appendChild(divExo21);
main.appendChild(divExo22);
main.appendChild(divExo23);

// Alignement des div(s)
main.style.display = 'flex';
main.style.justifyContent = 'space-around';