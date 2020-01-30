<?php
require '../../modelo.php';

$db = new Bd();

if (isset($_POST)) {
    $orderId = $_POST['orderId'];
    $lineId = $_POST['lineId'];
    $quantity = $_POST['quantity'];
    $productId = $_POST['productId'];

    $carritoModel = new Carrito($orderId, $lineId, $productId, $quantity);

    $result = $carritoModel->updateLine($db->link);
    
    if ($result) {
        echo json_encode($result);
    } else {
        echo json_encode('ERROR');
    }
}
