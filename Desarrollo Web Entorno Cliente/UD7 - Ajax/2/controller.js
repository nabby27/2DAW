const completeState = 4;
let ajax = new XMLHttpRequest();
let div;
let button;

function init() {
    div = document.getElementById('container');

    getOptions()
}

function getOptions() {
    ajax.onreadystatechange = () => {
        if (ajax.readyState === completeState) {
            if (ajax.status == 200) {
                let objResponse = JSON.parse(ajax.responseText);
                createSelect(objResponse);
            }
        }
    }

    ajax.open('GET', 'provincias.json', true);
    ajax.send();
}

function createSelect(json) {
    let select = document.createElement('select');
    select.addEventListener('change', pintValueSelected);
    
    select.setAttribute('id', 'select');
    select.setAttribute('name', 'provincias');

    json.provincias.forEach(provincia => {
        let option = document.createElement('option');
        option.innerHTML = provincia.nom;
        option.setAttribute('value', provincia.cp);

        select.appendChild(option);
    });

    div.appendChild(select);
}

function pintValueSelected() {
    let select = document.getElementById('select');
    let div = document.getElementById('selected');

    let selectedOption = select.options[select.options.selectedIndex]; 

    div.innerHTML = selectedOption.text + ' ' + selectedOption.value;
}