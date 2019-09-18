board = [];

const CIRCLE = 'O';
const CIRCLE_COLOR = 'rgba(200, 100, 100, 0.5)';
const CROSS = 'X';
const VOID = '_';

paintBoard();

function paintBoard() {
    for (let i = 0; i < 3; i++) {
        if (!board[i]) {
            board[i] = [];
        }
        for (let j = 0; j < 3; j++) {
            board[i][j] = document.getElementById("cell_" + i + j).value  = VOID;
        }
    }
    
    document.getElementById("cell_11").style.backgroundColor = CIRCLE_COLOR;
    board[1][1] = document.getElementById("cell_11").value  = CIRCLE;
}

function changeRol() {
    checkWinner();
    document.getElementById("button").disabled = true;

    voidCells = [];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (document.getElementById("cell_" + i + j).value == '_') {
                voidCells.push([i, j]);
            }
            board[i][j] = document.getElementById("cell_" + i + j).value;
        }
    }
    selectedIndex = Math.floor(Math.random() * voidCells.length);
    selectedCel = voidCells[selectedIndex];

    document.getElementById("cell_" + selectedCel[0] + selectedCel[1]).value = CIRCLE;
    document.getElementById("cell_" + selectedCel[0] + selectedCel[1]).disabled = true;
    document.getElementById("cell_" + selectedCel[0] + selectedCel[1]).style.backgroundColor = CIRCLE_COLOR;
    board[selectedCel[0]][selectedCel[1]] = CIRCLE;

    document.getElementById("button").disabled = false;
    
    checkWinner();
}

function checkWinner() {
    success = false;
    endGame = true;
    for (let i = 0; i < 3 && !success; i++) {
        for (let j = 0; j < 3 && !success; j++) {
            if (checkRow(i, j) ||
                checkColumn(i, j) || 
                checkDiagonal(i, j) ||
                checkReverseDiagonal(i, j)) {
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
    
}

function checkRow(i, j) {
    return (i+2 < 3 || j+2 < 3) && board[i][j] != VOID && board[i][j] == board[i][j+1] && board[i][j] == board[i][j+2];
}

function checkColumn(i, j) {
    return (i+2 < 3 || j+2 < 3) && board[i][j] != VOID && board[i][j] == board[i+1][j] && board[i][j] == board[i+2][j];
}

function checkDiagonal(i, j) {
    return (i == 0 || j == 0) && board[i][j] != VOID && board[i][j] == board[i+1][j+1] && board[i][j] == board[i+2][j+2];
}

function checkReverseDiagonal(i, j) {
    return (i == 0 || j == 2) && board[i][j] != VOID && board[i][j] == board[i-1][j-1] && board[i][j] == board[i-2][j-2];
}
