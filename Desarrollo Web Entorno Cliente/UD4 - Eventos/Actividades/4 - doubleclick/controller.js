let hexNumbers = '0123456789ABCDEF';

document.ondblclick = init;

function init() {
    color = calculateRandomColor();
    document.body.style.backgroundColor = color;
    // document.body.bgColor = 'rgb(' + random + ',' + random + ',' + random + ')';
}

function calculateRandomColor() {
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += hexNumbers[Math.floor(Math.random() * 16)];
    }
    return color;
}
