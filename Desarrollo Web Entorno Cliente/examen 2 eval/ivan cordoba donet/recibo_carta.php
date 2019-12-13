<?php
$data = file_get_contents('php://input');
$fecha = $_POST["fecha"];
$regalo1 = $_POST["regalo1"];
$regalo2 = $_POST["regalo2"];
$regalo3 = $_POST["regalo3"];

// Enviar carta a los reyes ......

// El script devuelve alatoriamente 'true' o 'false' para que la aplicacion
// cliente pueda comprobar los dos casos
$numeroAleatorio = rand(0, 10);
$respuesta = ($numeroAleatorio % 2 == 0)? true : false;

  echo  json_encode($respuesta);

?>