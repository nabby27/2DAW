let userNameContainer;
let userNameLogged;
let logoutButton;

let addOrderButton;
let table;

let formOrder;
let idOrderInput;
let dateInput;
let clientSelect;

let formLine;
let idLineInput;
let quantityInput;
let idProductInput;

let modalFormOrder;
let modalFormOrder_SaveButton;
let modalFormOrder_CloseButton

let modalFormLine;
let modalFormLine_SaveButton;
let modalFormLine_CloseButton

let modalError;
let modalError_CloseButton;

let modalSureDelete;
let modalSureDelete_Deletebutton;
let modalSureDelete_CloseButton;

let idToDelete;

$(document).ready(function() {
    userNameLogged = localStorage.getItem('user_name');
    
    if (!userNameLogged) {
        checkUserLogged();
    } else {
        init();
    }
});

function init() {
    getProducts();

    userNameContainer = $('#user_name');
    logoutButton = $('#logout_button');

    idToDelete = '';

    addOrderButton = $('#add_order_button');
    table = $('#table');
    
    formOrder = $('#form_order');
    idOrderInput = $('#id_order_input');
    dateInput = $('#date_input');
    clientSelect = $('#client_select');

    formLine = $('#form_line');
    idLineInput = $('#id_line_input');
    quantityInput = $('#quantity_input');
    idProductInput = $('#id_product_input');

    modalFormOrder = $('#modal_form_order');
    modalFormOrder_SaveButton = $('#modal_form_order_save_button');
    modalFormOrder_CloseButton = $('#modal_form_order_close_button');

    modalFormLine = $('#modal_form_line');
    modalFormLine_SaveButton = $('#modal_form_line_save_button');
    modalFormLine_CloseButton = $('#modal_form_line_close_button');

    modalError = $('#modal_error');
    modalError_CloseButton = $('#modal_error_close_button');

    modalSureDelete = $('#modal_sure_delete');
    modalSureDelete_Deletebutton = $('#modal_sure_delete_delete_button');
    modalSureDelete_CloseButton = $('#modal_sure_delete_close_button');

    userNameContainer.html('Bienvenido ' + userNameLogged + '!');

    logoutButton.click(function (e) { 
        e.preventDefault();
        localStorage.clear();
        window.location.replace("../validar.php");
    });

    addOrderButton.click(function (e) { 
        e.preventDefault();
        clearInputsForm();
        modalFormOrder.css('display', 'flex');
    });

    modalFormOrder_CloseButton.click(function (e) { 
        e.preventDefault();
        modalForm.css('display', 'none');
    });

    modalFormOrder_SaveButton.click(function (e) { 
        e.preventDefault();
        if (isFormValid()) {
            if (!idInput.prop('readonly')) {
                addProduct();
            } else {
                updateProduct();
            }
        }
    });

    modalFormLine_CloseButton.click(function (e) { 
        e.preventDefault();
        modalForm.css('display', 'none');
    });

    modalFormLine_SaveButton.click(function (e) { 
        e.preventDefault();
        if (isFormValid()) {
            if (!idInput.prop('readonly')) {
                addProduct();
            } else {
                updateProduct();
            }
        }
    });

    modalSureDelete_CloseButton.click(function (e) { 
        e.preventDefault();
        modalSureDelete.css('display', 'none');
    });

    modalError_CloseButton.click(function (e) { 
        e.preventDefault();
        modalError.css('display', 'none');
    });

    modalSureDelete_Deletebutton.click(function (e) { 
        e.preventDefault();
        deleteProduct();
    });
}

function checkUserLogged() {
    $.ajax({
        type: 'GET',
        url: '../php/controllers/clients/getClientLogged.php',
        dataType: 'json',
        success: (response, status, header) => {
            if (response && response != '') {
                localStorage.setItem('user_name', response);
                userNameLogged = response;
                init();
            }
        },
        error: (a, b, c) => {
            window.location.replace("../validar.php");
        }
    });
}

function getProducts() {
    $.ajax({
        type: 'GET',
        url: '../php/controllers/products/listProductsController.php',
        dataType: 'json',
        success: (response, status, header) => {
            if (Array.isArray(response)) {
                response.forEach(product => {
                    addProductRowToTable(product.id, product.photo, product.name, product.price);
                })
            }
        }
    });
}

function isFormValid() {
    return nameInput.val() != '' && quantityInput.val() != '' && priceInput.val() != '';
}

