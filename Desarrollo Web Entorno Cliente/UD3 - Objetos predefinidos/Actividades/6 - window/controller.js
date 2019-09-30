const URL_IES_CONSELLERIA = 'http://iesconselleria.edu.gva.es/';
const OPTIONS_WINDOW = 'width=300, height=300, scrollbars=0, menubar=0, toolbar=0, ';

function start() {
    openWindowsOnRandomPosition(5);
    let windowToClose = window.open(URL_IES_CONSELLERIA, '', OPTIONS_WINDOW + 'left=0, top=0');
    closeWindowAfter2Seconds(windowToClose);
}

function openWindowsOnRandomPosition(numbersOfWindow) {
    for (let numberOfWindow = 0; numberOfWindow < numbersOfWindow; numberOfWindow++) {
        let randomTopPosition = Math.random() * screen.height;
        let randomLeftPosition = Math.random() * screen.width;
        window.open(URL_IES_CONSELLERIA, '', OPTIONS_WINDOW + 'left=' + randomLeftPosition + ', top=' + randomTopPosition);
    }
}

function closeWindowAfter2Seconds(window) {
    setTimeout(() => {
        window.close();
    }, 2000);
}