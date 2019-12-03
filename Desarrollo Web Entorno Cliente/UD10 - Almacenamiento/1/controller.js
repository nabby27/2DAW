let input;
let button;
let cookie;

window.onload = () => {
    init();
}

function init() {
    input = document.getElementById('input');
    button = document.getElementById('guardar');
    cookie = document.getElementById('cookie');

    if(existCookie('text')) {
        cookie.textContent = getCookie('text');
    }

    button.addEventListener('click', () => {
        setCookie('text', input.value, 365);
        cookie.innerHTML = getCookie('text');
    });
}
