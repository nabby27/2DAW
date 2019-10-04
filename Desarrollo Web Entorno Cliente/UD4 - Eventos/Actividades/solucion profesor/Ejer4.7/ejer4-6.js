

var idTemp;
var idInter;
var decimas;


function pintoCirculoRojo(){
    var num_id=Math.floor(Math.random()*9);
    var id_circulo="circulo_"+num_id;
        document.getElementById(id_circulo).className="objetivo";
        document.getElementById(id_circulo).addEventListener("click",function(){acertado(id_circulo)});
 }

function temporizar(){
      idTemp = setTimeout(tiempoAcabado,3000);
     
}

function acertado(id_circulo){
    // console.log("acertado"+id_circulo);
    document.getElementById(id_circulo).removeEventListener("click", function(){});
    document.getElementById(id_circulo).removeAttribute("class");
    clearTimeout(idTemp);
    clearInterval(idInter);
    decimas=0;
    idInter = setInterval(pintoTemporizador,11);
    pintoCirculoRojo(id_circulo);
    temporizar();
}

function tiempoAcabado(){
    alert("Tu tiempo se ha acabado, has perdido");
    clearTimeout(idTemp);
    location.reload();

}

function pintoTemporizador(){
    decimas++;
    document.getElementById("cronometro").innerHTML=decimas;
};

