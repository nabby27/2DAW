let selectPartidos;
let divMayoria;
let divPactometro;
let divTotal;
let divEscanos;

let pactometro;

window.onload = function() {
    init(); // empieza el programa cuando cargue la ventana del navegador
}

function init() {
    getElements();

    totalEscanos = 0;
    pactometro = [];

    selectPartidos.addEventListener('change', addValueToPactometro);
    buttonLimpiar.addEventListener('click', clearPactometro);
}

// coge los elementos del dom y los guarda en variables
function getElements() {
    selectPartidos = document.getElementById('partidos');
    buttonLimpiar = document.getElementById('limpiar');
    divMayoria = document.getElementById('mayoria');
    divPactometro = document.getElementById('pactometro');
    divTotal = document.getElementById('total');
    divEscanos = document.getElementById('escanos');
}

// añadimos valores al pactometro
function addValueToPactometro(event) {
    [partido, color, escanos] = getDataFormSelectedOption(event);

    if (!existPartidoOnPactometro(partido)) {
        pactometro.push({text: partido, escanos: escanos});
        generateSpanOnPactometro(partido, escanos, color);
        incrementTotalValue(escanos);
    }
}

function getDataFormSelectedOption(event) {
    optionSelected = event.currentTarget.selectedOptions[0];
    partido = optionSelected.innerHTML;
    color = optionSelected.attributes['value'].value;
    escanos = parseInt(optionSelected.attributes['escanyos'].value);

    return [partido, color, escanos];
}

function existPartidoOnPactometro(partidoSelected) {
    exist = false;

    pactometro.forEach(partido => {
        if (partido.text === partidoSelected) {
            exist = true;
        }
    });

    return exist;
}

function generateSpanOnPactometro(partido, escanos, color) {
    span = document.createElement('span');
    span.setAttribute("class", color);
    span.setAttribute("style", "width:" + (escanos*2) + 'px');
    span.innerHTML = partido;
    divPactometro.appendChild(span);

    addListenerToSpan(span);
}

function addListenerToSpan(span) {
    span.addEventListener('click', removePartidoOnPactometro);
    span.addEventListener('mouseenter', showEsanos);
    span.addEventListener('mouseleave', hideEsanos);
}

function removePartidoOnPactometro(e) {
    partidoClick = e.currentTarget.innerHTML;
    partido = pactometro.filter(partido => partido.text === partidoHover)[0];
    spans = document.getElementsByTagName('span');

    for (const index in spans) {
        if (partidoClick === spans[index].innerHTML) {
            spans[index].remove();

            // remove of array pactometro
            for (let index = 0; index < pactometro.length; index++) {
                if (pactometro[index].text === partidoClick) {
                    decrementTotalValue(pactometro[index].escanos)
                    pactometro.splice(index, 1);
                }
            }
        }
    }
}

function showEsanos(e) {
    partidoHover = e.currentTarget.innerHTML;
    partido = pactometro.filter(partido => partido.text === partidoHover)[0];
    divEscanos.innerHTML = "Escaños: " + partido.escanos;
}

function hideEsanos() {
    divEscanos.innerHTML = "";
}

function incrementTotalValue(escanos) {
    totalEscanos += escanos;
    updateTotal();
}

function decrementTotalValue(escanos) {
    totalEscanos -= escanos;
    updateTotal();
}

function updateTotal() {
    divTotal.innerHTML = "Total: " + totalEscanos;
}

function clearPactometro() {
    totalEscanos = 0;
    pactometro = [];
    divEscanos.innerHTML = "";
    divPactometro.innerHTML = "";
    divTotal.innerHTML = "";
}