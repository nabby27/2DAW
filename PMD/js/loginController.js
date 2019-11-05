let dniInput;
let loginButton;
let passswordInput;
let modal;

$(document).ready(function() {
    init();
});

function init() {
    dniInput = $('#dni_input');
    passswordInput = $('#password_input');
    loginButton = $('#login_button');
    modal = $('#modal');
    
    $('#login_button').click(function (e) { 
        e.preventDefault();
        doLogin();
    });

    $('#button_close_modal').click(function (e) { 
        e.preventDefault();
        modal.css('display', 'none');
    });
}

function doLogin() {
    $.ajax({
        type: 'POST',
        url: '../validar.php',
        data: {'dni': dniInput.val(), 'password': passswordInput.val()},
        dataType: 'json',
        success: (response, status, header) => {
            if (response.administrador === '0') {
                window.location.href = './gestion_clientes.html';
            }
            if (response === 'USER_NOT_EXIST') {
                modal.css('display', 'flex');
            }
        },
        error: (header, status, error) => {

        },
        complete: (header, status) => {

        }
    });
}