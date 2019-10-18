let quizesJSON = '[' +
    '{' +
        '"id": 0,' +
        '"enunciado": "Cuantos son 10/2 ?",' +
        '"respuestas": {' +
            '"a": 5,' +
            '"b": 6,' +
            '"c": 9' +
        '},' +
        '"correcta": "a"' +
    '},' +
    '{' +
        '"id": 1,' +
        '"enunciado": "Cuantos son 8-2 ?",' +
        '"respuestas": {' +
            '"a": 5,' +
            '"b": 6,' +
            '"c": 9' +
        '},' +
        '"correcta": "b"' +
    '},' +
    '{' +
        '"id": 2,' +
        '"enunciado": "Cuantos son 10+2 ?",' +
        '"respuestas": {' +
            '"a": 5,' +
            '"b": 6,' +
            '"c": 12' +
        '},' +
        '"correcta": "c"' +
    '}' +
']';

window.onload = () => {
    quizes = JSON.parse(quizesJSON)

    quizes.forEach(quiz => {
        paintQuiz(quiz);
    });

    createButtonToCheck();
    
    button = document.getElementById('check');
    button.addEventListener('click', checkAnswers);
}

function paintQuiz(quiz) {
    let container_quiz = document.createElement('div');
    let question = document.createElement('p');
    question.innerHTML = quiz.enunciado;
    let answers = getAnswersElements(quiz);
    
    container_quiz.appendChild(question);
    answers.forEach(answer => {
        container_quiz.appendChild(answer);
    })

    document.body.appendChild(container_quiz);
}

function getAnswersElements(quiz) {
    let radio_buttons_elements = [];
    Object.keys(quiz.respuestas).forEach(answerKey => {
        let container = document.createElement('span');
        let label = document.createElement('label');
        let option = document.createElement('input');
        option.setAttribute('type', 'radio');
        option.setAttribute('value', answerKey);
        option.setAttribute('name', 'option_' + quiz.id);
        label.innerHTML = quiz.respuestas[answerKey];
        container.appendChild(label);
        container.appendChild(option);
        radio_buttons_elements.push(container);
    })

    return radio_buttons_elements;
}

function createButtonToCheck() {
    let button = document.createElement('button');
    button.setAttribute('id', 'check');
    button.innerHTML = 'Comprobar';
    document.body.appendChild(button);
}

function checkAnswers() {
    let answersSelected = getAnswerSelected();
    let allCorrect = true;
    for (let index = 0; index < answersSelected.length; index++) {
        if (answersSelected[index] !== quizes[index].correcta) {
            allCorrect = false;
        }
    }
    
    if (allCorrect) {
        alert('Todas correctas');
    } else {
        alert('Has fallado alguna');
    }
}

function getAnswerSelected() {
    let answers = document.getElementsByTagName('input');
    let answersSelected = []
    for (let index = 0; index < answers.length; index++) {
        if (answers[index].checked) {
            answersSelected.push(answers[index].value);
        }
    }

    return answersSelected;
}