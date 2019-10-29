$(document).ready(() => {

    $('#comprobar').click((event) => {
        let username = $('#login').val();
        getAvailability(username);
    })
})

function getAvailability(username) {
    $.ajax({
        type: "POST",
        url: "ajax.php",
        dataType: 'xml',
        data: {login: username},
        beforeSend: () => {
            $('#comprobar').html('Cargando...');
        },
        success: (response, status, header) => {
            showAvailability(response);
        },
        error: (header, status, error) => {

        },
        complete: (header, status) => {
            $('#comprobar').html('<a id="comprobar" href="#">Comprobar disponibilidad</a>');
        }
    });
}

function showAvailability(response) {
    let available = $(response).find('disponible').text() == 'si';
    if(available) {
        alert('Username success');
    } else {
        $('#disponibilidad').html('');
        let list = '<ul>';
        $(response).find('login').each(function(e, a) {
            name = a.textContent;
            if (name && name != '') {
                list += '<li>' + name + '</li>';
            }
        })
        list += '</ul>';
        $('#disponibilidad').append(list);
    }
}