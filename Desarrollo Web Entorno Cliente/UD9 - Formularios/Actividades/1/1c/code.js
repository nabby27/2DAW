const completeState = 4;
const ajax = new XMLHttpRequest();

let usuario;

window.onload = () => {
    init();
}

function init() {
    usuario = document.getElementById('usuario');

    usuario.addEventListener('keyup', checkUserName);
}

function checkUserName(e) {
    ajax.open('POST', 'compruebo.php', true);
    ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    ajax.send('login=' + e.currentTarget.value);

    ajax.onreadystatechange = () => {
        if (ajax.readyState === completeState) {
            if (ajax.status == 200) {
                let response = JSON.parse(ajax.responseText);
                console.log(response)
            }
        }
    }
    
}