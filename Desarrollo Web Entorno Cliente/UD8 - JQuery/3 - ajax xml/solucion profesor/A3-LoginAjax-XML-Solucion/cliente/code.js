

window.onload = function() {
  console.log("onload");
  comprobar=document.getElementById("comprobar");
  comprobar.addEventListener("click",comprueboNombre);

};


function comprueboNombre(){
	if(window.XMLHttpRequest){
				peticionHttp = new XMLHttpRequest();
			}
			
			peticionHttp.onreadystatechange = function () {
				 if(peticionHttp.readyState == 4){
					if(peticionHttp.status == 200){
  						var respuesta=peticionHttp.responseText;
  						console.log("respuesta="+respuesta);

  						if (respuesta=="si") {respuestaSI()}
  							else {respuestaNO()}


  					}		
				}
			};

		peticionHttp.open('GET',"../servidor/compruebaDisponibilidad.php", true);
		peticionHttp.send();

}

function respuestaSI(){
	alert("respuestaSI");
}

function respuestaNO(){
	alert("respuestaNO");
	login=document.getElementById("login");
	login.value="";
}


