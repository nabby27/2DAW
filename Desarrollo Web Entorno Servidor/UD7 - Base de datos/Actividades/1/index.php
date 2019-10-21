<?php

$link = new mysqli('localhost', 'root', '', 'virtualmarket'); 
if ( $link->connect_errno ){ 
	echo "Fallo al conectar a MySQL: ". $link->connect_error; 
} else {
	$link->set_charset('utf-8'); 
	$consulta = "SELECT * FROM productos";
	$result = $link->query($consulta);
	while ($fila = $result->fetch_assoc()){
		foreach ($fila as $key => $value) {
			echo $key . ": " . $value ."<br>";
		}
		echo "<hr>";
	}
	
	$result->free();
	$link->close(); 
}