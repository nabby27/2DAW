firstNumber = parseInt(prompt("Introduce el primer número"));
secondNumber = parseInt(prompt("Introduce el segundo número"));

result = this.sum(firstNumber, secondNumber);

alert("El resultado de " + firstNumber + " + " + secondNumber + " es: " + result);

function sum(numberOne, numberTwo) {
    return numberOne + numberTwo;
}
