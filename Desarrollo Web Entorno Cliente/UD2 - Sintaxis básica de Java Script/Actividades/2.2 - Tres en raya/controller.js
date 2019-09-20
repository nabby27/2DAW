board = [];

const CIRCLE = 'O';
const CIRCLE_COLOR = 'rgba(200, 100, 100, 0.5)';
const CROSS = 'X';
const VOID = '_';

paintInitBoard();

function paintInitBoard() {
    for (let i = 0; i < 3; i++) {
        if (!board[i]) {
            board[i] = [];
        }
        for (let j = 0; j < 3; j++) {
            document.getElementById("cell_" + i + j).value = VOID;
            board[i][j] = VOID;
        }
    }
    
    document.getElementById("cell_11").style.backgroundColor = CIRCLE_COLOR;
    board[1][1] = document.getElementById("cell_11").value  = CIRCLE;
    document.getElementById("cell_11").disabled = true;
}

function changeRol() {
    document.getElementById("button").disabled = true;
    readHumanInput();
    checkWinner();
    selectRandomCell();    
    checkWinner();
    document.getElementById("button").disabled = false;
}

function readHumanInput() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            rewriteCharacterToCross(i, j);
        }
    }
}

function rewriteCharacterToCross(i, j) {
    cellValue = document.getElementById("cell_" + i + j).value;

    if (cellValue == VOID || cellValue == CIRCLE || cellValue == CROSS) {
        board[i][j] = document.getElementById("cell_" + i + j).value;
    } else {
        board[i][j] = CROSS;
        document.getElementById("cell_" + i + j).value = CROSS;
    }
}

function checkWinner() {
    success = false;
    endGame = true;
    for (let i = 0; i < 3 && !success; i++) {
        for (let j = 0; j < 3 && !success; j++) {
            if (checkSameItemOnRow(i, j) ||
                checkSameItemOnColumn(i, j) || 
                checkSameItemOnDiagonal(i, j) ||
                checkSameItemOnReverseDiagonal(i, j)) {
                    success = true;
                    winner = board[i][j];
            }
            if (board[i][j] == '_') {
                endGame = false;
            }
        }
    }

    if (success) {
        document.getElementById("button").disabled = true;
        alert("Ha ganado " + winner);
        location.reload();
    } else if (endGame) {
        alert("Empate");
    }

    return success;
    
}

function selectRandomCell() {
    voidCells = getVoidCells();
    selectedIndex = Math.floor(Math.random() * voidCells.length);
    selectedCel = voidCells[selectedIndex];
    printSelectedCell(selectedCel);
}

function getVoidCells() {
    voidCells = [];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (document.getElementById("cell_" + i + j).value == '_') {
                voidCells.push([i, j]);
            }
        }
    }
    return voidCells;
}

function printSelectedCell(selectedCel) {
    document.getElementById("cell_" + selectedCel[0] + selectedCel[1]).value = CIRCLE;
    document.getElementById("cell_" + selectedCel[0] + selectedCel[1]).disabled = true;
    document.getElementById("cell_" + selectedCel[0] + selectedCel[1]).style.backgroundColor = CIRCLE_COLOR;
    board[selectedCel[0]][selectedCel[1]] = CIRCLE;
}

function checkSameItemOnRow(i, j) {
    isSameItemOnRow = false;
    if (j == 0) {
        isSameItemOnRow =  board[i][j] != VOID && board[i][j] == board[i][j+1] && board[i][j] == board[i][j+2];
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
