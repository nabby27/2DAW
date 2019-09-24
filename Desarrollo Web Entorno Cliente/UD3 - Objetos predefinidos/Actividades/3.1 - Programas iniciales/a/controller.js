const dniChars = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
let allCharsInput = [];
const interval = setInterval("start()", 20000);

function start() {
    let inputNumber = getDniNumber();
    if (inputNumber == '-1') {
        clearInterval(interval);
        showAllCharsSaved();
    } else {
        calculateAndSaveDniChar(inputNumber);
    }
}

function getDniNumber() {
    dni = prompt("Input your DNI or -1:");
    return parseInt(dni.substring(0, 8));
}

function showAllCharsSaved() {
    alert(allCharsInput);
}

function calculateAndSaveDniChar(inputNumber) {
    let dniCharCalculated = dniChars[inputNumber%23];
    allCharsInput.push(dniCharCalculated);
}
