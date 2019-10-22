<?php
header("Access-Control-Allow-Origin: *");

$accion = $_POST['accion'];

if ($accion === 'hora') {
	echo time();
} else if ($accion === 'rand') {
	echo rand(5,100000);
} else {
	echo 'No se envio ninguna accion correcta';
}
	
?> 
