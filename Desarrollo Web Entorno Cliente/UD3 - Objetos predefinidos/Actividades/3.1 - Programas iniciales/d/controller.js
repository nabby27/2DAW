let validNumbers = [];

function start() {
    inputNumber = getNumber();
    calculateNumbers(inputNumber);
    wantToSee = confirm('There are ' + validNumbers.length + ' numbers, Do you want to see it');
    if (wantToSee) {
        validNumbers.forEach(number => {
            document.write(number + '<br>');
        });
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

function isPalindrome(number) {
    palidrome = false;
    number = number.toString();
    numberReverse = number.split('').reverse().join('');
    if (number == numberReverse) {
        palidrome = true;
    }
    
    return palidrome;
}

function isPrime(number) {
    prime = true;
    for (let divisor = 2; divisor < number; divisor++) {
        if (number % divisor == 0) {
            prime = false;
        }
    }
    
    return prime;
}
