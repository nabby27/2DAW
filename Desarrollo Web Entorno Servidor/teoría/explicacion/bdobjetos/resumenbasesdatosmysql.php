<?php
//conexion a la base de datos
$link = new mysqli('localhost', 'root', '', 'virtualmarket'); 
//comprobar errores de conexión
if ( $link->connect_errno ){ 
	echo "Fallo al conectar a MySQL: ". $link->connect_error; 
} else
//no hay errores de conexión
{
	// seleccionar charset
	$link->set_charset('utf-8'); 
	//crear string de la consulta
	$consulta="SELECT * FROM clientes where dniCliente='11111111' ";
	//ejecutar la consulta
	$result=$link->query($consulta);
	//recorremos el resultado
	while ($fila=$result->fetch_assoc()){
		echo "nombre: ".$fila['nombre']."<br>";
	}
	$result->free();
	$link->close(); 
}