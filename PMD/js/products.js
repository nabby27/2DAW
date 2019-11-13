// decalre global variables
let userNameContainer;
let userNameLogged;
let logoutButton;

let addProductButton;
let table;

let form;
let idInput;
let nameInput;
let photoInput;
let brandInput;
let quantityInput;
let priceInput;

let modalForm;
let modalForm_SaveButton;
let modalForm_CloseButton

let modalError;
let modalError_CloseButton;

let modalSureDelete;
let modalSureDelete_Deletebutton;
let modalSureDelete_CloseButton;

let modalImage;
let modalImage_Image;
let modalImage_CloseButton;

let idToDelete;

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
        error: (header, status, error) => {
            window.location.replace("../validar.php");
        }
    });
}

function init() { // start
    getProducts();
    initzializeVariables();
    userNameContainer.html('Bienvenido ' + userNameLogged + '!');
    initListenersToButtons();
}

function initzializeVariables() { // initzialize variables getting html with jQuery
    userNameContainer = $('#user_name');
    logoutButton = $('#logout_button');

    idToDelete = '';

    addProductButton = $('#add_product_button');
    table = $('#table');
    
    form = $('#form');
    idInput = $('#id_input');
    nameInput = $('#name_input');
    photoInput = $('#photo_input');
    brandInput = $('#brand_input');
    quantityInput = $('#quantity_input');
    priceInput = $('#price_input');

    modalForm = $('#modal_form');
    modalForm_SaveButton = $('#modal_form_save_button');
    modalForm_CloseButton = $('#modal_form_close_button');

    modalError = $('#modal_error');
    modalError_CloseButton = $('#modal_error_close_button');

    modalSureDelete = $('#modal_sure_delete');
    modalSureDelete_Deletebutton = $('#modal_sure_delete_delete_button');
    modalSureDelete_CloseButton = $('#modal_sure_delete_close_button');
    
    modalImage = $('#modal_image');
    modalImage_Image = $('#modal_image_image');
    modalImage_CloseButton = $('#modal_image_close_button');
}

function initListenersToButtons() {
    logoutButton.click(function (e) {  // clear localstorage and redirect to to login when click logout
        e.preventDefault();
        localStorage.clear();
        window.location.replace("../validar.php");
    });
    
    addProductButton.click(function (e) { // show modal when click add product button
        e.preventDefault();
        clearInputsForm();
        modalForm.css('display', 'flex');
    });

    modalForm_CloseButton.click(function (e) { // close modal form when click to close button
        e.preventDefault();
        modalForm.css('display', 'none');
    });

    modalForm_SaveButton.click(function (e) { // save or update product when click save button
        e.preventDefault();
        if (isFormValid()) {
            if (!idInput.prop('readonly')) {
                addProduct();
            } else {
                updateProduct();
            }
        }
    });

    modalSureDelete_CloseButton.click(function (e) { // close modal to delete when click close button
        e.preventDefault();
        idToDelete = '';
        modalSureDelete.css('display', 'none');
    });

    modalSureDelete_Deletebutton.click(function (e) { // delete cliern when click delete button on modal
        e.preventDefault();
        deleteProduct();
    });

    modalImage_CloseButton.click(function (e) {  // close modal image when click close button
        e.preventDefault();
        modalImage.css('display', 'none');
    });

    modalError_CloseButton.click(function (e) { // close modal error when click close button
        e.preventDefault();
        modalError.css('display', 'none');
    });
}

function getProducts() { // get products and save on global variable
    $.ajax({
        type: 'GET',
        url: '../php/controllers/products/listProductsController.php',
        dataType: 'json',
        success: (response, status, header) => {
            if (Array.isArray(response)) {
                response.forEach(product => {
                    addProductRowToTable(product.id, product.photo, product.name, product.price); // add html row for that product
                })
            }
        }
    });
}

function isFormValid() { // check if form is valid to save or update
    return nameInput.val() != '' && quantityInput.val() != '' && priceInput.val() != '';
}

function addProduct() { // do petition to create new product on php
    let url_controller = '../php/controllers/products/addProductController.php';
    saveProduct(url_controller, addProductRowToTable);
}

function updateProduct() { // do petition to update exist product on php
    let url_controller = '../php/controllers/products/updateProductController.php';
    saveProduct(url_controller, updateProductRowToTable);
}

