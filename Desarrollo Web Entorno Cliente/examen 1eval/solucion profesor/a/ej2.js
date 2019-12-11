window.onload=function(){
    document.addEventListener('change',cargar_partido);
}

function cargar_partido(){

    var partidos = document.getElementsByTagName("option");
    var panel = document.getElementById("panel");
    console.log(partidos);

    for(var i=0;i<partidos.length;i++){
        if(partidos[i].selected){
            var div_partido = document.createElement('span');
            div_partido.textContent= partidos[i].text;
            div_partido.style.backgroundColor=partidos[i].value;
            var escanyos = partidos[i].getAttribute("escanyos");
            div_partido.style.width=(parseInt(escanyos)*2)+"px";
            console.log((parseInt(escanyos)*2)+" px");
            div_partido.style.display = "inline-block";
            div_partido.setAttribute("escanyos",escanyos);
            panel.appendChild(div_partido);
            div_partido.addEventListener("click",function(){ this.remove()});
                
          
        }
    }
    


}

