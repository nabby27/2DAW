money = parseInt(prompt("Introduce el dinero (múltiplo de 5)"));
bills = [500, 200, 100, 50, 20, 10, 5];

if (money % 5 != 0) {
    alert("El número no es múltiplo de 5");
} else {
    bills.forEach(bill => {
        while (money >= bill) {
            img = './img/EUR_' + bill + '.jpg';
            document.write("<img src=" + img + " style='max-width: 20%'>");
            money -= bill;
        }
    });
}

