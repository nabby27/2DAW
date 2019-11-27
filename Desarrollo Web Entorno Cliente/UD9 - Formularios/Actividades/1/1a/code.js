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

    if (name.value === '') { errors.push({field: 'Nombre', msg: 'Debe introducir un nombre'}) }
    if (age.value === '' || isNaN(age.value) || (!isNaN(age.value) && (parseInt(age.value) < 1 || parseInt(age.value) > 99))) { errors.push({field: 'Edad', msg: 'Debe introducir un edad entre 0 y 100'}) }
    if (!emailRegex.test(email.value)) { errors.push({field: 'Email', msg: 'Debe introducir un email valido'}) }
    if (date.value === '') { errors.push({field: 'Fecha', msg: 'Debe poner una fecha'}) }
    if (select.selectedIndex == 0) { errors.push({field: 'Select', msg: 'Debe introducir una opción que no sea la primera'}) }
    if (!checkBox.checked) { errors.push({field: 'Checkbox', msg: 'Debe marcar la casillas'}) }
    if (!selectAnyRadioButton()) { errors.push({field: 'RadioButton', msg: 'Debe elegir alguna opcion'}) }
    
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

function selectAnyRadioButton() {
    let index = 0;
    let selected = false;

    while (index < radioButtons.length && !selected) {
        if(radioButtons[index].checked) {
            selected = true;
        }
        index++;
    }

    return selected;
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
