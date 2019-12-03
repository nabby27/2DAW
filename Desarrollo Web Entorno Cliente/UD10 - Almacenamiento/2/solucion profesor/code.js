window.onload=init;


function init(){
   
    document.getElementById("volver").addEventListener("click",function(){
        console.log("vuelvo");
        window.history.back();});
    
    document.getElementById("botonRGPD").addEventListener("click",function(){
      eliminarBloqueRGPD();
      setCookie("rgpdOK","ok",365);
    });

    if(detectCookie("rgpdOK")){
        console.log("cookie : "+getCookie("rgpdOK"))
        if (getCookie("rgpdOK")=="ok"){
            eliminarBloqueRGPD();
        }
    }
}

function eliminarBloqueRGPD(){
    bloqueRGPD = document.getElementById("bloqueRGPD");
    bloqueRGPD.parentNode.removeChild(bloqueRGPD);
}