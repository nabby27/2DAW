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

    $orderId = $_POST['orderId'];
    $productId = $_POST['productId'];
    $quantity = $_POST['quantity'];

    $lineOfOrderModel = new LineOfOrder((int) $orderId, 0, 0, 0);
    $lineId = $lineOfOrderModel->getNewLineId($db->link);

    $lineOfOrderModel = new LineOfOrder($orderId, $lineId, $productId, $quantity);
    $lineOfOrderCreated = $lineOfOrderModel->saveLineOrder($db->link);

    if ($lineOfOrderCreated) {
        http_response_code(201);
        echo json_encode($lineOfOrderCreated);
    } else {
        http_response_code(500);
        echo json_encode(['error' => ['message' => 'Failure adding line on orderId = ' . $orderId]]);
    }
}