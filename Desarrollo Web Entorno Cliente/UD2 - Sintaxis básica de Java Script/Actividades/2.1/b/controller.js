let randomNumber = Math.random() * 100;
number = prompt("Introduce un número");

(randomNumber > number) ? max = randomNumber : max = number;

document.write("El número más grande es: " + max);
console.log("El número más grande es: " + max);
alert("El número más grande es: " + max);
