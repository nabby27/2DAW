<?php

// Sacado de internet
// header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
// header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
// header("Allow: GET, POST, OPTIONS, PUT, DELETE");
// $method = $_SERVER['REQUEST_METHOD'];
// if($method == "OPTIONS") {
//     die();
// }

header('Access-Control-Allow-Origin: *');

require '../../modelo.php';

$db = new Bd();

if (isset($_GET)) {
    $result = Client::getAll($db->link);
    if ($result) {
        echo json_encode($result);
    } else {
        echo json_encode('ERROR');
    }
}