let dniInput;
let loginButton;
let passswordInput;
let modal;
let buttonCloseModal;

$(document).ready(function() {
    init();
});

function init() {
    dniInput = $('#dni_input');
    passswordInput = $('#password_input');
    loginButton = $('#login_button');
    modal = $('#modal');
    buttonCloseModal = $('#button_close_modal');
    
    loginButton.click(function (e) { 
        e.preventDefault();
        doLogin();
    });

    buttonCloseModal.click(function (e) { 
        e.preventDefault();
        modal.css('display', 'none');
    });
}

function doLogin() {
    $.ajax({
        type: 'POST',
        url: 'php/controllers/validar.php',
        data: {'dni': dniInput.val(), 'password': passswordInput.val()},
        dataType: 'json',
        success: (response, status, header) => {
            if (response.admin === '1') {
                window.location.href = './admin/gestion_clientes.html';
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