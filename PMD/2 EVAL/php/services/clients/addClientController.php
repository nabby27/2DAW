<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    require '../../modelo.php';
    $db = new Bd();

    $_POST = json_decode(file_get_contents('php://input'), FILE_USE_INCLUDE_PATH);
    if ($_POST === null) {
        parse_str(file_get_contents('php://input'), $_POST);
    }

    $dni = $_POST['dni'];
    $name = $_POST['name'];
    $address = $_POST['address'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $admin = isset($_POST['admin']) ? $_POST['admin'] : false;
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    $clientModel = new Client($dni, $name, $address, $email, $hashed_password, $admin);
    $clientCreated = $clientModel->save($db->link);

    if ($clientCreated) {
        http_response_code(201);
        echo json_encode($clientCreated);
    } else {
        http_response_code(400);
        echo json_encode(['error' => ['message' => 'Failure adding client with dni = ' . $dni]]);
    }
}