let dniList = [];
const dniChars = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

document.onkeypress = init;

function init(event) {
    calculateDniNumberForChar(event.key.toUpperCase());
    printDniList();
}

function calculateDniNumberForChar(char) {
    dniList = [];
    document.getElementById('char').innerHTML = event.key.toUpperCase();

    for (let dni = 0; dni < 10000; dni++) {
        if (dniChars[dni%23] == char) {
            dniList.push(dni);
        }
    }
}

function printDniList() {
    document.getElementById('dni_list').innerHTML = '';
    dniList.forEach(dniNumber => {
        document.getElementById('dni_list').innerHTML += dniNumber + '<br>';
    });
}