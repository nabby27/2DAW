var total = 0;
window.onload = function() {
    document.getElementById("partido").addEventListener("change",anyado_partido);
    document.getElementById("limpiar").addEventListener("click",borrar);
};
  function anyado_partido(){
        var partido = document.createElement('span');  
        var options=document.getElementsByTagName("option");
        for(var i=0;i<options.length;i++){

            if(options[i].selected){
            partido.style.backgroundColor = options[i].value ;
            var escanyos = parseInt(options[i].getAttribute("escanyos"));
            var partido_elegido = options[i].text;
            }
        }
        partido.style.display = "inline-block";
        partido.textContent= partido_elegido;
        partido.setAttribute('escanyos',escanyos);
        total+=escanyos;
        partido.style.width = (escanyos*2)+"px";
        document.getElementById("panel").appendChild(partido);
        document.getElementById("total").innerHTML="TOTAL :"+total;
        partido.addEventListener("click",function(){
            total-=this.getAttribute("escanyos");
            this.remove();
            document.getElementById("total").innerHTML="TOTAL :"+total;           
        });
        partido.addEventListener('mouseenter',function(){
            document.getElementById("escanyos_partido").innerHTML="Escaños:"+escanyos;           
        });
        partido.addEventListener('mouseleave',function(){
            document.getElementById("escanyos_partido").innerHTML="";           
        });
  }
  function borrar(){
    document.getElementById("panel").innerHTML="";
    document.getElementById("total").innerHTML="";
    document.getElementById("escanyos_partido").innerHTML="";
  }