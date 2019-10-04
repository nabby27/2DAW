let numOfCircles = 9;
let circleIdPrefix = 'circulo_';

let board = {}

let intervalTimmer;
let time = 0;

function pintoCirculoRojo() {
    initBoard();
    startTimmer();
    randomCircleNumberSelected = getRandomCircleNumber();
    setOnlySelectedCircleToTrueAndPaint(randomCircleNumberSelected)
}

function startTimmer() {
    time = 0;
    intervalTimmer = setInterval(() => {
        time++;
        showTime();
        checkTimeToEnd();
    }, 100);
}

function checkTimeToEnd() {
    if ((time / 10) == 3) {
        reset();
        alert('Han pasado 3 segundos');
    }
}

function clickCircle(event) {
    circleClicked = event.target.id
    checkCorrectCircleClicked();
    reset();
}

function checkCorrectCircleClicked() {
    if (!board[circleClicked]) {
        reset();
        alert('Ese circulo no es el correcto');
    }
}

function showTime() {
    document.getElementById('cronometro').innerHTML = (time / 10);
}

function getRandomCircleNumber() {
    return Math.floor(Math.random() * numOfCircles);
}

function setOnlySelectedCircleToTrueAndPaint(numOfCircle) {
    let id = circleIdPrefix + numOfCircle + '';
    initBoard();
    board[id] = true;
    document.getElementById(id).className = 'objetivo';
}

function reset() {
    initBoard();
    clearInterval(intervalTimmer);
    pintoCirculoRojo();
}

function initBoard() {
    for (let circleNum = 0; circleNum < numOfCircles; circleNum++) {
        let id = circleIdPrefix + circleNum;
        board[id] = false;
        document.getElementById(id).addEventListener('click', clickCircle);
        document.getElementById(id).removeAttribute('class');
    }
}
