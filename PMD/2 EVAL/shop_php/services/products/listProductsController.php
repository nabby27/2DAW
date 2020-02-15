<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    require '../../modelo.php';
    $db = new Bd();

    $products = Product::getAll($db->link);

    if ($products || $products == []) {
        http_response_code(200);
        echo json_encode($products);
    } else {
        http_response_code(500);
        echo json_encode(['error' => ['message' => 'database error']]);
    }
}