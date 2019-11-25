let ball = document.getElementById('ball');

function dragstart_handler(ev) {
    ev.dataTransfer.setData('ball', ev.target.id);
    ev.dataTransfer.dropEffect = 'move';
};


function dragover_handler(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = 'move';
};

function drop_handler(ev) {
    ev.preventDefault();
    ball.style.backgroundColor = 'purple';
    let data = ev.dataTransfer.getData('ball');
    ev.target.appendChild(document.getElementById(data));
};
