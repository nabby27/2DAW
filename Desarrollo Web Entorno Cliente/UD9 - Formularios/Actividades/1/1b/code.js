$.validator.setDefaults({
    submitHandler: function () {
        alert('se ha enviado');
    }
})

$.validator.addMethod('valorNoIgual', function(valor, elemento, arg) {
    return arg != valor;
}, 'texto por defecto cuando el valor no es igual al parametro introducido');

$(document).ready(function () {
    
    $('#formulario').validate({
        rules: {
            nombre: {
                required: true
            },
            edad: {
                required: true,
                number: true,
                min: 18,
                max: 100
            },
            password: {
                required: true,
                minlength: 5
            },
            confirm_password: {
                required: true,
                minlength: 5,
                equalTo: password
            },
            selector: {
                valorNoIgual: ""
            }
        },
        messages: {
            nombre: {
                required: 'Se necesita un nombre'
            },
            edad: {
                required: 'Se necesita una edad',
                number: 'La edad tiene que ser un número',
                min: 'La edad tiene que ser mayor de 18',
                max: 'La edad tiene que ser menor de 100',
            },
            password: {
                required: 'Se necesita una contraseña',
                minlength: 'La contraseña tiene que ser superior a 5 caracteres'
            },
            selector: {
                valorNoIgual: 'No puedes elegir ese valor'
            }
        }
    })

});

