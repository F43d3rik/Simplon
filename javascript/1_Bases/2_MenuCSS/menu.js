let mainMenu = document.querySelectorAll('a');
let sousMenu = document.querySelectorAll('nav li ul');

mainMenu[0].addEventListener('click', function(){
    if (sousMenu[0].style.visibility == 'visible') {
        sousMenu[0].style.visibility = 'hidden';
    }
    else {
        sousMenu[0].style.visibility = 'visible';
        sousMenu[0].style.opacity = '1';
        sousMenu[0].style.transition = 'none';
        sousMenu[1].style.visibility = 'hidden';
        sousMenu[2].style.visibility = 'hidden';
        sousMenu[3].style.visibility = 'hidden';
    }
});


mainMenu[1].addEventListener('click',function(){
    if (sousMenu[1].style.visibility == 'visible') {
        sousMenu[1].style.visibility = 'hidden';
    }
    else {
        sousMenu[1].style.visibility = 'visible';
        sousMenu[1].style.opacity = '1';
        sousMenu[1].style.transition = 'none';
        sousMenu[0].style.visibility = 'hidden';
        sousMenu[2].style.visibility = 'hidden';
        sousMenu[3].style.visibility = 'hidden';
    }
});

mainMenu[2].addEventListener('click', function(){
    if (sousMenu[2].style.visibility == 'visible') {
        sousMenu[2].style.visibility = 'hidden';
    }
    else {
        sousMenu[2].style.visibility = 'visible';
        sousMenu[2].style.opacity = '1';
        sousMenu[2].style.transition = 'none';
        sousMenu[0].style.visibility = 'hidden';
        sousMenu[1].style.visibility = 'hidden';
        sousMenu[3].style.visibility = 'hidden';
    }
});

mainMenu[3].addEventListener('click', function(){
    if (sousMenu[3].style.visibility == 'visible') {
        sousMenu[3].style.visibility = 'hidden';
    }
    else {
        sousMenu[3].style.visibility = 'visible';
        sousMenu[3].style.opacity = '1';
        sousMenu[3].style.transition = 'none';
        sousMenu[0].style.visibility = 'hidden';
        sousMenu[1].style.visibility = 'hidden';
        sousMenu[2].style.visibility = 'hidden';
    }
});