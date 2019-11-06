let addClientButton;
let table;

let form;
let dniInput;
let nameInput;
let addressInput;
let emailInput;
let passwordInput;
let adminInput;

let saveButton;
let closeButton;
let modalForm;

let modalError;
let modalErrorCloseButton;

$(document).ready(function() {
    init();
    getClients();
});

function init() {
    addClientButton = $('#add_client_button');
    table = $('#table');
    
    form = $('#form');
    dniInput = $('#dni_input');
    nameInput = $('#name_input');
    addressInput = $('#address_input');
    emailInput = $('#email_input');
    passwordInput = $('#password_input');
    adminInput = $('#admin_input');

    modalForm = $('#modal_form');
    modalFormSaveButton = $('#modal_form_save_button');
    modalFormcloseButton = $('#modal_form_close_button');

    modalError = $('#modal_error');
    modalErrorCloseButton = $('#modal_error_close_button');
    
    addClientButton.click(function (e) { 
        e.preventDefault();
        clearInputsForm();
        modalForm.css('display', 'flex');
    });

    modalFormcloseButton.click(function (e) { 
        e.preventDefault();
        modalForm.css('display', 'none');
    });

    modalFormSaveButton.click(function (e) { 
        e.preventDefault();
        if (isFormValid()) {
            saveClient();
        }
    });

    modalErrorCloseButton.click(function (e) { 
        e.preventDefault();
        modalError.css('display', 'none');
    });
}

function getClients() {
    $.ajax({
        type: 'GET',
        url: '../php/controllers/clients/listClientsController.php',
        dataType: 'json',
        success: (response, status, header) => {
            response.forEach(client => {
                addClientRowToTable(client.dni, client.name, client.admin);
            })
        },
        error: (header, status, error) => {
            
        },
        complete: (header, status) => {
            
        }
    });
}

function isFormValid() {
    debugger
    return dniInput.val() != '' && nameInput.val() != '' && emailInput.val() != '' && passwordInput.val() != '' && emailInput.val().match('/^\w+@[a-zA-Z_]+?\.[a-zA-Z]$/');
}

function saveClient() {
        dataForm = {
        'dni': dniInput.val(),
        'name': nameInput.val(),
        'address': addressInput.val(),
        'email': emailInput.val(),
        'password': passwordInput.val(),
        'admin': adminInput.prop('checked')
    }

    $.ajax({
        type: 'POST',
        url: '../php/controllers/clients/addClientController.php',
        data: dataForm,
        dataType: 'json',
        success: (response, status, header) => {
            if (response === 'SUCCESS') {
                addClientRowToTable(dataForm.dni, dataForm.name, dataForm.admin);
                modalForm.css('display', 'none');
            } else if (response === 'ERROR') {
                modalError.css('display', 'flex');
            }
        },
        error: (header, status, error) => {
            
        },
        complete: (header, status) => {
            
        }
    });
}

function addClientRowToTable(dni, name, admin) {
    row = '<div class="table-row">';
    row += '    <div class="table-item">' + dni + '</div>';
    row += '    <div class="table-item">' + name + '</div>';
    row += '    <div class="table-item">' + admin + '</div>';
    row += '    <div class="table-item"><button class="button button--secundary">Editar</button><button class="button button--danger">Borrar</button></div>';
    row += '</div>';

    table.append(row);
}

function clearInputsForm() {
    dniInput.val('');
    nameInput.val('');
    addressInput.val('');
    emailInput.val('');
    passwordInput.val('');
    adminInput.prop('checked', false);
}