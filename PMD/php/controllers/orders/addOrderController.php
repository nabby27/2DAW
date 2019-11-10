<?php
require '../../modelo.php';

$db = new Bd();

if (isset($_POST)) {

    $cartModel = new Carrito('', '', '', '', '', '');
    $orderId = $cartModel->getNewOrderId($db->link);

    $orderModel = new Carrito($orderId, date('Y-m-d'), $_POST['dniClient'], '', '', '');

    $result = $orderModel->saveOrder($db->link);
    
    if ($result) {
        echo json_encode($result);
    } else {
        echo json_encode('ERROR');
    }
}
