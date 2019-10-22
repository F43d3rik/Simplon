//***** EXERCICE 3 *****\\

let main = document.querySelector('body');
let maDiv = document.createElement('div');

console.log(maDiv);

let variable = maDiv.id = 'monId'

console.log(variable);

maDiv.className = 'maClass';
maDiv.textContent = 'Je ne comprends pas vraiment bien le but de cet exercice';
maDiv.style.color = 'blue';
maDiv.style.textAlign = 'center';
maDiv.style.marginTop= '50vh'
maDiv.style.transform= 'translate-Y:50%';

main.appendChild(maDiv);
