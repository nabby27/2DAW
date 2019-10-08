let body;

function init() {
    body = document.getElementsByTagName('body')[0];
    createCheckbox(100);
}

function createCheckbox(numberOfCheckbox) {
    for (let number = 0; number < numberOfCheckbox; number++) {
        let input = document.createElement('input');
        input.type = 'checkbox';
        body.appendChild(input);

        let label = document.createElement('label');
        label.innerHTML = Math.floor(Math.random() * 10);
        body.appendChild(label);
    }
}

function allSameValue(value) {
    checkboxes = document.getElementsByTagName('input');
    for (let checkbox = 0; checkbox < checkboxes.length; checkbox++) {
        checkboxes[checkbox].checked = value;
    }
}