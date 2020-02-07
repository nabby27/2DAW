<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

header('Content-Type: application/json');

require '../../modelo.php';

$db = new Bd();

if (isset($_GET)) {
    $result = Client::getAll($db->link);

    if ($result || $result == []) {
        echo json_encode($result);
    } else {
        http_response_code(500);
        echo json_encode(['error' => ['message' => 'database error']]);
    }
}