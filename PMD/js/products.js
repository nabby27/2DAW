let addProductButton;
let table;

let form;
let idInput;
let nameInput;
let photoInput;
let brandInput;
let quantityInput;
let priceInput;

let saveButton;
let closeButton;
let modalForm;

let modalError;
let modalErrorCloseButton;

let modalSureDelete;
let modalSureDelete_Deletebutton;
let modalSureDelete_CloseButton;

let idToDelete;

$(document).ready(function() {
    init();
    // getProducts();
});

function init() {

    idToDelete = '';

    addProductButton = $('#add_product_button');
    table = $('#table');
    
    form = $('#form');
    idInput = $('#dni_input');
    nameInput = $('#name_input');
    photoInput = $('#photo_input');
    brandInput = $('#brand_input');
    quantityInput = $('#quantity_input');
    priceInput = $('#price_input');

    modalForm = $('#modal_form');
    modalFormSaveButton = $('#modal_form_save_button');
    modalFormCloseButton = $('#modal_form_close_button');

    modalError = $('#modal_error');
    modalErrorCloseButton = $('#modal_error_close_button');

    modalSureDelete = $('#modal_sure_delete');
    modalSureDelete_Deletebutton = $('#modal_sure_delete_delete_button');
    modalSureDelete_CloseButton = $('#modal_sure_delete_close_button');
    
    addProductButton.click(function (e) { 
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
            if (!idInput.prop('disabled')) {
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

    modalErrorCloseButton.click(function (e) { 
        e.preventDefault();
        modalError.css('display', 'none');
    });

    modalSureDelete_Deletebutton.click(function (e) { 
        e.preventDefault();
        deleteProduct();
    });
}

function getProducts() {
    $.ajax({
        type: 'GET',
        url: '../php/controllers/products/listProductsController.php',
        dataType: 'json',
        success: (response, status, header) => {
            response.forEach(product => {
                addProductRowToTable(product.id, product.photo, product.name, product.price);
            })
        }
    });
}

function isFormValid() {
    return idInput.val() != '' && nameInput.val() != '' && photoInput.val() != '' && quantityInput.val() != '' && priceInput.val() != '';
}

function addProduct() {
    let url_controller = '../php/controllers/products/addProductController.php';
    saveProduct(url_controller, addProductRowToTable);
}

function updateClient() {
    let url_controller = '../php/controllers/products/updateProductController.php';
    saveProduct(url_controller, updateProductRowToTable);
}

function saveProduct(url_controller, functionToCall) {
    dataForm = {
        'id': idInput.val(),
        'name': nameInput.val(),
        'photo': photoInput.val(),
        'brand': brandInput.val(),
        'quantity': quantityInput.val(),
        'price': priceInput.val()
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

function addProductRowToTable(id, photo, name, price) {
    let row = generateClientRowToTable(id, photo, name, price);
    
    table.append(row);

    addListenersToRowButtons(id);
}

function updateProductRowToTable(id, photo, name, price) {
    let row = generateClientRowToTable(id, photo, name, price);

    $('#' + id).replaceWith(row);
    
    addListenersToRowButtons(id);
}

function generateClientRowToTable(id, photo, name, price) {
    let editButton = createEditButton(id);
    let deleteButton = createDeleteButton(id);
    let row = '<div id="' + id + '"class="table-row">';
    row += '    <div class="table-item">' + photo + '</div>';
    row += '    <div class="table-item">' + name + '</div>';
    row += '    <div class="table-item">' + price + '</div>';
    row += '    <div class="table-item">' + editButton + deleteButton +'</div>';
    row += '</div>';
    
    return row;
}

function addListenersToRowButtons(id) {
    $('#delete-' + id).click(function (e) {
        e.preventDefault();
        idToDelete = id;
        modalSureDelete.css('display', 'flex');
    });

    $('#edit-' + id).click(function (e) {
        e.preventDefault();
        getOneProduct(id);
    });
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
    idInput.prop('disabled', true);
    idInput.val(product.idProducto);
    nameInput.val(product.nombre);
    photoInput.val(product.foto);
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
    idInput.prop('disabled', false);
    idInput.val('');
    nameInput.val('');
    photoInput.val('');
    brandInput.val('');
    quantityInput.val('');
    priceInput.val('');
}