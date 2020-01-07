// Traitement image aside
let chuck = document.querySelector('div');

chuck.onmouseover = function () {
    this.style.borderRadius = '10px';
};

chuck.onmouseleave = function () {
    this.style.borderRadius = '50%';
};

// Développement des fleches
let header = document.querySelectorAll('article > header');

header.forEach(function (item) {
    let dev = item.nextElementSibling;
    item.addEventListener('click', function () {
        if (dev.style.visibility == 'visible') {
            dev.style.visibility = 'hidden';
            dev.style.height = '0';
        }
        else {
            dev.style.visibility = 'visible';
            dev.style.height = 'auto';
        }
    });
});

// Menus

let menu = './data/menu.json'
let request = new XMLHttpRequest();

request.open('GET', menu, true);

request.addEventListener("load", function () {
    if (request.status >= 200 && request.status < 400) {

        let menu = JSON.parse(request.responseText);

        let main = menu.principal;
        let footer = menu.pied;
        let tete = document.querySelector('nav');
        let foot = document.querySelector('footer');

        main.forEach(function (el) {
            let lien = document.createElement('a');
            lien.textContent = el.nom;
            tete.appendChild(lien);
        });


        footer.forEach(function (el) {
            let lien = document.createElement('a');
            lien.textContent = el.nom;
            foot.appendChild(lien);
        });


        // let sous = menu.principal[1].sousmenus;
        // let sub = document.querySelector('nav a:nth-child(2)');

        // sous.forEach(function (el) {
        //     let min = document.createElement('div');
        //     min.textContent = el.nom;
        //     sub.appendChild(min);
        // });

    }

    else {
        alert(`Erreur type ${request.status}`);
    }
}),

    request.send(null);