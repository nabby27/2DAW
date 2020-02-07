<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

require '../../modelo.php';

$db = new Bd();

if (isset($_GET)) {
    $idOrder = $_GET['idOrder'];

    $cartModel = new LineOfOrder($idOrder, '', '', '');
    $result = $cartModel->getAllLineOfOrder($db->link);

    echo json_encode($result);
}