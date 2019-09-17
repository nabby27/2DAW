board = [];

for (let i = 0; i < 3; i++) {
    if (!board[i]) {
        board[i] = [];
    }
    for (let j = 0; j < 3; j++) {
        board[i][j] = document.getElementById("cell_" + i + j).placeholder  = "_";
    }
}

board[1][1] = document.getElementById("cell_11").value  = "O";

function changeRol() {

}