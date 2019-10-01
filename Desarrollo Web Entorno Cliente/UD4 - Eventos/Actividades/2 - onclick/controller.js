let interval = null;

function init() {
    interval = setInterval(() => {
        alert('Hola');
    }, 2000);
}

function stop() {
    clearInterval(interval);
}