function addProduct() {
    let url_controller = '../php/controllers/products/addProductController.php';
    saveProduct(url_controller, addProductRowToTable);
}

function updateProduct() {
    let url_controller = '../php/controllers/products/updateProductController.php';
    saveProduct(url_controller, updateProductRowToTable);
}

function saveProduct(url_controller, functionToCall) {
    let formData = new FormData(form[0]);

    $.ajax({
        type: 'POST',
        url: url_controller,
        data: formData,
        dataType: 'json',
        processData: false,
        contentType : false,
        success: (response, status, header) => {
            if (response !== 'ERROR') {
                functionToCall(response.idProducto, response.foto, response.nombre, response.precio);
                modalForm.css('display', 'none');
            } else {
                modalError.css('display', 'flex');
            }
        }
    });
}

function addProductRowToTable(id, photo, name, price) {
    let row = generateClientRowToTable(id, photo, name, price);
    
    table.append(row);

    addListenersToRowButtons(id, photo);
}

function updateProductRowToTable(id, photo, name, price) {
    let row = generateClientRowToTable(id, photo, name, price);

    $('#' + id).replaceWith(row);
    
    addListenersToRowButtons(id, photo);
}

function generateClientRowToTable(id, photo, name, price) {
    let editButton = createEditButton(id);
    let deleteButton = createDeleteButton(id);
    let row = '<div id="' + id + '"class="table-row">';
    row += '    <div class="table-item">' + id + '</div>';
    if (photo && photo.name) {
        row += '    <div class="table-item"><img id="image-' + id + '" class="table-item-image" src="../img/' + photo.name + '" alt="product image"></div>';
    } else if (photo != '') {
        row += '    <div class="table-item"><img id="image-' + id + '" class="table-item-image" src="../img/' + photo + '" alt="product image"></div>';
    } else {
        row += '    <div class="table-item"><img id="image-' + id + '" class="table-item-image" src="" alt="product image"></div>';
    }
    row += '    <div class="table-item">' + name + '</div>';
    row += '    <div class="table-item">' + price + ' &euro;</div>';
    row += '    <div class="table-item">' + editButton + deleteButton +'</div>';
    row += '</div>';

    return row;
}

function addListenersToRowButtons(id, photo) {
    $('#delete-' + id).click(function (e) {
        e.preventDefault();
        idToDelete = id;
        modalSureDelete.css('display', 'flex');
    });

    $('#edit-' + id).click(function (e) {
        e.preventDefault();
        getOneProduct(id);
    });

    $('#image-' + id).click(function (e) {
        e.preventDefault();
        openModalImage(photo);
    });
}

function openModalImage(photo) {
    modalImage.css('display', 'flex');
    let image_name = photo;
    if (photo.name) {
        image_name = photo.name;
    }

    let img = '<img class="modal_image__image" src="../img/' + image_name + '" alt="product image">';
    modalImage_Image.html(img);
}

function getOneProduct(id) {
    $.ajax({
        type: 'GET',
        url: '../php/controllers/products/getOneProductController.php',
        data: {'id': id},
        dataType: 'json',
        success: (response, status, header) => {
            addProductDataToForm(response);
            modalForm.css('display', 'flex');
        }
    });
}

function addProductDataToForm(product) {
    idInput.prop('readonly', true);
    idInput.val(product.idProducto);
    nameInput.val(product.nombre);
    photoInput.val('');
    brandInput.val(product.marca);
    quantityInput.val(product.cantidad);
    priceInput.val(product.precio);
}

function createEditButton(id) {
    return '<button id="edit-' + id + '" class="button button--secundary button--small">Editar</button>';
}

function createDeleteButton(id) {
    return '<button id="delete-' + id + '" class="button button--danger button--small">Borrar</button>';
}

function deleteProduct() {
    $.ajax({
        type: 'POST',
        url: '../php/controllers/products/removeProductController.php',
        data: {id: idToDelete},
        dataType: 'json',
        success: (response, status, header) => {
            if (response === 'SUCCESS') {
                $('#' + idToDelete).remove();
                idToDelete = '';
                modalSureDelete.css('display', 'none');
            }
        }
    });
}

function clearInputsForm() {
    idInput.prop('readonly', false);
    idInput.val('');
    nameInput.val('');
    photoInput.val('');
    brandInput.val('');
    quantityInput.val('');
    priceInput.val('');
}