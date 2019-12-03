window.onload=init;
function init(){
    console.log("init")
    if(detectCookie("texto")){
        console.log("hay cookie")
        var c=getCookie("texto");
        document.getElementById("contenidoCookie").textContent=" La cookie almacenada es : "+c;
    }
    
    var bt=document.getElementById("guardar")

    bt.addEventListener("click",function(){
        var txt=document.getElementById("texto").value;
        setCookie("texto",txt,365);
    })

}
