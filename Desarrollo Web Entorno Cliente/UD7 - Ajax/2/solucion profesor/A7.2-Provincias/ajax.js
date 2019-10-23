function funcion_ajax(){
        conexion = new XMLHttpRequest();
        conexion.onreadystatechange = function(){
                if(conexion.readyState == 4){
                    if(conexion.status == 200){
                       var objeto_response=JSON.parse(conexion.responseText)
                       var miSelect = document.createElement('select');
                            for ( var i in objeto_response.provincias){
                           console.log(objeto_response.provincias[i]);
                           var option_provincia = document.createElement('option');
                           option_provincia.setAttribute('value',objeto_response.provincias[i].cp);
                           option_provincia.innerText=objeto_response.provincias[i].nom;
                           miSelect.appendChild(option_provincia);
                       } 
                       miSelect.addEventListener("change",function(){
                                    console.log("Change");
                                    document.getElementById("cp").innerText = miSelect.options[this.selectedIndex].value;

                       });                   
                       document.getElementById("contenido").appendChild(miSelect);
                    }
                }
        };

        conexion.open('GET','provincias.json',true);
        conexion.send(); 

}







