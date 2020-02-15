<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

header('Content-Type: application/json');


if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    require '../../modelo.php';
    $db = new Bd();
    
    $id = $_GET['id'];

    $productModel = new Product((int) $id, '', '', '', '', 0, (float) 0);
    $result = $productModel->remove($db->link);

    if ($result) {
        http_response_code(200);
        echo json_encode(['success' => ['message' => 'Product with id = ' . $id . ' removed']]);
    } else {
        http_response_code(500);
        echo json_encode(['error' => ['message' => 'Failure removing product with id = ' . $id]]);
    }
}
