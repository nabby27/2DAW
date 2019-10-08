const ROWS = 100;
const COLUMNS = 100;
let body;
let table;
let calculateAlmostPrimeButton;

function init() {
    body = document.getElementsByTagName('body')[0];
    calculateAlmostPrimeButton = document.getElementById('calculateAlmostPrime');

    calculateAlmostPrimeButton.addEventListener('click', calculateAlmostPrime);

    createTable();
}

function createTable() {
    table = document.createElement('table');
    let value = 0;
    for (let row = 0; row < ROWS; row++) {
        let tr = document.createElement('tr');
        for (let column = 0; column < COLUMNS; column++) {
            value++;
            let td = document.createElement('td');
            td.innerHTML = value;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

    body.appendChild(table);
}

function calculateAlmostPrime() {
    for (let row = 0; row < table.rows.length; row++) {
        for (let column = 0; column < table.rows[row].cells.length; column++) {
            if (isAlmostPrime(table.rows[row].cells[column].innerHTML)) {
                table.rows[row].cells[column].style.background = 'yellow';
            }
        }
    }
}

function isAlmostPrime(numberToCheck) {
    let count = 0;
    for (let number = 2; number < numberToCheck; number++) {
        if (numberToCheck % number == 0) {
            count++
        }
    }

    return count < 2 && count > 0;
}