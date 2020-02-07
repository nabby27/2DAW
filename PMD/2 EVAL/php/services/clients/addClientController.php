<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

header('Content-Type: application/json');

require '../../modelo.php';

$db = new Bd();

if (isset($_POST)) {
    $_POST = json_decode(file_get_contents('php://input'), FILE_USE_INCLUDE_PATH);
    
    $dni = $_POST['dni'];
    $name = $_POST['name'];
    $address = $_POST['address'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $admin = $_POST['admin'];
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);
    $clientModel = new Client($dni, $name, $address, $email, $hashed_password, $admin);
    $result = $clientModel->save($db->link);

    var_dump($result);
    if ($result) {
        http_response_code(200);
        echo json_encode(['success' => ['message' => 'Client with dni = ' . $dni . ' added']]);
    } else {
        http_response_code(500);
        echo json_encode(['error' => ['message' => 'Failure adding client with dni = ' . $dni]]);
    }
}
