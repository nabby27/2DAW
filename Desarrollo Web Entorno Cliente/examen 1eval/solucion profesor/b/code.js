var temp = 0;
$(document).ready(function(){
	var temporizador = setInterval(function(){
		$("#tiempo").html("Tiempo: "+temp);
		temp++;
		},100);
	console.log("Ready!");
	cargoPreguntas();
	$("#borrar").click(function(){
			location.reload();
			})
	$("#ok").click(function(){  //evento clik
	console.log("compruebo respuestas");
	$.ajax({                     //llamada asincrona ajax para comprobar las respuestas
		url: "preguntas.json",
		type: "POST",
		dataType: "json"
	}).done(function(data){  // la respuesta json la almaceno en data
					var correctas=0;
					for (var i = 0; i < data.preguntas.length; i++) {
						var respuesta_ok=data.preguntas[i].correcta;  // del json, recojo la respuesta correcta para cada pregunta
						var respuesta_usuario=$("#respuesta"+i+":checked").val(); // respuesta cklicada del usuario
						if(respuesta_usuario == respuesta_ok){ 
							$("#pregunta"+i).css({"background-color": "lightgreen"});
							correctas++;
						}else{
							$("#pregunta"+i).css({"background-color": "red"});
						}
					};
					$("#acertadas").html("ACIERTOS: "+correctas);
					clearTimeout(temporizador);				
	})
	.fail(function( jqXHR, textStatus, errorThrown ) {
         console.log( "La solicitud ha fallado: " +  textStatus + errorThrown);
	});
	});
}); 
function cargoPreguntas(){     // cargo el json de preguntas y lo pinto en un div
	console.log("cargoPreguntas");
	$.ajax({
		url: "preguntas.json",
		type: "POST",
		dataType: "json"
	}).done(function(data){  // la respuesta se almacen en data
					for (var i = 0; i < data.preguntas.length; i++) {  //Si es un array JSON ( delimitado por []), lo recorro con for
						$("#preguntas").append("<div id='pregunta"+i+"'>"+data.preguntas[i].pregunta+"</div>");
						$.each(data.preguntas[i].respuesta, function(key, value) { // si es una lista key-value, lo recorro con each
		 				 	$("#preguntas").append("<input type='radio' name='respuesta"+i+"' id='respuesta"+i+"' value='"+key+"'>"+key+"="+value);
						});
					};						
	})
	.fail(function( jqXHR, textStatus, errorThrown ) {
         console.log( "La solicitud ha fallado: " +  textStatus + errorThrown);
	});
};