// decalre global variables
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
        error: (a, b, c) => {
            window.location.replace("../validar.php"); // redirect to login if back return that not user logged
        }
    });
}

function init() { // start
    getClientsAndProductsAndOrders();
    initzializeVariables();
    userNameContainer.html('Bienvenido ' + userNameLogged + '!');
    initListenersToButtons();
}

function initzializeVariables() { // initzialize variables getting html with jQuery
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
}

function initListenersToButtons() {
    logoutButton.click(function (e) { // clear localstorage and redirect to to login when click logout
        e.preventDefault();
        localStorage.clear();
        window.location.replace("../validar.php");
    });

    addOrderButton.click(function (e) { // show modal when click add order button
        e.preventDefault();
        clearOrderForm();
        addClientsToSelect();
        modalFormOrder.css('display', 'flex');
    });

    modalFormOrder_CloseButton.click(function (e) { // close modal form order when click to close button
        e.preventDefault();
        modalFormOrder.css('display', 'none');
    });

    modalFormOrder_SaveButton.click(function (e) { // save or update order when click save button
        e.preventDefault();
        if (!idOrderInput.prop('readonly')) {
            addOrder();
        } else {
            updateOrder();
        }
    });

    modalFormLine_CloseButton.click(function (e) { // close modal form line when click to close button
        e.preventDefault();
        modalFormLine.css('display', 'none');
    });

    modalFormLine_SaveButton.click(function (e) { // save or update line when click save button
        e.preventDefault();
        if (isFormLineValid()) {
            if (!idLineInput.prop('readonly')) {
                addLine();
            } else {
                updateLine();
            }
        }
    });

    modalSureDeleteOrder_CloseButton.click(function (e) { // close modal to delete order when click close button
        e.preventDefault();
        idOrderToDelete = '';
        modalSureDeleteOrder.css('display', 'none');
    });

    modalSureDeleteOrder_Deletebutton.click(function (e) { // delete order when click delete button on modal
        e.preventDefault();
        deleteOrder();
    });

    modalSureDeleteLine_CloseButton.click(function (e) { // close modal to delete line when click close button
        e.preventDefault();
        modalSureDeleteLine.css('display', 'none');
    });

    
    modalSureDeleteLine_Deletebutton.click(function (e) { // delete line when click delete button on modal
        e.preventDefault();
        deleteLine();
    });
    
    modalError_CloseButton.click(function (e) { // close modal error when click close button
        e.preventDefault();
        modalError.css('display', 'none');
    });
}

function getClientsAndProductsAndOrders() { // do petition to get clients, product, and orders
    $.ajax({
        type: 'GET',
        url: '../php/controllers/clients/listClientsController.php',
        dataType: 'json',
        success: (response, status, header) => {
            clients = response;
            getProducts(); // do petition to get products after get clients
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
            getOrders(); // do petition to get orders after get products
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
                    addOrderRowToTable(order); // add html row for that order
                })
            }
        }
    });
}

function addClientsToSelect() { // add html option on select for clients
    let htmlOptions = '';
    clients.forEach(client => {
        htmlOptions += '<option class="select--option" value=' + client.dni + '>' + client.name  + '</option>';
    })
    
    clientOrderSelect.html(htmlOptions);
}

function addProductsToSelect() { // add html option on select for products
    let htmlOptions = '';
    products.forEach(product => {
        htmlOptions += '<option class="select--option" value=' + product.id + '>' + product.name  + '</option>';
    })
    
    productLineSelect.html(htmlOptions);
}

function isFormLineValid() { // check if form line is valid to save or update
    return quantityInput.val() != '' && productLineSelect.val() != '';
}

function addOrder() { // do petition to create new order on php
    let url_controller = '../php/controllers/orders/addOrderController.php';
    save(url_controller, addOrderRowToTable, formOrder[0]);
}

