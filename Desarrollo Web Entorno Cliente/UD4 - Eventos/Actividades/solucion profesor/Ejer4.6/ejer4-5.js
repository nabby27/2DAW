var tiempo=0;



function init(){

document.getElementById("salida").addEventListener("mouseleave",inicio_juego);

}


function inicio_juego(){
    console.log("inicio_juego");
    var muros=document.getElementsByClassName("pared");
    for (i = 0; i < muros.length; i++) {
        muros[i].addEventListener('mouseenter',fallo);
    }
    document.body.addEventListener('mouseleave',fallo);
    document.getElementById("final").addEventListener('mouseenter',victoria);
    idInter = setInterval(cronometro,100);


}

function fallo(){
    console.log('fallo');
    alert("Fallo");
    document.getElementById("salida").removeEventListener("mouseleave",inicio_juego);
    var muros=document.getElementsByClassName("pared");
    for (i = 0; i < muros.length; i++) {
        muros[i].removeEventListener('mouseenter',fallo);
    }
    document.getElementById("final").removeEventListener('mouseenter',victoria);
    tiempo=0
    init();

}

function victoria(){
    console.log('victoria');
    var segundos=(tiempo/10);
    alert("Has ganado!, has tardado "+segundos+ " segundos");
    document.getElementById("salida").removeEventListener("mouseleave",inicio_juego);
    var muros=document.getElementsByClassName("pared");
    for (i = 0; i < muros.length; i++) {
        muros[i].removeEventListener('mouseenter',fallo);
    }
    var final=document.getElementById("final");
    final.removeEventListener('mouseenter',victoria);
    init();
}


function cronometro(){
    tiempo++;
}




