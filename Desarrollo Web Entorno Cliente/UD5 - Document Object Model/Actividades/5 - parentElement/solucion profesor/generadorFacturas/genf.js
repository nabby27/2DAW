
function anadoFila() { // cuando doy al boton de añadir filas

	var tabla_body = document.querySelector("tbody"); //selecciono el cuerpo de la tabla

	var fila = document.createElement("tr"); //creo la estructura de nodos hijos

	var col1 = document.createElement("td");
	var col2 = document.createElement("td");
	var col3 = document.createElement("td");
	var col4 = document.createElement("td");
	var col5 = document.createElement("td");
	
	precio_u = document.getElementById("preu−unitari").value; //recupero valores del formulario
	cantidad = document.getElementById("quantitat").value;
	precio_tot = parseFloat(precio_u)*parseFloat(cantidad); // calculo precio de la fila
	producto = document.getElementById("producte").value; 

	col1.innerHTML = producto //lleno los td
	col2.innerHTML = cantidad;
	col3.innerHTML = precio_u;
	col4.innerHTML = precio_tot;
	col4.setAttribute("class","precio_total");//añado un class="precio_total" para luego recuperar este valor
	col5.innerHTML = "(borrar)";

	 col1.addEventListener("click", mostrarDetall); //añado dos linener para recoger eventos 
	 col5.addEventListener("click", eliminarFila); // en caso de clikar SIN PARENTESIS

	fila.appendChild(col1); //añado nodos hijos td al padre tr
	fila.appendChild(col2);
	fila.appendChild(col3);
	fila.appendChild(col4);
	fila.appendChild(col5);

	tabla_body.appendChild(fila); // añado el tr a tbody

	calculoTotal(); //calculo totales

}

function mostrarDetall(){
	 alert ("Detalle"); 
}

function eliminarFila(){
	 confirm ("Eliminar?");
	 this.parentNode.parentNode.removeChild(this.parentNode); // como hago la llamada desde un td, voy al padre (tr), y al abuelo (tbody) para decir que borre un hijo (tr)
	 calculoTotal(); // recalculo
}

function calculoTotal(){

	var filas = document.querySelectorAll("tbody tr"); // lista de tr, solo los rows del tbody, no los del thead ni tfoot
	var base_sumada=0;

	var bases = document.getElementsByClassName("precio_total");
	for(i=0;i<bases.length; i++){ // para cada fila, sumo la base
		base_fila = parseFloat(bases[i].textContent);
		base_sumada+=base_fila;
	}
	
    basei=document.getElementById("base-imponible"); 
 	basei.innerHTML=base_sumada; 
	
	var iva_sumado = base_sumada * 0.21 ;
	iva=document.getElementById("iva");
	iva.innerHTML=iva_sumado;

	var total_sumado = iva_sumado + base_sumada;
	total_sumado=total_sumado.toFixed(2);
	total=document.getElementById("total");
	total.innerHTML=total_sumado;

}

function init(){
document.getElementById("imprimir").addEventListener("click",function(){window.print()}); 
}


