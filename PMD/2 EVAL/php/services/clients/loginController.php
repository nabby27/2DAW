<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    require '../../modelo.php';
    $db = new Bd();

    $dni = $_GET['dni'];
    $password = $_GET['password'];

    $loginModel = new Login($dni, $password);
    $client = $loginModel->loginAdmin($db->link);

    if ($client && password_verify($password, $client->password)) {
        http_response_code(200);
        echo json_encode($client);
    } else {
        http_response_code(500);
        echo json_encode(['error' => ['message' => 'Error on login admin']]);
    }
}