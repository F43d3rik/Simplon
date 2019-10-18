//***** EXERCICE 1 *****\\

//On récupère les elements principaux:
let main = document.querySelector('body');
let div = document.querySelector('div');

//On change la couleur et le positionnement du texte:
div.style.color = 'blue';
div.style.margin = '50px';

//On crée une balise avec du texte
let div2 = document.createElement('div');
div2.textContent = 'Il y a du texte dans une nouvelle div';

//On inverse les contenus des balises en stockant la première div dans une variable:
let inversion = div.textContent;

div.textContent = div2.textContent;
div2.textContent = inversion;

//On ajoute la deuxième div
main.appendChild(div2);

// Alignement des div(s)
div2.style.margin = "50px";
main.style.display="flex";

// Changement de l'ordre des div(s) (cas échéant):
// main.style.flexDirection="row-reverse";