let attempts = 0;
let number = null;
let randomNumber = Math.round(Math.random() * 100);
console.log(randomNumber);

do {
    number = prompt("Adivina el número");

    attempts++;
    if (number && number == randomNumber) {
        alert("Has acertado");
        document.write(attempts);
    } else if (number && number < randomNumber) {
        console.log("El número a adivinar es mayor");
    } else if (number && number > randomNumber) {
        console.log("El número a adivinar es menor");
    }
} while(number != randomNumber);