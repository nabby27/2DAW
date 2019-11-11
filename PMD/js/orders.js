let clients;
let products;
let linesOfOrdersOpen;

let userNameContainer;
let userNameLogged;
let logoutButton;

let addOrderButton;
let table;

let formOrder;
let idOrderInput;
let clientOrderSelect;

let formLine;
let idLineInput;
let idOrderOfLineInput;
let quantityInput;
let productLineSelect;

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
    getClientsAndProductsAndOrders();

    userNameContainer = $('#user_name');
    logoutButton = $('#logout_button');

    idOrderToDelete = '';
    idLineToDelete = '';
    linesOfOrdersOpen = [];

    addOrderButton = $('#add_order_button');
    table = $('#table');
    
    formOrder = $('#form_order');
    idOrderInput = $('#id_order_input');
    clientOrderSelect = $('#client_order_select');

    formLine = $('#form_line');
    idLineInput = $('#id_line_input');
    idOrderOfLineInput = $('#id_order_of_line_input');
    quantityInput = $('#quantity_input');
    productLineSelect = $('#product_line_select');

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

    modalSureDeleteLine_CloseButton.click(function (e) { 
        e.preventDefault();
        modalSureDeleteLine.css('display', 'none');
    });

    
    modalSureDeleteLine_Deletebutton.click(function (e) { 
        e.preventDefault();
        deleteLine();
    });
    
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

function getClientsAndProductsAndOrders() {
    $.ajax({
        type: 'GET',
        url: '../php/controllers/clients/listClientsController.php',
        dataType: 'json',
        success: (response, status, header) => {
            clients = response;
            getProducts();
        }
    });
}

function getProducts() {
    $.ajax({
        type: 'GET',
        url: '../php/controllers/products/listProductsController.php',
        dataType: 'json',
        success: (response, status, header) => {
            products = response;
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

function addProductsToSelect() {
    let htmlOptions = '';
    products.forEach(product => {
        htmlOptions += '<option class="select--option" value=' + product.id + '>' + product.name  + '</option>';
    })
    
    productLineSelect.html(htmlOptions);
}

function isFormLineValid() {
    return quantityInput.val() != '' && productLineSelect.val() != '';
}

function addOrder() {
    let url_controller = '../php/controllers/orders/addOrderController.php';
    save(url_controller, addOrderRowToTable, formOrder[0]);
}

function addLine() {
    let url_controller = '../php/controllers/orders/addLineController.php';
    save(url_controller, addLinesOfOrderRowToTable, formLine[0]);
}

function updateOrder() {
    let url_controller = '../php/controllers/orders/updateOrderController.php';
    save(url_controller, updateOrderRowToTable, formOrder[0]);
}

function updateLine() {
    let url_controller = '../php/controllers/orders/updateLineController.php';
    save(url_controller, addLinesOfOrderRowToTable, formLine[0]);
}

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

function getProductName(productId) {
    name = '';
    products.forEach(product => {
        if (product.id === productId) {
            name = product.name;
        }
    })

    return name;
}

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
        if (linesOfOrdersOpen.includes(orderId)) {
            linesOfOrdersOpen = linesOfOrdersOpen.filter((value) => { return value !== orderId });
            closeLinesOfOrder(orderId);
        } else {
            linesOfOrdersOpen.push(orderId);
            getLinesOfOrder(orderId);
        }
    });
}

function getLinesOfOrder(orderId) {
    $.ajax({
        type: 'GET',
        url: '../php/controllers/orders/getLinesOfOneOrderController.php',
        dataType: 'json',
        data: {'idOrder': orderId},
        success: (response, status, header) => {
            if (Array.isArray(response)) {
                addLinesOfOrderRowToTable(response, orderId);
            }
        }
    });
}

function closeLinesOfOrder(orderId) {
    $('#order-' + orderId + '_lines').remove();
}

function addLinesOfOrderRowToTable(linesOfOrder, orderId) {
    if (linesOfOrder[0] && !orderId) {
        orderId = linesOfOrder[0].orderId
    }
    $('#order-' + orderId + '_lines').remove();

    let rows = '<div id="order-' + orderId + '_lines" class="subtable">';
    rows += '    <div class="subtable-row">';
    rows += '       <div class="subtable-item">ID</div>';
    rows += '       <div class="subtable-item">Nombre</div>';
    rows += '       <div class="subtable-item">Cantidad</div>';
    rows += '       <div class="subtable-item">Operaciones</div>';
    rows += '   </div>';

    linesOfOrder.forEach(line => {
        let editButton = createLineEditButton(line.orderId, line.lineId);
        let deleteButton = createLineDeleteButton(line.orderId, line.lineId);

        rows += '<div id="order-' + line.orderId + '_line-' + line.lineId + '" class="subtable-row">';
        rows += '    <div class="subtable-item">' + line.lineId + '</div>';
        rows += '    <div class="subtable-item">' + getProductName(line.productId) + '</div>';
        rows += '    <div class="subtable-item">' + line.quantity + '</div>';
        rows += '    <div class="subtable-item">' + editButton + deleteButton +'</div>';
        rows += '</div>';
    })

    rows += '    <div class="subtable-row subtable-row__add">';
    rows += '       <button id="order-' + orderId + '_add" class="button button--small">A&ntilde;adir producto</button>';
    rows += '   </div>';
    rows += '</div>';

    $('#order-' + orderId).after(rows);

    linesOfOrder.forEach(line => {
        addListenersToLineOfOrderRowButtons(orderId, line.lineId);
    })

    $('#order-' + orderId + '_add').click(function (e) {
        e.preventDefault();
        clearLineForm(orderId);
        addProductsToSelect();
        modalFormLine.css('display', 'flex');
    });
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
        idOrderToDelete = orderId;
        modalSureDeleteLine.css('display', 'flex');
    });

    $('#edit_order-' + orderId + '_line-' + lineId).click(function (e) {
        e.preventDefault();
        getOneLine(orderId, lineId);
    });
}

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

