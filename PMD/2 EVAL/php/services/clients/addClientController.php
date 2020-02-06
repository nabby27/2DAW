<?php

// Sacado de internet
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$method = $_SERVER['REQUEST_METHOD'];
if($method == "OPTIONS") {
    die();
}

require '../../modelo.php';

$db = new Bd();

if (isset($_POST)) {
    $dni = $_POST['dni'];
    $name = $_POST['name'];
    $address = $_POST['address'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $admin = (isset($_POST['admin']) && ($_POST['admin'] === 'on' || $_POST['admin'] === true)) ? true : false;
    
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);
    $clientModel = new Client($dni, $name, $address, $email, $hashed_password, $admin);
    $result = $clientModel->save($db->link);
    
    if ($result) {
        echo json_encode('SUCCESS');
    } else {
        echo json_encode('ERROR');
    }
}
