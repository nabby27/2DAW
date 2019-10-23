function funcion_ajax(){
        conexion = new XMLHttpRequest();
        conexion.onreadystatechange = function(){
                if(conexion.readyState == 4){
                    if(conexion.status == 200){
                       objeto_response=JSON.parse(conexion.responseText)
                       document.getElementById("contenido").innerHTML = objeto_response.message
                       
                    }
                }
        };

        conexion.open('GET','holamundo.json',true);
        conexion.send();     

}

function mas_contenido(){
    conexion = new XMLHttpRequest();
    conexion.onreadystatechange = function(){
            if(conexion.readyState == 4){
                if(conexion.status == 200){
                   objeto_response=JSON.parse(conexion.responseText);
                   document.getElementById("mas_contenido").innerHTML +=objeto_response.mas_texto;
                  }
            }
    };

    conexion.open('GET','holamundo.json',true);
    conexion.send();     

}








