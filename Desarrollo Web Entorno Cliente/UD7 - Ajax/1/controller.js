const completeState = 4;
let ajax = new XMLHttpRequest();
let div;
let button;

function init() {
    div = document.getElementById('container');
    button = document.getElementById('button');

    button.addEventListener('click', makePetition);
}

function makePetition() {
    ajax.onreadystatechange = () => {
        if (ajax.readyState === completeState) {
            if (ajax.status == 200) {
                objResponse = JSON.parse(ajax.responseText);
                if (div.innerHTML == objResponse.message) {
                    div.innerHTML = objResponse.mas_texto
                } else {
                    div.innerHTML = objResponse.message
                }
            }
        }
    }

    ajax.open('GET', 'holamundo.json', true);
    ajax.send();
}