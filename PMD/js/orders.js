let clients;

let userNameContainer;
let userNameLogged;
let logoutButton;

let addOrderButton;
let table;

let formOrder;
let idOrderInput;
let dateInput;
let clientOrderSelect;

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

let modalSureDeleteOrder;
let modalSureDeleteOrder_Deletebutton;
let modalSureDeleteOrder_CloseButton;

let modalSureDeleteLine;
let modalSureDeleteLine_Deletebutton;
let modalSureDeleteLine_CloseButton;

let idOrderToDelete;
let idLineToDelete;

$(document).ready(function() {
    userNameLogged = localStorage.getItem('user_name');
    
    if (!userNameLogged) {
        checkUserLogged();
    } else {
        init();
    }
});

function init() {
    getClientsAndOrders();

    userNameContainer = $('#user_name');
    logoutButton = $('#logout_button');

    idOrderToDelete = '';
    idLineToDelete = '';

    addOrderButton = $('#add_order_button');
    table = $('#table');
    
    formOrder = $('#form_order');
    idOrderInput = $('#id_order_input');
    dateInput = $('#date_input');
    clientOrderSelect = $('#client_order_select');

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

    modalSureDeleteOrder = $('#modal_sure_delete_order');
    modalSureDeleteOrder_Deletebutton = $('#modal_sure_delete_order_delete_button');
    modalSureDeleteOrder_CloseButton = $('#modal_sure_delete_order_close_button');

    modalSureDeleteLine = $('#modal_sure_delete_line');
    modalSureDeleteLine_Deletebutton = $('#modal_sure_delete_line_delete_button');
    modalSureDeleteLine_CloseButton = $('#modal_sure_delete_line_close_button');

    userNameContainer.html('Bienvenido ' + userNameLogged + '!');

    logoutButton.click(function (e) { 
        e.preventDefault();
        localStorage.clear();
        window.location.replace("../validar.php");
    });

    addOrderButton.click(function (e) { 
        e.preventDefault();
        clearOrderForm();
        addClientsToSelect();
        modalFormOrder.css('display', 'flex');
    });

    modalFormOrder_CloseButton.click(function (e) { 
        e.preventDefault();
        modalFormOrder.css('display', 'none');
    });

    modalFormOrder_SaveButton.click(function (e) { 
        e.preventDefault();
        if (!idOrderInput.prop('readonly')) {
            addOrder();
        } else {
            updateOrder();
        }
    });

    modalFormLine_CloseButton.click(function (e) { 
        e.preventDefault();
        modalFormLine.css('display', 'none');
    });

    modalFormLine_SaveButton.click(function (e) { 
        e.preventDefault();
        if (isFormLineValid()) {
            if (!idLineInput.prop('readonly')) {
                addLine();
            } else {
                updateLine();
            }
        }
    });

    modalSureDeleteOrder_CloseButton.click(function (e) { 
        e.preventDefault();
        idOrderToDelete = '';
        modalSureDeleteOrder.css('display', 'none');
    });

    modalSureDeleteOrder_Deletebutton.click(function (e) { 
        e.preventDefault();
        deleteOrder();
    });

    // modalSureDeleteLine_CloseButton.click(function (e) { 
    //     e.preventDefault();
    //     modalSureDeleteLine.css('display', 'none');
    // });

    
    // modalSureDeleteLine_Deletebutton.click(function (e) { 
    //     e.preventDefault();
    //     deleteLine();
    // });
    
    modalError_CloseButton.click(function (e) { 
        e.preventDefault();
        modalError.css('display', 'none');
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

function getClientsAndOrders() {
    $.ajax({
        type: 'GET',
        url: '../php/controllers/clients/listClientsController.php',
        dataType: 'json',
        success: (response, status, header) => {
            clients = response;
            getOrders();
        }
    });
}

function getOrders() {
    $.ajax({
        type: 'GET',
        url: '../php/controllers/orders/listOrdersController.php',
        dataType: 'json',
        success: (response, status, header) => {
            if (Array.isArray(response)) {
                response.forEach(order => {
                    addOrderRowToTable(order);
                })
            }
        }
    });
}

function addClientsToSelect() {
    let htmlOptions = '';
    clients.forEach(client => {
        htmlOptions += '<option class="select--option" value=' + client.dni + '>' + client.name  + '</option>';
    })
    
    clientOrderSelect.html(htmlOptions);
}

// function isFormLineValid() {
//     return nameInput.val() != '' && quantityInput.val() != '' && priceInput.val() != '';
// }

function addOrder() {
    let url_controller = '../php/controllers/orders/addOrderController.php';
    save(url_controller, addOrderRowToTable, formOrder[0]);
}

// function addLine() {
//     let url_controller = '../php/controllers/orders/addLineController.php';
//     save(url_controller, addLineRowToTable, formLine[0]);
// }

function updateOrder() {
    let url_controller = '../php/controllers/orders/updateOrderController.php';
    save(url_controller, updateOrderRowToTable, formOrder[0]);
}

// function updateLine() {
//     let url_controller = '../php/controllers/orders/updateLineController.php';
//     save(url_controller, updateLineRowToTable, formLine[0]);
// }

function save(url_controller, functionToCall, form) {
    let formData = new FormData(form);

    $.ajax({
        type: 'POST',
        url: url_controller,
        data: formData,
        dataType: 'json',
        processData: false,
        contentType : false,
        success: (response, status, header) => {
            if (response !== 'ERROR') {
                functionToCall(response);
                modalFormOrder.css('display', 'none');
                modalFormLine.css('display', 'none');
            } else {
                modalError.css('display', 'flex');
            }
        }
    });
}

function addOrderRowToTable(order) {
    let row = generateOrderRowToTable(order.orderId, order.date, order.dniClient);

    table.append(row);

    addListenersToOrderRowButtons(order.orderId);
}

function updateOrderRowToTable(order) {
    let row = generateOrderRowToTable(order.orderId, order.date, order.dniClient);

    $('#order-' + order.orderId).replaceWith(row);
    
    addListenersToOrderRowButtons(order.orderId);
}

function generateOrderRowToTable(orderId, date, dniClient) {
    let productsButton = createProductsButton(orderId);
    let editButton = createOrderEditButton(orderId);
    let deleteButton = createOrderDeleteButton(orderId);

    let row = '<div id="order-' + orderId + '"class="table-row">';
    row += '    <div class="table-item">' + orderId + '</div>';
    row += '    <div class="table-item">' + date + '</div>';
    row += '    <div class="table-item">' + getClientName(dniClient) + '</div>';
    row += '    <div class="table-item">' + productsButton + editButton + deleteButton +'</div>';
    row += '</div>';

    return row;
}

function getClientName(dniClient) {
    name = '';
    clients.forEach(client => {
        if (client.dni === dniClient) {
            name = client.name;
        }
    })

    return name;
}

// function generateLineRowToTable(lineId, quantity, productId) {
//     let editButton = createEditButton(lineId);
//     let deleteButton = createDeleteButton(lineId);

//     let row = '<div id="line-' + lineId + '"class="table-row">';
//     row += '    <div class="table-item">' + lineId + '</div>';
//     row += '    <div class="table-item">' + quantity + '</div>';
//     row += '    <div class="table-item">' + productId + ' &euro;</div>';
//     row += '    <div class="table-item">' + editButton + deleteButton +'</div>';
//     row += '</div>';

//     return row;
// }

function addListenersToOrderRowButtons(orderId) {
    $('#delete_order-' + orderId).click(function (e) {
        e.preventDefault();
        idOrderToDelete = orderId;
        modalSureDeleteOrder.css('display', 'flex');
    });

    $('#edit_order-' + orderId).click(function (e) {
        e.preventDefault();
        getOneOrder(orderId);
    });

    $('#product_order-' + orderId).click(function (e) {
        e.preventDefault();
        getLinesOfOrder(orderId);
    });
}

function getLinesOfOrder(orderId) {
    $.ajax({
        type: 'GET',
        url: '../php/controllers/orders/getLinesOfOneOrderController.php',
        dataType: 'json',
        data: {'idOrder': orderId},
        success: (response, status, header) => {
            if (response !== 'ERROR') {
                if (Array.isArray(response)) {
                    addLinesOfOrderRowToTable(orderId, response);
                }
            }
        }
    });
}

function addLinesOfOrderRowToTable(orderId, linesOfOrder) {
    let headerRow = '<div class="table-row">';
    headerRow += '    <div class="table-item">ID</div>';
    headerRow += '    <div class="table-item">Cantidad</div>';
    headerRow += '    <div class="table-item">Operaciones</div>';
    headerRow += '</div>';

    $('order-' + orderId).append(headerRow);

    linesOfOrder.forEach(line => {
        let editButton = createLineEditButton(orderId, line.lineId);
        let deleteButton = createLineDeleteButton(orderId, line.lineId);

        let rows = '<div id="order-' + orderId + '_line-' + line.lineId + '" class="table-row">';
        rows += '    <div class="table-item">' + line.lineId + '</div>';
        rows += '    <div class="table-item">' + line.quantity + '</div>';
        rows += '    <div class="table-item">' + editButton + deleteButton +'</div>';
        rows += '</div>';

        $('order-' + orderId).append(rows);
        
        addListenersToLineOfOrderRowButtons(order.orderId, line.lineId);
    })
}

function createLineEditButton(orderId, lineId) {
    return '<button id="edit_order-' + orderId + '_line-' + lineId +'" class="button button--secundary button--small">Editar</button>';

}

function createLineDeleteButton(orderId, lineId) {
    return '<button id="delete_order-' + orderId + '_line-' + lineId +'" class="button button--danger button--small">Borrar</button>';
}

function addListenersToLineOfOrderRowButtons(orderId, lineId) {
    $('#delete_order-' + orderId + '_line-' + lineId).click(function (e) {
        e.preventDefault();
        idLineToDelete = lineId;
        debugger
        modalSureDeleteLine.css('display', 'flex');
    });

    $('#edit_order-' + orderId + '_line-' + lineId).click(function (e) {
        e.preventDefault();
        debugger
    });
}

// function openModalImage(photo) {
//     modalImage.css('display', 'flex');
//     let image_name = photo;
//     if (photo.name) {
//         image_name = photo.name;
//     }

//     let img = '<img class="modal_image__image" src="../img/' + image_name + '" alt="product image">';
//     modalImage_Image.html(img);
// }

function getOneOrder(id) {
    $.ajax({
        type: 'GET',
        url: '../php/controllers/orders/getOneOrderController.php',
        data: {'idOrder': id},
        dataType: 'json',
        success: (response, status, header) => {
            addOrderDataToForm(response);
            modalFormOrder.css('display', 'flex');
        }
    });
}

function addOrderDataToForm(order) {
    addClientsToSelect();
    idOrderInput.prop('readonly', true);
    idOrderInput.val(order.orderId);
    dateInput.val(order.date);
    clientOrderSelect.val(order.dniClient);
}

function createProductsButton(id) {
    return '<button id="product_order-' + id + '" class="button button--small">Productos</button>';
}

function createOrderEditButton(id) {
    return '<button id="edit_order-' + id + '" class="button button--secundary button--small">Editar</button>';
}

function createOrderDeleteButton(id) {
    return '<button id="delete_order-' + id + '" class="button button--danger button--small">Borrar</button>';
}

function deleteOrder() {
    $.ajax({
        type: 'POST',
        url: '../php/controllers/orders/removeOrderController.php',
        data: {id: idOrderToDelete},
        dataType: 'json',
        success: (response, status, header) => {
            if (response === 'SUCCESS') {
                $('#order-' + idOrderToDelete).remove();
                idOrderToDelete = '';
                modalSureDeleteOrder.css('display', 'none');
            }
        }
    });
}

// function deleteProduct() {
//     $.ajax({
//         type: 'POST',
//         url: '../php/controllers/products/removeProductController.php',
//         data: {id: idToDelete},
//         dataType: 'json',
//         success: (response, status, header) => {
//             if (response === 'SUCCESS') {
//                 $('#' + idToDelete).remove();
//                 idToDelete = '';
//                 modalSureDelete.css('display', 'none');
//             }
//         }
//     });
// }

function clearOrderForm() {
    idOrderInput.prop('readonly', false);
    idOrderInput.val('');
    dateInput.val('');
    clientOrderSelect.val('');
}