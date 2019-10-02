let board = [];

const NUM_OF_ROWS = 3;
const NUM_OF_COLUMNS = 3;

const DEFAULT_BACKGROUND_COLOR = 'white';
const CELL_PREFIX = 'cell_';

const CIRCLE_IMG = './img/o.png';
const CROSS_IMG = './img/x.png';
const VOID_IMG = './img/_.png';

const ROW_OF_INIT_CIRCLE = 1;
const COLUMN_OF_INIT_CIRCLE = 1;

function initBoard() {
    for (let row = 0; row < NUM_OF_ROWS; row++) {
        if (!board[row]) {
            board[row] = [];
        }
        for (let column = 0; column < NUM_OF_COLUMNS; column++) {
            let imageTag = '<img class="image" src=\'' + VOID_IMG + '\'>';
            document.getElementById(CELL_PREFIX + row + column).innerHTML = imageTag;
            board[row][column] = VOID_IMG;
        }
    }
}

function play(element) {
    let played = setUserValue(element);
    if (played) {
        checkWinner();
        setMachineValue();
        checkWinner();
    }
}

function setUserValue(element) {
    let correctPlay = false;

    row = element.id.substring(element.id.length - 1, element.id.length - 2);
    column = element.id.substring(element.id.length, element.id.length - 1);

    if (board[row][column] === VOID_IMG) {
        correctPlay = true;
        let imageTag = '<img class="image" src=\'' + CROSS_IMG + '\'>';
        element.innerHTML = imageTag;
        syncToArray(row, column, CROSS_IMG);
    }


    return correctPlay;
}

function syncToArray(row, column, image) {
    board[row][column] = image
}

function setMachineValue() {
    let selectedMachineCell = getRandomCells();
    let rowSelected = selectedMachineCell[0];
    let columnSelected = selectedMachineCell[1];

    let imageTag = '<img class="image" src=\'' + CIRCLE_IMG + '\'>';
    document.getElementById(CELL_PREFIX + rowSelected + columnSelected).innerHTML = imageTag;

    syncToArray(rowSelected, columnSelected, CIRCLE_IMG);
}

function getRandomCells() {
    let voidcells = [];
    for (let row = 0; row < NUM_OF_ROWS; row++) {
        for (let column = 0; column < NUM_OF_COLUMNS; column++) {
            if (board[row][column] === VOID_IMG) {
                voidcells.push([row, column]);
            }
        }
    }

    return voidcells[Math.floor(Math.random() * voidcells.length)];
}

function checkWinner() {
    success = false;
    endGame = true;
    winner = '';
    for (let row = 0; row < NUM_OF_ROWS && !success; row++) {
        for (let column = 0; column < NUM_OF_COLUMNS && !success; column++) {
            if (check3ItemsToWin(row, column)) {
                    success = true;
                    winner = board[row][column];
            }
            if (board[row][column] == VOID_IMG) {
                endGame = false;
            }
        }
    }

    showWinnerText(success, winner, endGame);    
    
    return success || endGame;
}

function check3ItemsToWin(row, column) {
    return  checkSameItemOnRow(row, column) || checkSameItemOnColumn(row, column) || 
        checkSameItemOnDiagonal(row, column) || checkSameItemOnReverseDiagonal(row, column);
}

function showWinnerText(success, winner, endGame) {
    if (success) {
        alert('Ha ganado ' + winner);
        initBoard();
    } else if (endGame) {
        alert('Empate');
        initBoard();
    }
}

function checkSameItemOnRow(i, j) {
    isSameItemOnRow = false;
    if (j == 0) {
        isSameItemOnRow = board[i][j] != VOID_IMG && board[i][j] == board[i][j+1] && board[i][j] == board[i][j+2];
    }

    return isSameItemOnRow;
}

function checkSameItemOnColumn(i, j) {
    isSameItemOnColumn = false;
    if (i == 0) {
        isSameItemOnColumn = board[i][j] != VOID_IMG && board[i][j] == board[i+1][j] && board[i][j] == board[i+2][j];
    }

    return isSameItemOnColumn;
}

function checkSameItemOnDiagonal(i, j) {
    isSameItemOnDiagonal = false;
    if (i == 0 && j == 0) {
        isSameItemOnDiagonal = board[i][j] != VOID_IMG && board[i][j] == board[i+1][j+1] && board[i][j] == board[i+2][j+2];
    }

    return isSameItemOnDiagonal;
}

function checkSameItemOnReverseDiagonal(i, j) {
    isSameItemOnReverseDiagonal = false;
    if (i == 0 && j == 2) {
        isSameItemOnReverseDiagonal = board[i][j] != VOID_IMG && board[i][j] == board[i+1][j-1] && board[i][j] == board[i+2][j-2];
    }

    return isSameItemOnReverseDiagonal;
}