<?php

/* Evito error CORS */

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$method = $_SERVER['REQUEST_METHOD'];
if($method == "OPTIONS") {
    die();
}

/* con el GET devuelve todas las fallas */
if ($_SERVER['REQUEST_METHOD'] == 'GET')
{

  $falla1 = new stdClass();
    $falla1->nombre = "Literato Azorin";
    $falla1->direccion = "C/Literato Azorin";
    $falla1->categoria = 1;
    $falla1->carpa = true;
 
  $falla2 = new stdClass();
	$falla2->nombre = "Convento Jerusalen";
    $falla2->direccion = "C/Convento";
    $falla2->categoria = 1;
    $falla2->carpa = false;

 $falla3 = new stdClass();
	$falla3->nombre = "Gayano";
    $falla3->direccion = "c/Gayano Lluc";
    $falla3->categoria = 3;
    $falla3->carpa = true;
   
    	
    $fallas = array();
    array_push ( $fallas , $falla1 );
    array_push ( $fallas , $falla2 );
    array_push ( $fallas , $falla3 );
   
    
      header("HTTP/1.1 200 OK");
      echo json_encode($fallas);

      exit();
	}


/* Con el post, recibo una falla y devuelvo TRUE o FALSE aleatorio */
if ($_SERVER['REQUEST_METHOD'] == 'POST'){
		$inputJSON = file_get_contents('php://input');
      	$input= json_decode( $inputJSON, TRUE ); 
    	$nombre=$input['nombre'];
    	$direccion=$input['direccion'];
    	$categoria=$input['categoria'];
    	$carpa=$input['carpa'];
    	header("HTTP/1.1 200 OK");

    	$respuesta = false;
		if (rand(0, 1)) { 
			$respuesta = true; 
		}
    	echo json_encode($respuesta);
     	exit();
	}


//En caso de que ninguna de las opciones anteriores se haya ejecutado
header("HTTP/1.1 400 Bad Request");

?>
