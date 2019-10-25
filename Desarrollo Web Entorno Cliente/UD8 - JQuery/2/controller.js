let products;

$(document).ready(() => {
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
        success: function (response) {
            products = response.producto;
            setProductosOnSelect(response);
        }
    });
}

function setProductosOnSelect() {
    products.forEach(product => {
        $('#producto').append(new Option( product.name,  product.name));
    });
}

function addProductToTable(event) {
    let product = $('#producto').val();
    let quantity = $('#cantidad').val();
    let price = $('#puni').val();
    let totalPriceProduct = price * quantity

    $('tbody').append('<tr><td>' + product + '</td><td>' + quantity + '</td><td>' + price + '</td><td>' + totalPriceProduct + '</td><td><button>Borrar</button></td></tr>')
}