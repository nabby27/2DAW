<?php
// Obtener el valor del login que se quiere comprobar
$login = $_POST["login"];

// Generar un n�mero aleatorio
srand((double)microtime()*1000000);
$numeroAleatorio = rand(0, 10);

// Simular un falso retardo por la red y el servidor (entre 0 y 2 segundos)
sleep($numeroAleatorio % 2);

// El script devuelve alatoriamente 'si' o 'no' para que la aplicaci�n
// cliente pueda comprobar los dos casos
$disponible = ($numeroAleatorio % 2 == 0)? "si" : "no";
$respuesta = array("disponible"=>"true");

// Si el login comprobado no est� disponible, se ofrece una serie de alternativas
if($disponible == "no") {
  $respuesta = array("disponible"=>"false", "alternativa"=>$login.$login);
}

//header('Content-Type: text/xml');

if($disponible == "si") {
  echo json_encode($respuesta);
}
else {
  echo  json_encode($respuesta);
}
?>