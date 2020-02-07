<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

header('Content-Type: application/json');

require '../../modelo.php';

$db = new Bd();

if (isset($_POST)) {
    $dni = $_POST['dni'];
    $name = $_POST['name'];
    $address = $_POST['address'];
    $email = $_POST['email'];
    $admin = (isset($_POST['admin']) && $_POST['admin'] === 'on') ? true : false;

    $clientModel = new Client($dni, $name, $address, $email, '', $admin);
    $result = $clientModel->update($db->link);
    
    if ($result) {
        echo json_encode('SUCCESS');
    } else {
        echo json_encode('ERROR');
    }
}
