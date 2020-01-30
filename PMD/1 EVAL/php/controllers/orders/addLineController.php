<?php
require '../../modelo.php';

$db = new Bd();

if (isset($_POST)) {
    $orderId = $_POST['orderId'];
    $quantity = $_POST['quantity'];
    $productId = $_POST['productId'];

    $cartModel = new Carrito($orderId, '', '', '');
    $lineId = $cartModel->getNewLineId($db->link);

    $cartModel = new Carrito($orderId, $lineId, $productId, $quantity);
    $result = $cartModel->saveLineOrder($db->link);

    if ($result) {
        echo json_encode($result);
    } else {
        echo json_encode('ERROR');
    }
}