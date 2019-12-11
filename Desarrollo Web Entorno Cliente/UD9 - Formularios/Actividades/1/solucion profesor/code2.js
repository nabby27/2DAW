$.validator.setDefaults({
    submitHandler: function() {
        alert("submitted! (skipping validation for cancel button)");
    }
});

$(document).ready(function(){
    console.log("jquery ok");
    $.validator.addMethod("valueNotEquals", function(value, element, arg){
        return arg != value;
       }, "Value must not equal arg.");


    $("#formulario").validate({
		rules: {
           nombre: {
               required: true
           },
           edad: {
            required: true,
            digits: true,
            min:18,
            },
            usuario: {
                required: true,
                minlength: 2
            },
            password: {
                required: true,
                minlength: 5
            },
            confirm_password: {
                required: true,
                minlength: 5,
                equalTo: "#password"
            },
            correo: {
                required: true,
                email: true
            },
            usuario: {
                required: true,
                minlength: 3,
                maxlength: 10
            },
            fecha: {
                required: true,
                date: true
            },
            radioButton: {
                required: true,
            },
            checkBox: {
                required: true
            },
            selector: { valueNotEquals: "" }
            
        },
        messages: {
            
            usuario: {
                required: "Please enter a username",
                minlength: "Your username must consist of at least 2 characters"
            },
            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long"
            },
            confirm_password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long",
                equalTo: "Please enter the same password as above"
            },
            correo: "Please enter a valid email address",
            radioButton: "Selecciona un radio button",
            checkBox: "Seleccina un check",
            select: { valueNotEquals: "Please select an item!" }
        }
            
    })


});