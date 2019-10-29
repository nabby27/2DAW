let products;
let grossTotalPrice;

$(document).ready(() => {

    grossTotalPrice = 0;

    getProducts()

    $('#producto').change((event) => { 
        let indexProduct = $('#producto')[0].selectedIndex
        $('#puni').val(products[indexProduct].precio);
    });

    $('#anyadir').click((event) => {
        addProductToTable(event);
    })
})

function getProducts() {
    $.ajax({
        type: "GET",
        url: "./assets/productos.json",
        dataType: 'json',
        success: (response, status, header) => {
            products = response.producto;
            setProductosOnSelect(response);
        },
        error: (header, status, error) => {

        },
        complete: (header, status) => {

        }
    });

    // $.ajax({
    //     type: "GET",
    //     url: "./assets/productos.json",
    //     dataType: 'json'
    // }).done((success) => {

    // }).fail((header, status, error) => {

    // }).always(() => {

    // });
}

function setProductosOnSelect() {
    products.forEach(product => {
        $('#producto').append(new Option(product.name,  product.name));
    });
}

function addProductToTable(event) {
    let product = $('#producto').val();
    let quantity = parseFloat($('#cantidad').val());
    let price = parseFloat($('#puni').val());
    let totalPriceProduct = Math.round(price * quantity * 100) / 100;
    grossTotalPrice += totalPriceProduct;

    $('tbody').append('<tr><td>' + product + '</td><td>' + quantity + '</td><td>' + price + '</td><td>' + totalPriceProduct + '</td><td><button class="delete">Borrar</button></td></tr>')
    deleteEvent()

    calculateAndPaintTotalsPrice(totalPriceProduct);
    
    clearForm();
}

function deleteEvent() {
    $('.delete').click(function (event) {
        event.preventDefault();
        let row = this.closest('tr');
        let value = parseFloat(row.children[3].innerHTML);
        grossTotalPrice -= value;
        row.remove();
        calculateAndPaintTotalsPrice(totalPriceProduct);
    })
}

function calculateAndPaintTotalsPrice() {
    iva = Math.round(grossTotalPrice * 21 / 100 * 100) / 100;
    netPrice = Math.round((grossTotalPrice + iva) * 100) / 100;

    $('#base').html(grossTotalPrice);
    $('#iva').html(iva);
    $('#total').html(netPrice);
}

function clearForm() {
    $('#producto').val();
    $('#cantidad').val(0);
    $('#puni').val(0);
}