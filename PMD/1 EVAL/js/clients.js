// decalre global variables
let userNameContainer;
let userNameLogged;
let logoutButton;

let addClientButton;
let table;

let form;
let dniInput;
let nameInput;
let addressInput;
let emailInput;
let passwordInput;
let adminInput;

let modalForm;
let modalForm_SaveButton;
let modalForm_CloseButton;

let modalError;
let modalError_CloseButton;

let modalSureDelete;
let modalSureDelete_Deletebutton;
let modalSureDelete_CloseButton;

let dniToDelete;

$(document).ready(function() { // check if user is login using localstorage
    userNameLogged = localStorage.getItem('user_name');

    if (!userNameLogged) {
        checkUserLogged();
    } else {
        init();
    }
});

function checkUserLogged() { // do petition to get user name if user is logged
    $.ajax({
        type: 'GET',
        url: '../php/controllers/clients/getClientLogged.php',
        dataType: 'json',
        success: (response, status, header) => {
            if (response && response != '') {
                localStorage.setItem('user_name', response); // save user name on localstorage
                userNameLogged = response;
                init();
            }
        },
        error: (headers, status, error) => {
            window.location.replace("../validar.php"); // redirect to login if back return that not user logged
        }
    });
}

function init() { // start
    getClients();
    initzializeVariables();
    userNameContainer.html('Bienvenido ' + userNameLogged + '!');
    initListenersToButtons()
}

function initzializeVariables() { // initzialize variables getting html with jQuery
    userNameContainer = $('#user_name');
    logoutButton = $('#logout_button');

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
    modalForm_SaveButton = $('#modal_form_save_button');
    modalForm_CloseButton = $('#modal_form_close_button');

    modalError = $('#modal_error');
    modalError_CloseButton = $('#modal_error_close_button');

    modalSureDelete = $('#modal_sure_delete');
    modalSureDelete_Deletebutton = $('#modal_sure_delete_delete_button');
    modalSureDelete_CloseButton = $('#modal_sure_delete_close_button');
}

function initListenersToButtons() {
    logoutButton.click(function (e) { // clear localstorage and redirect to to login when click logout
        e.preventDefault();
        localStorage.clear();
        window.location.replace("../validar.php");
    });

    addClientButton.click(function (e) { // show modal when click add client button
        e.preventDefault();
        clearInputsForm();
        modalForm.css('display', 'flex');
    });

    modalForm_CloseButton.click(function (e) { // close modal form when click to close button
        e.preventDefault();
        modalForm.css('display', 'none');
    });

    modalForm_SaveButton.click(function (e) { // save or update client when click save button
        e.preventDefault();
        if (isFormValid()) {
            if (!dniInput.prop('readonly')) {
                addClient();
            } else {
                updateClient();
            }
        }
    });

    modalSureDelete_CloseButton.click(function (e) { // close modal to delete when click close button
        e.preventDefault();
        dniToDelete = '';
        modalSureDelete.css('display', 'none');
    });

    modalSureDelete_Deletebutton.click(function (e) { // delete client when click delete button on modal
        e.preventDefault();
        deleteClient();
    });

    modalError_CloseButton.click(function (e) { // close modal error when click close button
        e.preventDefault();
        modalError.css('display', 'none');
    });
}

function getClients() { // get clients and save on global variable
    $.ajax({
        type: 'GET',
        url: '../php/controllers/clients/listClientsController.php',
        dataType: 'json',
        success: (response, status, header) => {
            if (Array.isArray(response)) {
                response.forEach(client => {
                    addClientRowToTable(client.dni, client.name, client.admin); // add html row for that client
                })
            }
        }
    });
}

function isFormValid() { // check if form is valid to save or update
    return dniInput.val() != '' && nameInput.val() != '' && emailInput.val() != '' && passwordInput.val() != '' && emailInput.val().match('^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$');
}

function addClient() { // do petition to create new client on php
    let url_controller = '../php/controllers/clients/addClientController.php';
    saveClient(url_controller, addClientRowToTable);
}

function updateClient() { // do petition to update exist client on php
    let url_controller = '../php/controllers/clients/updateClientController.php';
    saveClient(url_controller, updateClientRowToTable);
}

