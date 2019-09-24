function start() {
    setTimeout("printDate()", 20000);
}

function printDate() {
    let text = '';
    text += new Date().toISOString() + '<br>';
    text += new Date().toDateString() + '<br>';
    text += new Date().toUTCString() + '<br>';
    text += new Date().toLocaleString() + '<br>';
    document.write(text);
}