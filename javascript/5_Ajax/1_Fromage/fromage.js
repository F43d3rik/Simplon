//Requetage

let cheese = 'modele/fromages.json';

// Creation requete
let request = new XMLHttpRequest();


// Ciblage asynchrone
request.open('GET', cheese, true);


//Call Back
request.addEventListener("load", function () {
    if (request.status >= 200 && request.status < 400) {
        let fromages = JSON.parse(request.responseText);


        let body = document.querySelector('body');
        body.style.margin = '0px';
        body.style.backgroundImage = 'url(./cheese_background.jpg)';
        body.style.backgroundRepeat = 'no-repeat';
        body.style.backgroundSize = 'cover';

        let blocTitre = document.createElement('div');
        let grandTitre = document.createElement('h1');
        grandTitre.textContent = 'Les meilleurs fromages du monde';
        grandTitre.style.color = 'white';
        blocTitre.appendChild(grandTitre);
        blocTitre.style.transform = 'rotate(-90deg)';
        blocTitre.style.transformOrigin = '110vh';
        blocTitre.style.display = 'flex';


        body.appendChild(blocTitre);




        let main = document.createElement('section');
        main.style.position = 'relative';
        body.appendChild(main);


        fromages.forEach(el => {
            let cadre = document.createElement('div');
            let titre = document.createElement('h3');
            let classement = document.createElement('h4');
            let note = parseInt(el.classement);
            let type = document.createElement('p');
            let star = "★";


            cadre.style.border = '1px solid black';
            cadre.style.backgroundColor = 'white';
            cadre.style.margin = '30px 30px 30px 60vw';
            cadre.style.padding = '0px 0px 0px 10px';
            cadre.style.boxShadow = '2px 2px 5px 0px rgba(97,97,97,1)';
            cadre.style.overflow = 'hidden';


            titre.textContent = el.nom;
            classement.textContent = star.repeat(note);
            classement.style.color = 'orange';
            classement.style.textShadow = '0px 0px 1px  black';
            
            type.textContent = `Type :  ${el.type} / Pays : ${el.pays}`;

            main.appendChild(cadre);
            cadre.appendChild(titre);
            cadre.appendChild(classement);
            cadre.appendChild(type);



        });
    }

    else {
        alert(`Erreur ${request.status}`);
    }
}),

    //Envoi
    request.send(null);




