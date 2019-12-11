window.onload= function(){
    var boton_enviar=document.getElementById("enviar");
    boton_enviar.addEventListener("click",function(evento){validarFormulario(evento)});
}


function validarFormulario(evento){
    evento.preventDefault();
    var form_ok=true;

    var txtNombre = document.getElementById('nombre').value;
    var txtEdad = document.getElementById('edad').value;
    var txtCorreo = document.getElementById('correo').value;
    var txtFecha = document.getElementById('fecha').value;
    var cmbSelector = document.getElementById('selector').selectedIndex;
    var chkEstado = document.getElementById('checkBox');
    var rbtEstado = document.getElementsByName('radioButton');
    var rbtEstado_elegido = null;
 
    var banderaRBTN = false;
 
    //Test campo obligatorio
    if(txtNombre == null || txtNombre.length == 0 || /^\s+$/.test(txtNombre)){
      alert('ERROR: El campo nombre no debe ir vacío o lleno de solamente espacios en blanco');
      form_ok=false;
    }
 
    //Test edad
    if(txtEdad == null || txtEdad.length == 0 || isNaN(txtEdad)){
      alert('ERROR: Debe ingresar una edad');
      form_ok=false;
    }
 
    //Test correo
    if(!(/\S+@\S+\.\S+/.test(txtCorreo))){
      alert('ERROR: Debe escribir un correo válido');
      form_ok=false;
    }
 
    //Test fecha
    if(!isNaN(txtFecha)){
      alert('ERROR: Debe elegir una fecha');
      form_ok=false;
    }
 
    //Test comboBox
    if(cmbSelector == null || cmbSelector == 0){
      alert('ERROR: Debe seleccionar una opcion del combo box');
      form_ok=false;
    }
 
    //Test checkBox
    if(!chkEstado.checked){
      alert('ERROR: Debe seleccionar el checkbox');
      form_ok=false;
    }
 
    //Test RadioButtons
    for(var i = 0; i < rbtEstado.length; i++){
      if(rbtEstado[i].checked){
        banderaRBTN = true;
        rbtEstado_elegido = rbtEstado[i];
    }
    }
    if(!banderaRBTN){
      alert('ERROR: Debe elegir una opción de radio button');
      form_ok=false;
    }
 
    
    if(form_ok){
        alert ("Los datos son :"+txtNombre+" - "+txtEdad+" - "+txtCorreo+" - "+txtFecha+" - "+cmbSelector+" - "+chkEstado.checked+" - "+rbtEstado_elegido.value);
        var form=document.getElementById("formulario");
        form.submit();
    }


  }
 

