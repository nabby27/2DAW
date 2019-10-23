const completeState = 4;
let ajax = new XMLHttpRequest();

let data;
let button;
let input;

function init() {
    input = document.getElementById('input');
    data = document.getElementById('data');

    input.addEventListener('change', makePetition);

    getData()
}

function makePetition() {
    let year = input.value;
    data.innerHTML = '';
    getData(year);
}

function getData(year) {
    if (year == undefined || year == '') year = 2018;
    ajax.open('GET', 'http://dades.eicub.net/api/1/festivals-assistents?Any=' + year, true);
    ajax.send();

    ajax.onreadystatechange = () => {
        if (ajax.readyState === completeState) {
            if (ajax.status == 200) {
                let response = JSON.parse(ajax.responseText);
                paintResponse(response);
            }
        }
    }
}

function paintResponse(response) {

    let ul = document.createElement('ul');
    response.forEach(element => {
        let li = document.createElement('li');
        let a = document.createElement('a');
        if (element.Web != null) {
            a.setAttribute('href', element.Web);
        }
        a.innerHTML = element.Nom_activitat + ' - ' + element.Assistents;
        li.appendChild(a);
        ul.appendChild(li);
    });

    data.appendChild(ul);
    // fields = ['Ambit', 'Any', 'Assistents', 'Espai', 'Nom_activitat', 'Web'];
    
    // let table = document.createElement('table');
    // table.setAttribute('border', '1');

    // paintHeader(table, fields);
    // paintRows(response, table, fields);

    // data.appendChild(table);
}


