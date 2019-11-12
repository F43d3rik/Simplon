    let horloge = new Date();

    let time = horloge.getSeconds() + 60 * horloge.getMinutes() + 3600 * horloge.getHours();

    let seconde = document.getElementById('trotteuse');
    let minute = document.getElementById('minute');
    let heure = document.getElementById('heure');

// Recupère l'heure au chargement de la page
    seconde.style.transform = 'rotate(' + (time * 6) + 'deg)';
    minute.style.transform = 'rotate(' + Math.round(time / 10) + 'deg)';
    heure.style.transform = 'rotate(' + Math.round(time / 120) + 'deg)';
    
// Mise à jour de l'heure toutes les secondes
    setInterval(function () {    
        time++;
        seconde.style.transform = 'rotate(' + (time * 6) + 'deg)';
        minute.style.transform = 'rotate(' + Math.round(time / 10) + 'deg)';
        heure.style.transform = 'rotate(' + Math.round(time / 120) + 'deg)';

    }, 1000);




