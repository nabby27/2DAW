let quizJSON = '{' +
    '"id": 0,' +
    '"enunciado": "Cuantos son 10/2 ?",' +
    '"respuestas": {' +
        '"a": 5,' +
        '"b": 6,' +
        '"c": 9' +
    '},' +
    '"correcta": "a"' +
'}';

quiz = JSON.parse(quizJSON)
console.log(quiz.enunciado);

Object.keys(quiz.respuestas).forEach((opcion) => {
    console.log(opcion + ') ' + quiz.respuestas[opcion])
})

console.log('La opción corrcta es la: ' + quiz.correcta)
