$(document).ready(function(){
    console.log("juquery ok");
    var email = document.getElementById("correo");


    email.addEventListener("keyup", function (event) {
        console.log(email.value);
        console.log(email.checkValidity());
        if (email.validity.typeMismatch) {
               alert("Error de validación");
              email.setCustomValidity("¡Yo esperaba una dirección de correo, hombre!");
      } else {
            email.setCustomValidity("");
      }
    });


 var usuario = document.getElementById("usuario");
    usuario.addEventListener("blur",compruebo_usuario);


});


function compruebo_usuario(){
    
    var dato_login = {login:$('#usuario').val()};
    console.log(dato_login)
    $.ajax({
        url : 'compruebo.php',
        data : dato_login,
        type : 'POST',
        dataType : 'json',
        success : function(respuesta) {
           console.log(respuesta);
           console.log(respuesta.disponible);
           if(respuesta.disponible=="true"){
               alert("nombre correcto");
           }else{
            alert("nombre incorrecto");
            $('#usuario').val(respuesta.alternativa);
           }
        },
        error : function(xhr, status) {
            alert('Disculpe, existió un problema');
        }
    });

}
