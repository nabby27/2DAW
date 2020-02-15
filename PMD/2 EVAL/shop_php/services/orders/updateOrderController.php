<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    require '../../modelo.php';
    $db = new Bd();

    $_PUT = json_decode(file_get_contents('php://input'), FILE_USE_INCLUDE_PATH);

    $orderId = $_GET['idOrder'];
    $dniClient = $_PUT['dniClient'];

    $orderModel = new Order((int) $orderId, '', $dniClient);

    $orderUpdated = $orderModel->updateOrder($db->link);
    
    if ($orderUpdated) {
        http_response_code(201);
        echo json_encode($orderUpdated);
    } else {
        http_response_code(400);
        echo json_encode(['error' => ['message' => 'Failure updating order with id = ' . $orderId]]);
    }
}