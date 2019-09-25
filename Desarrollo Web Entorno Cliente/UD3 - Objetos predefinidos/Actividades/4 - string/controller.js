let validNumbers = [];

function start() {
    let inputNumber = getNumber();
    calculateNumbers(inputNumber);
    let wantToSee = confirm('There are ' + validNumbers.length + ' numbers, Do you want to see it');
    if (wantToSee) {
        printValidNumbers();
    }
}

function getNumber() {
    return document.getElementById('number').value;
}

function calculateNumbers(inputNumber) {
    validNumbers = [];
    for (let number = 0; number <= inputNumber; number++) {
        if (isPalindrome(number) && isPrime(number)) {
            validNumbers.push(number);
        }
    }
}

function printValidNumbers() {
    document.getElementById('validNumbers').innerHTML = '';
    validNumbers.forEach(number => {
        document.getElementById('validNumbers').innerHTML += number + '<br>';
    });
}

function isPalindrome(number) {
    let isPalidrome = false;
    number = number.toString();
    let numberReverse = number.split('').reverse().join('');
    if (number == numberReverse) {
        isPalidrome = true;
    }
    
    return isPalidrome;
}

function isPrime(number) {
    let isPrime = true;
    for (let divisor = 2; divisor < number; divisor++) {
        if (number % divisor == 0) {
            isPrime = false;
        }
    }
    
    return isPrime;
}