function addLine() { // do petition to create new line on php
    let url_controller = '../php/controllers/orders/addLineController.php';
    save(url_controller, addLinesOfOrderRowToTable, formLine[0]);
}

function updateOrder() { // do petition to update exist order on php
    let url_controller = '../php/controllers/orders/updateOrderController.php';
    save(url_controller, updateOrderRowToTable, formOrder[0]);
}

function updateLine() { // do petition to update exist line on php
    let url_controller = '../php/controllers/orders/updateLineController.php';
    save(url_controller, addLinesOfOrderRowToTable, formLine[0]);
}

function save(url_controller, functionToCall, form) {
    let formData = new FormData(form); // get form data like object

    $.ajax({
        type: 'POST',
        url: url_controller,
        data: formData,
        dataType: 'json',
        processData: false,
        contentType : false,
        success: (response, status, header) => {
            if (response !== 'ERROR') {
                functionToCall(response); // call to function 'update row' or 'add row' for order or line on html
                modalFormOrder.css('display', 'none');
                modalFormLine.css('display', 'none');
            } else {
                modalError.css('display', 'flex');
            }
        }
    });
}

function addOrderRowToTable(order) {
    let row = generateOrderRowToTable(order.orderId, order.date, order.dniClient); // create html row order

    table.append(row);

    addListenersToOrderRowButtons(order.orderId); // add listeners to buttons for edit or delete order
}

function updateOrderRowToTable(order) {
    let row = generateOrderRowToTable(order.orderId, order.date, order.dniClient); // create html row order

    $('#order-' + order.orderId).replaceWith(row);
    
    addListenersToOrderRowButtons(order.orderId); // add listeners to buttons for edit or delete order
}

function generateOrderRowToTable(orderId, date, dniClient) {
    let productsButton = createProductsButton(orderId); // create html for see more button
    let editButton = createOrderEditButton(orderId); // create html for edit button
    let deleteButton = createOrderDeleteButton(orderId); // create html for delete button

    let row = '<div id="order-' + orderId + '"class="table-row">';
    row += '    <div class="table-item">' + orderId + '</div>';
    row += '    <div class="table-item">' + date + '</div>';
    row += '    <div class="table-item">' + getClientName(dniClient) + '</div>'; // show name for client
    row += '    <div class="table-item">' + productsButton + editButton + deleteButton +'</div>'; // add html buttons
    row += '</div>';

    return row;
}

function addListenersToOrderRowButtons(orderId) { // add listeners to buttons for edit, delete and see more client
    $('#delete_order-' + orderId).click(function (e) {
        e.preventDefault();
        idOrderToDelete = orderId; // save on global variable what order want to delete
        modalSureDeleteOrder.css('display', 'flex');
    });

    $('#edit_order-' + orderId).click(function (e) {
        e.preventDefault();
        getOneOrder(orderId);
    });

    $('#product_order-' + orderId).click(function (e) {
        e.preventDefault();
        // linesOfOrdersOpen have id of lines that are opened 
        if (linesOfOrdersOpen.includes(orderId)) { // if line is opened close it
            linesOfOrdersOpen = linesOfOrdersOpen.filter((value) => { return value !== orderId }); // remove line to openedLines
            closeLinesOfOrder(orderId);
        } else {
            linesOfOrdersOpen.push(orderId); // add line to openedLines
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
                addLinesOfOrderRowToTable(response, orderId); // add html row for that line
            }
        }
    });
}

function closeLinesOfOrder(orderId) { // remove html for lines
    $('#order-' + orderId + '_lines').remove();
}

