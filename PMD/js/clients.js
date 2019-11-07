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

let modalSureDelete;
let modalSureDelete_Deletebutton;
let modalSureDelete_CloseButton;

let dniToDelete;

$(document).ready(function() {
    init();
    getClients();
});

function init() {

    dniToDelete = '';

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
    modalFormCloseButton = $('#modal_form_close_button');

    modalError = $('#modal_error');
    modalErrorCloseButton = $('#modal_error_close_button');

    modalSureDelete = $('#modal_sure_delete');
    modalSureDelete_Deletebutton = $('#modal_sure_delete_delete_button');
    modalSureDelete_CloseButton = $('#modal_sure_delete_close_button');
    
    addClientButton.click(function (e) { 
        e.preventDefault();
        clearInputsForm();
        modalForm.css('display', 'flex');
    });

    modalFormCloseButton.click(function (e) { 
        e.preventDefault();
        modalForm.css('display', 'none');
    });

    modalFormSaveButton.click(function (e) { 
        e.preventDefault();
        if (isFormValid()) {
            if (!dniInput.prop('disabled')) {
                addClient();
            } else {
                updateClient();
            }
        }
    });

    modalSureDelete_CloseButton.click(function (e) { 
        e.preventDefault();
        modalSureDelete.css('display', 'none');
    });

    modalErrorCloseButton.click(function (e) { 
        e.preventDefault();
        modalError.css('display', 'none');
    });

    modalSureDelete_Deletebutton.click(function (e) { 
        e.preventDefault();
        deleteClient();
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
        }
    });
}

function isFormValid() {
    return dniInput.val() != '' && nameInput.val() != '' && emailInput.val() != '' && passwordInput.val() != '' && emailInput.val().match('^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$');
}

function addClient() {
    let url_controller = '../php/controllers/clients/addClientController.php';
    saveClient(url_controller, addClientRowToTable);
}

function updateClient() {
    let url_controller = '../php/controllers/clients/updateClientController.php';
    saveClient(url_controller, updateClientRowToTable);
}

function saveClient(url_controller, functionToCall) {
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
        url: url_controller,
        data: dataForm,
        dataType: 'json',
        success: (response, status, header) => {
            if (response === 'SUCCESS') {
                functionToCall(dataForm.dni, dataForm.name, dataForm.admin);
                modalForm.css('display', 'none');
            } else if (response === 'ERROR') {
                modalError.css('display', 'flex');
            }
        }
    });
}

function addClientRowToTable(dni, name, admin) {
    let row = generateClientRowToTable(dni, name, admin);
    
    table.append(row);

    addListenersToRowButtons(dni);
}

function updateClientRowToTable(dni, name, admin) {
    let row = generateClientRowToTable(dni, name, admin);

    $('#' + dni).replaceWith(row);
    
    addListenersToRowButtons(dni);
}

function generateClientRowToTable(dni, name, admin) {
    let editButton = createEditButton(dni);
    let deleteButton = createDeleteButton(dni);
    let row = '<div id="' + dni + '"class="table-row">';
    row += '    <div class="table-item">' + dni + '</div>';
    row += '    <div class="table-item">' + name + '</div>';
    if (admin === '1' || admin === true) {
        row += '    <div class="table-item">Sí</div>';
    } else {
        row += '    <div class="table-item">No</div>';
    }
    row += '    <div class="table-item">' + editButton + deleteButton +'</div>';
    row += '</div>';
    
    return row;
}

function addListenersToRowButtons(dni) {
    $('#delete-' + dni).click(function (e) {
        e.preventDefault();
        dniToDelete = dni;
        modalSureDelete.css('display', 'flex');
    });

    $('#edit-' + dni).click(function (e) {
        e.preventDefault();
        getOneCLient(dni);
    });
}

function getOneCLient(dni) {
    $.ajax({
        type: 'GET',
        url: '../php/controllers/clients/getOneClientController.php',
        data: {'dni': dni},
        dataType: 'json',
        success: (response, status, header) => {
            addClientDataToForm(response);
            modalForm.css('display', 'flex');
        }
    });
}

function addClientDataToForm(client) {
    dniInput.prop('disabled', true);
    dniInput.val(client.dniCliente);
    nameInput.val(client.nombre);
    addressInput.val(client.direccion);
    emailInput.val(client.email);
    passwordInput.val(client.pwd);
    if (client.administrador == "1") {
        adminInput.prop('checked', true);
    } else {
        adminInput.prop('checked', false);
    }
}

function createEditButton(dni) {
    return '<button id="edit-' + dni + '" class="button button--secundary button--small">Editar</button>';
}

function createDeleteButton(dni) {
    return '<button id="delete-' + dni + '" class="button button--danger button--small">Borrar</button>';
}

function deleteClient() {
    $.ajax({
        type: 'POST',
        url: '../php/controllers/clients/removeClientController.php',
        data: {dni: dniToDelete},
        dataType: 'json',
        success: (response, status, header) => {
            if (response === 'SUCCESS') {
                $('#' + dniToDelete).remove();
                dniToDelete = '';
                modalSureDelete.css('display', 'none');
            }
        }
    });
}

function clearInputsForm() {
    dniInput.prop('disabled', false);
    dniInput.val('');
    nameInput.val('');
    addressInput.val('');
    emailInput.val('');
    passwordInput.val('');
    adminInput.prop('checked', false);
}
