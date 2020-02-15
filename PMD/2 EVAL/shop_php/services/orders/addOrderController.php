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

    $orderId = Order::getNewOrderId($db->link);
    $date = date('Y-m-d H:i:s');

    $orderModel = new Order($orderId, $date, $_POST['dniClient']);

    $orderCreated = $orderModel->saveOrder($db->link);
    
    if ($orderCreated) {
        http_response_code(201);
        echo json_encode($orderCreated);
    } else {
        http_response_code(400);
        echo json_encode(['error' => ['message' => 'Failure adding order']]);
    }
}
