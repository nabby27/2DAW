<?php
// Obtener el valor del login que se quiere comprobar
$login = $_POST["login"];

// Generar un número aleatorio
srand((double)microtime()*1000000);
$numeroAleatorio = rand(0, 10);

// Simular un falso retardo por la red y el servidor (entre 0 y 2 segundos)
sleep($numeroAleatorio % 2);

// El script devuelve alatoriamente 'si' o 'no' para que la aplicación
// cliente pueda comprobar los dos casos
$disponible = ($numeroAleatorio % 2 == 0)? "si" : "no";

// Si el login comprobado no está disponible, se ofrece una serie de alternativas
if($disponible == "no") {
  $alternativasAutomaticas[] = $login.$login;
  $alternativasAutomaticas[] = "123".$login;
  $alternativasAutomaticas[] = $login."_otro";
  $alternativasAutomaticas[] = $login.".a";
  $alternativasAutomaticas[] = $login."100";
}

// Imprescindible para que el navegador trate la respuesta como XML
header('Content-Type: text/xml');

// Generar contenidos XML de respuesta
if($disponible == "si") {
  echo "<respuesta> \n".
       "\t <disponible>si</disponible> \n".
       "</respuesta>";
}
else {
  echo "<respuesta> \n".
       "\t <disponible>no</disponible> \n".
       "\t <alternativas> \n".
       "\t\t <login>".join("</login> \n \t\t <login>", $alternativasAutomaticas)."</login> \n".
       "\t </alternativas> \n".
       "</respuesta>";
}
?>