function saveProduct(url_controller, functionToCall) {
    let formData = new FormData(form[0]); // get form data like object

    $.ajax({
        type: 'POST',
        url: url_controller,
        data: formData,
        dataType: 'json',
        processData: false,
        contentType : false,
        success: (response, status, header) => {
            if (response !== 'ERROR') {
                functionToCall(response.id, response.photo, response.name, response.price); // call to function 'update row' or 'add row' product on html
                modalForm.css('display', 'none');
            } else {
                modalError.css('display', 'flex'); // show modal error if not update or create product
            }
        }
    });
}

function addProductRowToTable(id, photo, name, price) {
    let row = generateProductRowToTable(id, photo, name, price); // create html row product
    
    table.append(row);

    addListenersToRowButtons(id, photo); // add listeners to buttons for edit or delete product
}

function updateProductRowToTable(id, photo, name, price) {
    let row = generateProductRowToTable(id, photo, name, price); // create html row product

    $('#' + id).replaceWith(row);
    
    addListenersToRowButtons(id, photo); // add listeners to buttons for edit or delete product
}

function generateProductRowToTable(id, photo, name, price) {
    let editButton = createEditButton(id); // create html for edit button
    let deleteButton = createDeleteButton(id); // create html for delete button
    let row = '<div id="' + id + '"class="table-row">';
    row += '    <div class="table-item">' + id + '</div>';
    if (photo && photo.name) {
        row += '    <div class="table-item"><img id="image-' + id + '" class="table-item-image" src="../img/' + photo.name + '" alt="product image"></div>';
    } else if (photo && photo != '') {
        row += '    <div class="table-item"><img id="image-' + id + '" class="table-item-image" src="../img/' + photo + '" alt="product image"></div>';
    } else {
        row += '    <div class="table-item"><img id="image-' + id + '" class="table-item-image" src="" alt="product image"></div>';
    }
    row += '    <div class="table-item">' + name + '</div>';
    row += '    <div class="table-item">' + price + ' &euro;</div>';
    row += '    <div class="table-item">' + editButton + deleteButton +'</div>'; // add html buttons
    row += '</div>';

    return row;
}

function addListenersToRowButtons(id, photo) { // add listeners to buttons for edit and delete client
    $('#delete-' + id).click(function (e) {
        e.preventDefault();
        idToDelete = id; // save on global variable what product want to delete
        modalSureDelete.css('display', 'flex');
    });

    $('#edit-' + id).click(function (e) {
        e.preventDefault();
        getOneProduct(id);
    });

    $('#image-' + id).click(function (e) { // open modal image when click on image
        e.preventDefault();
        openModalImage(photo);
    });
}

function openModalImage(photo) {
    let image_name = photo;
    if (photo.name) { // depend if modal is open after update row
        image_name = photo.name;
    }
    
    let img = '<img class="modal_image__image" src="../img/' + image_name + '" alt="product image">';
    modalImage_Image.html(img);
    modalImage.css('display', 'flex');
}

function getOneProduct(id) { // do petition to get all data for one product
    $.ajax({
        type: 'GET',
        url: '../php/controllers/products/getOneProductController.php',
        data: {'id': id},
        dataType: 'json',
        success: (response, status, header) => {
            addProductDataToForm(response); // add product data to form
            modalForm.css('display', 'flex');
        }
    });
}

function addProductDataToForm(product) { // add product data to form
    idInput.prop('readonly', true); // use property readonly when is updating client
    idInput.val(product.id);
    nameInput.val(product.name);
    photoInput.val('');
    brandInput.val(product.brand);
    quantityInput.val(product.quantity);
    priceInput.val(product.price);
}

function createEditButton(id) { // generate html for edit client button
    return '<button id="edit-' + id + '" class="button button--edit button--small">Editar</button>';
}

function createDeleteButton(id) { // generate html for delete client button
    return '<button id="delete-' + id + '" class="button button--delete button--small">Borrar</button>';
}

function deleteProduct() { // do petition to delete exist product on php
    $.ajax({
        type: 'POST',
        url: '../php/controllers/products/removeProductController.php',
        data: {id: idToDelete},
        dataType: 'json',
        success: (response, status, header) => {
            if (response === 'SUCCESS') {
                $('#' + idToDelete).remove(); // remove html row for product
                idToDelete = ''; // unset global variable for dni to delete
                modalSureDelete.css('display', 'none');
            }
        }
    });
}

function clearInputsForm() {
    idInput.prop('readonly', false); // unset readonly by default
    idInput.val('');
    nameInput.val('');
    photoInput.val('');
    brandInput.val('');
    quantityInput.val('');
    priceInput.val('');
}