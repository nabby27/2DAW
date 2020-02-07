<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

require '../../modelo.php';

$db = new Bd();

if (isset($_GET)) {
    $result = Order::getAllOrder($db->link);

    if ($result || $result == []) {
        echo json_encode($result);
    } else {
        http_response_code(500);
        echo json_encode(['error' => ['message' => 'database error']]);
    }
}