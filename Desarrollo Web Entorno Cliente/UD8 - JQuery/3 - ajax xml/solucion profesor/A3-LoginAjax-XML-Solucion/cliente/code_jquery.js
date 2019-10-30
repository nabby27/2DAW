
$( document ).ready(function() {
    console.log( "ready!" );


	$("#comprobar").click(function(){
		
		if($("#login").val().length<1){ alert("El login no puede estar vacio")}
		else{
				var datos=$("#login");
				console.log(datos);		
				$.ajax({
					url: "../servidor/compruebaDisponibilidadXML.php",
					type: "post",
					dataType: "xml",
					data: datos,
					beforeSend: function(){$("#comprobar").html("COMPROBANDO...") }, // transicion
					success: function(response){ // recojo el xml
						 var disp=$(response).find('disponible').text(); // leo el tag disponible  si/no
		
						if(disp=="si"){ alert("Nom usuario correcto")} // usuario ok, nada que hacer
							else{ alert("Nom usuario utilizado"); // usuario nok
									$("#login").val(""); }; // borro textbox
									var lista=$(response).find('login'); //recojo la lista de sugerencias					
									$("#disponibilidad").html("");//borro el div
									$("#disponibilidad").append("<ul>");
									for(var i=0; i<lista.length; i++){ //recorro el array
										$("#disponibilidad ul").append('<li>'+ lista[i].innerHTML +'</li>');	// leo la lista
									}
						$("#disponibilidad li").click(function(){
							$("#login").val(this.innerHTML) });


						$("#comprobar").html("Comprobar disponibilidad") // dejo el texto como estaba antes de transicion
					}
				});
		}
	});
});