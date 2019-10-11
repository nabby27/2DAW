let addButton;
let printButton;

let tableBody;

let productInput;
let quantityInput;
let priceInput;

let basePriceCell;
let ivaPriceCell;
let totalPriceCell;

let basePrice;

function init() {
    basePrice = 0;
    getElements();
    addEvents();
}

function getElements() {
    addButton = document.getElementById('addButton');
    printButton = document.getElementById('printButton');
    tableBody = document.getElementsByTagName('tbody')[0];
    productInput = document.getElementById('product');
    quantityInput = document.getElementById('quantity');
    priceInput = document.getElementById('price');
    basePriceCell = document.getElementById('basePriceCell');
    ivaPriceCell = document.getElementById('ivaPriceCell');
    totalPriceCell = document.getElementById('totalPriceCell');
}

function addEvents() {
    addButton.addEventListener('click', addProductToTable);
    printButton.addEventListener('click', printPage);
}

function addProductToTable() {
    let allData = getDataOfForm();
    paintRowOnTable(allData);
    clearFormValues();
    calculateAllPrices();
}

function getDataOfForm() {
    product = productInput.value;
    quantity = parseInt(quantityInput.value);
    price = parseFloat(priceInput.value);
    let totalPriceProduct = Math.round(price * quantity * 100) / 100;
    let actions = '<button id=\'deleteProduct\' onclick=\'deleteProduct(this)\'>Borrar</button>';
    basePrice += totalPriceProduct;

    return [product, quantity, price, totalPriceProduct, actions]
}

function paintRowOnTable(allData) {
    let row = document.createElement('tr');
    allData.forEach((data) => {
        let column = document.createElement('td');
        column.innerHTML = data;
        row.appendChild(column);
    })
    tableBody.appendChild(row);
}

function clearFormValues() {
    productInput.value = '';
    quantityInput.value = '';
    priceInput.value = '';
}

function calculateAllPrices() {
    ivaPrice = Math.round(basePrice * 21 / 100 * 100) / 100;

    basePriceCell.innerHTML = Math.round(basePrice * 100) / 100 + '€';
    ivaPriceCell.innerHTML =  Math.round(ivaPrice * 100) / 100 + '€';
    totalPriceCell.innerHTML = Math.round((basePrice + ivaPrice) * 100) / 100 + '€';
}

function deleteProduct(element) {
    let rowOfProduct = element.parentNode.parentNode;

    productName = rowOfProduct.getElementsByTagName('td')[0].innerHTML
    wantRemove = confirm('Seguro que desea eliminar el producto ' + productName + '?');
    
    if (wantRemove) {
        removeProductRow(rowOfProduct);
    }
}

function removeProductRow(rowOfProduct) {
    let totalPriceProduct = parseFloat(rowOfProduct.getElementsByTagName('td')[3].innerHTML);
    basePrice -= totalPriceProduct;
    rowOfProduct.parentNode.removeChild(rowOfProduct);
    calculateAllPrices();
}

function printPage() {
    window.print();
}