let board = [];

const numOfRows = 4;
const numOfColumns = 4;
const defaultColor = 'black';
const colorBooms = {
    1: 'blue',
    2: 'pink',
    3: 'purple',
    4: 'red'
};

function initBoard() {
    setAllValues0WithDefaultColor();
    enabledCellsAndButtons();
}

function setAllValues0WithDefaultColor() {
    for (let row = 0; row < numOfRows; row++) {
        for (let columns = 0; columns < numOfColumns; columns++) {
            if (!board[row]) {
                board[row] = []
            }
            board[row].push(0);
            document.getElementById('cell_' + row + columns).value = 0;
            document.getElementById('cell_' + row + columns).style.color = defaultColor;
        }
    }
}

function enabledCellsAndButtons() {
    for (let row = 0; row < numOfRows; row++) {
        for (let column = 0; column < numOfColumns; column++) {
            document.getElementById('cell_' + row + column).disabled = false;
        }
    }

    document.getElementById('calculateButton').disabled = false;
}

function calculate() {
    disabledCellsAndButtons();
    syncInputBombsToArray();
    calculateProximityOfBooms();
}

function disabledCellsAndButtons() {
    for (let row = 0; row < numOfRows; row++) {
        for (let column = 0; column < numOfColumns; column++) {
            document.getElementById('cell_' + row + column).disabled = true;
        }
    }

    document.getElementById('calculateButton').disabled = true;
}

function syncInputBombsToArray() {
    for (let row = 0; row < numOfRows; row++) {
        for (let column = 0; column < numOfColumns; column++) {
            board[row][column] = document.getElementById('cell_' + row + column).value;
        }
    }
}

function calculateProximityOfBooms() {
    for (let row = 0; row < numOfRows; row++) {
        for (let column = 0; column < numOfColumns; column++) {
            if (!cellIsBoom(row, column)) {
                numOfBooms = getNumOfBoomsAroundCell(row, column);
                document.getElementById('cell_' + row + column).value = numOfBooms;
                board[row][column] = numOfBooms;
                paintColorNumber(row, column, numOfBooms);
            }
        }
    }
}

function getNumOfBoomsAroundCell(cellRow, cellColumn) {
    numOfBooms = 0;
    for (let rowToCheck = cellRow-1; rowToCheck < cellRow+2; rowToCheck++) {
        for (let columnToCheck = cellColumn-1; columnToCheck < cellColumn+2; columnToCheck++) {
            if (!(rowToCheck == cellRow && columnToCheck == cellColumn)) {
                if (existCell(rowToCheck, columnToCheck)) {
                    if (cellIsBoom(rowToCheck, columnToCheck)) {
                        numOfBooms++;
                    }
                }
            }
        }
    }

    return numOfBooms;
}

function paintColorNumber(row, column, numOfBooms) {
    color = colorBooms[numOfBooms];
    if (numOfBooms > 4) {
        color = colorBooms[4];
    }
    document.getElementById('cell_' + row + column).style.color = color;
}

function existCell(row, column) {
    return row >= 0 && column >= 0 && row < board.length && column < board[0].length;
}

function cellIsBoom(row, column) {
    return -1 == board[row][column];
}