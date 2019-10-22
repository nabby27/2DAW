const completeState = 4;
let ajax = new XMLHttpRequest();

let text;
let randButton;
let horaButton;

function init() {
    randButton = document.getElementById('rand');
    horaButton = document.getElementById('hora');
    text = document.getElementById('text');

    randButton.addEventListener('click', getRandNumber);
    horaButton.addEventListener('click', getHour);
}

function getRandNumber() {
    makePetition('accion=rand');
}

function getHour() {
    makePetition('accion=hora');
}

function makePetition(parameters) {
    ajax.open('POST', 'ajax.php', true);
    ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    ajax.send(parameters);

    ajax.onreadystatechange = () => {
        if (ajax.readyState === completeState) {
            if (ajax.status == 200) {
                let response = ajax.responseText;
                text.innerHTML = response
            }
        }
    }
}
