function start() {
    openWindowRandomPosition(10);
    let windowToClose = window.open('https://aules.edu.gva.es', '', 'width=200, height=100, scrollbars=0, left=0, top=0');
    closeWindowAfter2Seconds(windowToClose);
}

function openWindowRandomPosition(numbersOfWindow) {
    for (let numberOfWindow = 0; numberOfWindow < numbersOfWindow; numberOfWindow++) {
        let randomTopPosition = Math.random() * screen.height;
        let randomLeftPosition = Math.random() * screen.width;
        window.open('https://aules.edu.gva.es', '', 'width=200, height=100, scrollbars=0, left=' + randomLeftPosition + ', top=' + randomTopPosition);
    }
}

function closeWindowAfter2Seconds(window) {
    setTimeout(() => {
        window.close();
    },2000);
}