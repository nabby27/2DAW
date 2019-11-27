let form;
let name;
let age;
let email;
let date;
let select;
let checkBox;
let radioButtons;
let send;

window.onload = () => {
    init();
}

function init() {
    form = document.getElementById('formulario');
    name = document.getElementById('nombre');
    age = document.getElementById('edad');
    email = document.getElementById('correo');
    date = document.getElementById('fecha');
    select = document.getElementById('selector');
    checkBox = document.getElementById('checkBox');
    radioButtons = document.getElementsByName('radioButton');
    send = document.getElementById('enviar');

    enviar.addEventListener('click', validate);
}

function validate(e) {
    e.preventDefault();
    let errors = [];
    const emailRegex = /\S+@\S+\.\S+/;
    
    if (errors.length > 0) {
        showErrors(errors)
    } else {
        alert(
            'Nombre: ' + name.value + '\r' +
            'Edad: ' + age.value + '\r' +
            'Email: ' + email.value + '\r' +
            'Fecha: ' + date.value + '\r' +
            'Select: ' + select.value + '\r' +
            'Checkbox: ' + checkBox.checked + '\r' +
            'Radiobutton: ' + getRadioButtonSelectedValue() + '\r'
        );
    }
}

function getRadioButtonSelectedValue() {
    let index = 0;
    let optionSelected;

    while (index < radioButtons.length && !optionSelected) {
        if(radioButtons[index].checked) {
            optionSelected = radioButtons[index];
        }
        index++;
    }

    return optionSelected.value;
}

function showErrors(errors) {
    errors.forEach(error => {
        alert('ERROR!!! \ren el campo: ' + error.field + '\r' + error.msg);
    })
}
