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
    $lineId = $_GET['idLine'];
    $quantity = $_PUT['quantity'];
    $productId = $_PUT['productId'];

    $lineOfOrderModel = new LineOfOrder((int) $orderId, (int) $lineId, (int) $productId, (int) $quantity);

    $lineOfOrderUpdated = $lineOfOrderModel->updateLine($db->link);

    if ($lineOfOrderUpdated) {
        http_response_code(201);
        echo json_encode($lineOfOrderUpdated);
    } else {
        http_response_code(400);
        echo json_encode(['error' => ['message' => 'Failure updating line of order with orderId = ' . $orderId]]);
    }
}