<?php
/** Servicio */

// function callPetition($url){
//     $opciones = array('http' =>
//         array(
//             'method'  => 'GET',
//             'header'  => 'Content-type: application/json'
//         )
//     );

//     $contexto = stream_context_create($opciones);

//     $resultado = file_get_contents($url, false, $contexto);
//     return json_decode($resultado, true);
// }

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    require './icd.php';
    $db = new Base();

    if (isset($_GET['idJugador'])) {
        $idJugador = $_GET['idJugador'];
        $jugadorModel = new Jugador($idJugador, '', '', '', false);
        $response = $jugadorModel->buscar($db->link);
    } else {
        $jugadorModel = new Jugador(0, '', '', '', false);
        $response = $jugadorModel->getAllActivo($db->link);        
    }

    echo json_encode($response);
}