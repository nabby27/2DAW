const NUM_OF_ROWS = 3;
const NUM_OF_COLUMNS = 3;

const DEFAULT_BACKGROUND_COLOR = 'white';
const CELL_PREFIX = 'cell_';

const CIRCLE_IMG = './img/o.png';
const CROSS_IMG = './img/x.png';
const VOID = './img/_.png';

const ROW_OF_INIT_CIRCLE = 1;
const COLUMN_OF_INIT_CIRCLE = 1;

function play(element) {
    // disabledClicks();
    setUserValue(element);
    checkWinner();    
    setMachineValue();
    checkWinner();
}

function setUserValue(element) {
    if (element.children.length < 1) {
        let imageTag = '<img src=\'' + CROSS_IMG + '\'>';
        element.innerHTML = imageTag;
    }
}

function setMachineValue() {
    let voidCells = getRandomCells();
    voidCellSelected = voidCells[Math.floor(Math.random() * voidCells.length)];
    let imageTag = '<img src=\'' + CIRCLE_IMG + '\'>';
    document.getElementById(voidCellSelected).innerHTML = imageTag;
}

function getRandomCells() {
    let voidcells = [];
    for (let row = 0; row < NUM_OF_ROWS; row++) {
        for (let column = 0; column < NUM_OF_COLUMNS; column++) {
            idCell = CELL_PREFIX + row + column;
            if (document.getElementById(idCell).children.length < 1) {
                voidcells.push(idCell);
            }
        }
    }

    return voidcells;
}

function initBoard() {
    for (let row = 0; row < NUM_OF_ROWS; row++) {
        if (!board[row]) {
            board[row] = [];
        }
        for (let column = 0; column < NUM_OF_COLUMNS; column++) {
            document.getElementById(CELL_PREFIX + row + column).disabled = false;
            document.getElementById(CELL_PREFIX + row + column).style.backgroundColor = DEFAULT_BACKGROUND_COLOR;
            document.getElementById(CELL_PREFIX + row + column).value = VOID;
            board[row][column] = VOID;
        }
    }
    
    setInitCircleOnCenter();
}

function setInitCircleOnCenter() {
    document.getElementById(CELL_PREFIX + ROW_OF_INIT_CIRCLE + COLUMN_OF_INIT_CIRCLE).style.backgroundColor = CIRCLE_COLOR;
    board[ROW_OF_INIT_CIRCLE][COLUMN_OF_INIT_CIRCLE] = document.getElementById(CELL_PREFIX + ROW_OF_INIT_CIRCLE + COLUMN_OF_INIT_CIRCLE).value  = CIRCLE;
    document.getElementById(CELL_PREFIX + ROW_OF_INIT_CIRCLE + COLUMN_OF_INIT_CIRCLE).disabled = true;
}

function changeTurn() {
    document.getElementById('button').disabled = true;
    readHumanInput();
    endGame = checkWinner();
    if (!endGame) {
        selectRandomCell();
        checkWinner();
    }
    document.getElementById('button').disabled = false;
}

function readHumanInput() {
    for (let row = 0; row < NUM_OF_ROWS; row++) {
        for (let column = 0; column < NUM_OF_COLUMNS; column++) {
            let value = getValueFromCell(row, column);
            board[row][column] = value;
            document.getElementById(CELL_PREFIX + row + column).value = value;
        }
    }
}

function getValueFromCell(row, column) {
    cellValue = document.getElementById(CELL_PREFIX + row + column).value;
    value = rewriteAnyOtherCharToCross(cellValue);
    return value;
}

function rewriteAnyOtherCharToCross(cellValue) {
    value = cellValue;
    if (!(cellValue == VOID || cellValue == CIRCLE || cellValue == CROSS)) {
        value = CROSS;
    }

    return value;
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
            if (board[row][column] == '_') {
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
        document.getElementById('button').disabled = true;
        alert('Ha ganado ' + winner);
        initBoard();
    } else if (endGame) {
        alert('Empate');
        initBoard();
    }
}

function selectRandomCell() {
    voidCells = getVoidCells();
    selectedIndex = Math.floor(Math.random() * voidCells.length);
    selectedCel = voidCells[selectedIndex];
    printSelectedCell(selectedCel);
}

function getVoidCells() {
    voidCells = [];
    for (let row = 0; row < NUM_OF_ROWS; row++) {
        for (let column = 0; column < NUM_OF_COLUMNS; column++) {
            if (document.getElementById(CELL_PREFIX + row + column).value == VOID) {
                voidCells.push([row, column]);
            }
        }
    }
    return voidCells;
}

function printSelectedCell(selectedCell) {
    selectedRow = selectedCell[0];
    selectedColumn = selectedCell[1];
    document.getElementById(CELL_PREFIX + selectedRow + selectedColumn).value = CIRCLE;
    document.getElementById(CELL_PREFIX + selectedRow + selectedColumn).disabled = true;
    document.getElementById(CELL_PREFIX + selectedRow + selectedColumn).style.backgroundColor = CIRCLE_COLOR;
    board[selectedRow][selectedColumn] = CIRCLE;
}

function checkSameItemOnRow(i, j) {
    isSameItemOnRow = false;
    if (j == 0) {
        isSameItemOnRow = board[i][j] != VOID && board[i][j] == board[i][j+1] && board[i][j] == board[i][j+2];
    }

    return isSameItemOnRow;
}

function checkSameItemOnColumn(i, j) {
    isSameItemOnColumn = false;
    if (i == 0) {
        isSameItemOnColumn = board[i][j] != VOID && board[i][j] == board[i+1][j] && board[i][j] == board[i+2][j];
    }

    return isSameItemOnColumn;
}

function checkSameItemOnDiagonal(i, j) {
    isSameItemOnDiagonal = false;
    if (i == 0 && j == 0) {
        isSameItemOnDiagonal = board[i][j] != VOID && board[i][j] == board[i+1][j+1] && board[i][j] == board[i+2][j+2];
    }

    return isSameItemOnDiagonal;
}

function checkSameItemOnReverseDiagonal(i, j) {
    isSameItemOnReverseDiagonal = false;
    if (i == 0 && j == 2) {
        isSameItemOnReverseDiagonal = board[i][j] != VOID && board[i][j] == board[i+1][j-1] && board[i][j] == board[i+2][j-2];
    }

    return isSameItemOnReverseDiagonal;
}