function addLinesOfOrderRowToTable(linesOfOrder, orderId) { // generate html for all lines
    if (linesOfOrder[0] && !orderId) { // depend if is update or add
        orderId = linesOfOrder[0].orderId
    }
    $('#order-' + orderId + '_lines').remove();

    // header line row
    let rows = '<div id="order-' + orderId + '_lines" class="subtable">';
    rows += '    <div class="subtable-row">';
    rows += '       <div class="subtable-item">ID</div>';
    rows += '       <div class="subtable-item">Nombre</div>';
    rows += '       <div class="subtable-item">Cantidad</div>';
    rows += '       <div class="subtable-item">Operaciones</div>';
    rows += '   </div>';

    linesOfOrder.forEach(line => {
        let editButton = createLineEditButton(line.orderId, line.lineId); // generate html button for edit
        let deleteButton = createLineDeleteButton(line.orderId, line.lineId); // generate html button for delete

        rows += '<div id="order-' + line.orderId + '_line-' + line.lineId + '" class="subtable-row">';
        rows += '    <div class="subtable-item">' + line.lineId + '</div>';
        rows += '    <div class="subtable-item">' + getProductName(line.productId) + '</div>';
        rows += '    <div class="subtable-item">' + line.quantity + '</div>';
        rows += '    <div class="subtable-item">' + editButton + deleteButton +'</div>';
        rows += '</div>';
    })

    // line row to add product
    rows += '    <div class="subtable-row subtable-row__add">';
    rows += '       <button id="order-' + orderId + '_add" class="button button--small">A&ntilde;adir producto</button>';
    rows += '   </div>';
    rows += '</div>';

    $('#order-' + orderId).after(rows); // insert subtable after table

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

function getClientName(dniClient) { // get name of client passing dni
    name = '';
    clients.forEach(client => {
        if (client.dni === dniClient) {
            name = client.name;
        }
    })

    return name;
}

function getProductName(productId) { // get name of product passing id
    name = '';
    products.forEach(product => {
        if (product.id === productId) {
            name = product.name;
        }
    })

    return name;
}

function addListenersToLineOfOrderRowButtons(orderId, lineId) {
    $('#delete_order-' + orderId + '_line-' + lineId).click(function (e) {
        e.preventDefault();
        idLineToDelete = lineId; // save on global variable what line want to delete
        idOrderToDelete = orderId; // save on global variable what order want to delete
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
    idOrderInput.prop('readonly', true); // use property readonly when is updating client
    idOrderInput.val(order.orderId);
    clientOrderSelect.val(order.dniClient);
}

function addLineDataToForm(line) {
    addProductsToSelect();
    idLineInput.prop('readonly', true); // use property readonly when is updating client
    idOrderOfLineInput.val(line.orderId);
    idLineInput.val(line.lineId);
    quantityInput.val(line.quantity);
    productLineSelect.val(line.productId);
}

function createProductsButton(id) {
    return '<button id="product_order-' + id + '" class="button button--see-more button--small">Ver m&aacute;s</button>';
}

function createOrderEditButton(id) {
    return '<button id="edit_order-' + id + '" class="button button--edit button--small">Editar</button>';
}

function createOrderDeleteButton(id) {
    return '<button id="delete_order-' + id + '" class="button button--delete button--small">Borrar</button>';
}

function createLineEditButton(orderId, lineId) {
    return '<button id="edit_order-' + orderId + '_line-' + lineId +'" class="button button--edit button--small">Editar</button>';

}

function createLineDeleteButton(orderId, lineId) {
    return '<button id="delete_order-' + orderId + '_line-' + lineId +'" class="button button--delete button--small">Borrar</button>';
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
                idOrderToDelete = ''; // unset global variable for order to delete 
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
                idOrderToDelete = ''; // unset global variable for order to delete 
                idLineToDelete = ''; // unset global variable for line to delete 
                modalSureDeleteLine.css('display', 'none');
            }
        }
    });
}

function clearOrderForm() {
    idOrderInput.prop('readonly', false); // unset readonly by default 
    idOrderInput.val('');
    clientOrderSelect.val('');
}

function clearLineForm(orderId) {
    idLineInput.prop('readonly', false); // unset readonly by default
    idLineInput.val('');
    idOrderOfLineInput.val(orderId);
    quantityInput.val('1');
    productLineSelect.val('');
}