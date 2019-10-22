let titre = document.querySelector('h1');
titre.style.display = 'inline-block';


let doc = document.querySelector('body');
doc.style.textAlign = "center";

titre.onmouseenter = function(){
    this.style.color = 'red';
    this.style.cursor = 'pointer';
};

titre.onmouseleave = function(){
    this.style.color = 'inherit';
};