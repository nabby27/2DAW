let msg;
let yes;
let no;

window.onload = () => {
    init();
}

function init() {
    msg = document.getElementById('msg');
    yes = document.getElementById('yes');
    no = document.getElementById('no');

    if (existCookie('accept') && getCookie('accept') == "true") {
        msg.style.display = "none";
    }

    yes.addEventListener('click', () => {
        msg.style.display = "none";
        setCookie('accept', true, 365);
    });

    no.addEventListener('click', () => {
        window.location.replace("http://localhost/Desarrollo%20Web%20Entorno%20Cliente/UD10%20-%20Almacenamiento");
    });
}
