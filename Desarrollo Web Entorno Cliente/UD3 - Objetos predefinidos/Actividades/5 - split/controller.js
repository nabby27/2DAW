function start() {
    allDataString = prompt();
    allDataArray = allDataString.split(":");

    let name = allDataArray[0];
    let surname = allDataArray[1];
    let telephone = allDataArray[2];
    let email = allDataArray[3];
    let cp = allDataArray[4];

    let textToShow = 'name: ' + name + '<br>' +
        'surname: ' + surname + '<br>' +
        'telephone: ' + telephone + '<br>' +
        'email: ' + email + '<br>' +
        'servidor: ' + email.split('@')[1] + '<br>' +
        'cp: ' + cp + '<br>';

    document.write(textToShow);
}