function saveClient(url_controller, functionToCall) {
    let formData = new FormData(form[0]); // get form data like object

    $.ajax({
        type: 'POST',
        url: url_controller,
        data: formData,
        dataType: 'json',
        processData: false,
        contentType : false,
        success: (response, status, header) => {
            if (response === 'SUCCESS') {
                functionToCall(formData.get('dni'), formData.get('name'), formData.get('admin')); // call to function 'update row' or 'add row' client on html
                modalForm.css('display', 'none');
            } else if (response === 'ERROR') {
                modalError.css('display', 'flex'); // show modal error if not update or create client
            }
        }
    });
}

function addClientRowToTable(dni, name, admin) {
    let row = generateClientRowToTable(dni, name, admin); // create html row client
    
    table.append(row);

    addListenersToRowButtons(dni); // add listeners to buttons for edit or delete client
}

function updateClientRowToTable(dni, name, admin) {
    let row = generateClientRowToTable(dni, name, admin); // create html row client

    $('#' + dni).replaceWith(row);
    
    addListenersToRowButtons(dni); // add listeners to buttons for edit or delete client
}

function generateClientRowToTable(dni, name, admin) {
    let editButton = createEditButton(dni); // create html for edit button
    let deleteButton = createDeleteButton(dni); // create html for delete button
    let row = '<div id="' + dni + '"class="table-row">';
    row += '    <div class="table-item">' + dni + '</div>';
    row += '    <div class="table-item">' + name + '</div>';
    if (admin === '1' || admin === 'on') {
        row += '    <div class="table-item">Sí</div>';
    } else {
        row += '    <div class="table-item">No</div>';
    }
    row += '    <div class="table-item">' + editButton + deleteButton +'</div>'; // add html buttons
    row += '</div>';
    
    return row;
}

function addListenersToRowButtons(dni) { // add listeners to buttons for edit and delete client
    $('#delete-' + dni).click(function (e) {
        e.preventDefault();
        dniToDelete = dni; // save on global variable what client want to delete
        modalSureDelete.css('display', 'flex');
    });

    $('#edit-' + dni).click(function (e) {
        e.preventDefault();
        clearInputsForm();
        getOneCLient(dni);
    });
}

function getOneCLient(dni) { // do petition to get all data for one client
    $.ajax({
        type: 'GET',
        url: '../php/controllers/clients/getOneClientController.php',
        data: {'dni': dni},
        dataType: 'json',
        success: (response, status, header) => {
            addClientDataToForm(response); // add client data to form
            passwordInput.prop('readonly', true);
            passwordInput.addClass('input--disabled');
            modalForm.css('display', 'flex');
        }
    });
}

function addClientDataToForm(client) { // add client data to modal form
    dniInput.prop('readonly', true); // use property readonly when is updating client
    dniInput.addClass('input--disabled');
    dniInput.val(client.dni);
    nameInput.val(client.name);
    addressInput.val(client.address);
    emailInput.val(client.email);
    passwordInput.val(client.password);
    if (client.admin == "1") {
        adminInput.prop('checked', true);
    } else {
        adminInput.prop('checked', false);
    }
}

function createEditButton(dni) { // generate html for edit client button
    return '<button id="edit-' + dni + '" class="button button--edit button--small">' +
            '<img src="../img/pencil.svg" class="button__icon--small" alt="edit icon">' +
        '</button>'; 
}

function createDeleteButton(dni) { // generate html for delete client button
    return '<button id="delete-' + dni + '" class="button button--delete button--small">' + 
            '<img src="../img/trash.svg" class="button__icon--small" alt="delete icon">' +
        '</button>';
}

function deleteClient() { // do petition to delete exist client on php
    $.ajax({
        type: 'POST',
        url: '../php/controllers/clients/removeClientController.php',
        data: {dni: dniToDelete},
        dataType: 'json',
        success: (response, status, header) => {
            if (response === 'SUCCESS') {
                $('#' + dniToDelete).remove(); // remove html row for client 
                dniToDelete = ''; // unset global variable for dni to delete 
                modalSureDelete.css('display', 'none');
            }
        }
    });
}

function clearInputsForm() {
    dniInput.prop('readonly', false); // unset readonly by default
    dniInput.removeClass('input--disabled');
    dniInput.val('');
    nameInput.val('');
    addressInput.val('');
    emailInput.val('');
    passwordInput.prop('readonly', false);
    passwordInput.removeClass('input--disabled');
    passwordInput.val('');
    adminInput.prop('checked', false);
}