function getOneLine(orderId, lineId) {
    $.ajax({
        type: 'GET',
        url: '../php/controllers/orders/getOneLineController.php',
        data: {'idOrder': orderId, 'idLine': lineId},
        dataType: 'json',
        success: (response, status, header) => {
            addLineDataToForm(response);
            modalFormLine.css('display', 'flex');
        }
    });
}

function addOrderDataToForm(order) {
    addClientsToSelect();
    idOrderInput.prop('readonly', true);
    idOrderInput.val(order.orderId);
    clientOrderSelect.val(order.dniClient);
}

function addLineDataToForm(line) {
    addProductsToSelect();
    idLineInput.prop('readonly', true);
    idOrderOfLineInput.val(line.orderId);
    idLineInput.val(line.lineId);
    quantityInput.val(line.quantity);
    productLineSelect.val(line.productId);
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
                $('#order-' + idOrderToDelete + '_lines').remove();
                idOrderToDelete = '';
                modalSureDeleteOrder.css('display', 'none');
            }
        }
    });
}

function deleteLine() {
    $.ajax({
        type: 'POST',
        url: '../php/controllers/orders/removeLineOfOrderController.php',
        data: {idLine: idLineToDelete, idOrder: idOrderToDelete},
        dataType: 'json',
        success: (response, status, header) => {
            if (response === 'SUCCESS') {
                $('#order-' + idOrderToDelete + '_line-' + idLineToDelete).remove();
                idOrderToDelete = '';
                idLineToDelete = '';
                modalSureDeleteLine.css('display', 'none');
            }
        }
    });
}

function clearOrderForm() {
    idOrderInput.prop('readonly', false);
    idOrderInput.val('');
    clientOrderSelect.val('');
}

function clearLineForm(orderId) {
    idLineInput.prop('readonly', false);
    idLineInput.val('');
    idOrderOfLineInput.val(orderId);
    quantityInput.val('1');
    productLineSelect.val('');
}