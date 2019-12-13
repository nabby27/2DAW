let regalo1;
let regalo2;
let regalo3;
let enviar_carta;
let cartas;
let fecha;

window.onload = () => {
    init();
}

function init() {
    getElements();
    validateCardForm();
    updateVisualListCards();
}

function getElements() {
    regalo1 = document.getElementById('regalo1');
    regalo2 = document.getElementById('regalo2');
    regalo3 = document.getElementById('regalo3');
    enviar_carta = document.getElementById('enviar_carta');
    cartas = document.getElementById('cartas');
    fecha = document.getElementById('fecha');
}

function saveCardOnCookie(card) {
    let cards = getCardsFromCookie();
    cards.push(card);
    setCookie('cards', JSON.stringify(cards), 1);
    updateVisualListCards();
}

function removeCardForCookie() {
    let cards = getCardsFromCookie();
    cards.splice(cards.length - 1, 1);
    setCookie('cards', JSON.stringify(cards), 1);
    updateVisualListCards();
}

function updateVisualListCards() {
    let cards = getCardsFromCookie();
    html = '';
    cards.forEach(card => {
        html += '<div id="' + cards.indexOf(card) + '" class="carta">' + card.regalo1 + ' - ' + getStarsForPriority(card.preferencia1) + ' - ' + 
            card.regalo2 + ' - ' + getStarsForPriority(card.preferencia2) + ' - ' + 
            card.regalo3 + ' - ' + getStarsForPriority(card.preferencia3) + '</div>';
    })

    $('#cartas').html(html);

    addListeners(cards);
}

function addListeners(cards) {
    cards.forEach(function (card) {
        $('#' + cards.indexOf(card)).mouseenter(function () {
            $('#fecha').html(new Date(card.fecha).toLocaleDateString() + ' ' + new Date(card.fecha).toLocaleTimeString());
        });

        $('#' + cards.indexOf(card)).mouseleave(function () { 
            $('#fecha').html('');
        });
    })
}

function getStarsForPriority(priority) {
    let stars = '';
    for (let index = 0; index < priority; index++) {
        stars += '*';
    }

    return stars;
}

function sendCard(card) {
    $.ajax({
        type: "POST",
        url: "./recibo_carta.php",
        dataType: 'json',
        data: card,
        success: (response, status, header) => {
            if (response) {
                alert('Carta enviada el día ' + card.fecha.toLocaleDateString() + ' a las ' + card.fecha.toLocaleTimeString())
            } else {
                alert('No se ha podido enviar la carta')
                removeCardForCookie();
            }
        },
        error: (header, status, error) => {

        },
        complete: (header, status) => {

        }
    });
}

$.validator.addMethod('checkStars', function(valor, elemento, arg) {
    return getSelectedOptionFor('preferencia1') + getSelectedOptionFor('preferencia2') + getSelectedOptionFor('preferencia3') < 6;
}, 'Default message error');

function validateCardForm() {
    $('#carta').validate({
        rules: {
            regalo1: { 
                required: true,
                checkStars: true
            },
            regalo2: {
                required: true,
                checkStars: true
            },
            regalo3: {
                required: true,
                checkStars: true
            }
        },
        messages: {
            regalo1: {
                required: 'HO, HO, HO, elije un regalo',
                checkStars: 'No puedes elegir mas de 5 estrellas'
            },
            regalo2: {
                required: 'HO, HO, HO, elije un regalo',
                checkStars: 'No puedes elegir mas de 5 estrellas'
            },
            regalo3: {
                required: 'HO, HO, HO, elije un regalo',
                checkStars: 'No puedes elegir mas de 5 estrellas'
            }
        },
        submitHandler: function(form) {
            let card = {
                regalo1: regalo1.value,
                regalo2: regalo1.value,
                regalo3: regalo1.value,
                preferencia1: getSelectedOptionFor('preferencia1'),
                preferencia2: getSelectedOptionFor('preferencia2'),
                preferencia3: getSelectedOptionFor('preferencia3'),
                fecha: new Date()
            }
            saveCardOnCookie(card);
            sendCard(card);
        }
    })
}

function getCardsFromCookie() {
    cardsAsString = getCookie('cards');
    if (cardsAsString) {
        return cards = JSON.parse(getCookie('cards'));
    }

    return [];
}

function getSelectedOptionFor(nameOfSelect) {
    const radioButtons = document.getElementsByName(nameOfSelect)
    let index = 0;
    let optionSelected;
    while (index < radioButtons.length && !optionSelected) {
        if(radioButtons[index].checked) {
            optionSelected = radioButtons[index];
        }
        index++;
    }

    if (optionSelected) {
        return parseInt(optionSelected.value);
    } else {
        return 0;
    }
}