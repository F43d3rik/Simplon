// Codez un script qui simule un manège qui fait 10 tours.

// Vous devez obtenir :

//     Le manège démarre
//     C'est le tour numéro 1
//     C'est le tour numéro 2
//     ...
//     C'est le tour numéro 10
//     Le manège s'arrête.

// Complétez votre code en demandant à l'utilisateur pour combien de ticket il veut rester sur le manège ...
// (Exemple : 3 tickets soit 3 fois 10 tours ...)

let ticket = Number(prompt('Combien de tickets voulez-vous?'));
let tours = ticket*10;

console.log(ticket, tours);

if (ticket != ticket || ticket == 0) {
    alert('Indiquez un nombre superieur a 0');
}

else {
    alert('Vous avez achete ' + ticket + ' tickets pour effectuer '+ tours + ' tours de manege' );
    
    document.write('Le manege demarre...<br>');

    for (let i = 1; i < tours; i++) {
        document.write('C\'est le tour numero ', i, '<br>');
    }

    document.write('Vous avez termine vos ' + tours + ' tours');
}