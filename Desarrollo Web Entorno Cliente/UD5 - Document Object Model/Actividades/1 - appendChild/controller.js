let list;
let button;

function init() {
    list = document.getElementById('list');
    button = document.getElementById('button');

    button.addEventListener('click', addRandomNumber);
}

function addRandomNumber() {
    let number = Math.random();
    let listItem = document.createElement('li');
    listItem.innerHTML = number;
    list.appendChild(listItem);
}
