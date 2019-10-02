let time;
let intervalTime;

function init() {
    document.getElementById('salida').addEventListener('mouseleave', startGame);
}

function startTime() {
    time = 0;
    intervalTime = setInterval(() => {
        time++;
    }, 100);
}

function startGame() {
    startTime();
    createEvents();
}

function createEvents() {
    document.getElementById('final').addEventListener('mouseenter', winGame);
    document.getElementById('tablero').addEventListener('mouseleave', exitBoard);
    createListenerWalss();
}

function createListenerWalss() {
    let walls = document.getElementsByClassName('pared');
    Array.from(walls).forEach(wall => {
        wall.addEventListener('mouseenter', crashWithWall);
    });
}

function crashWithWall() {
    clearVariables();
    alert('Be careful with walls');
}

function exitBoard() {
    clearVariables();
    alert('Exit of board');
}

function winGame() {
    clearVariables();
    alert('You win. ' + (time / 10) + 's');
}

function clearVariables() {
    clearInterval(intervalTime);
    removeListenerWalls();
    document.getElementById('final').removeEventListener('mouseenter', winGame);
    document.getElementById('tablero').removeEventListener('mouseleave', exitBoard);
}

function removeListenerWalls() {
    let walls = document.getElementsByClassName('pared');
    Array.from(walls).forEach(wall => {
        wall.removeEventListener('mouseenter', crashWithWall);
    });
}
