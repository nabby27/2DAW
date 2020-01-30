<?php
require '../../modelo.php';

$db = new Bd();

if (isset($_POST)) {
    $orderId = $_POST['idOrder'];
    $dniClient = $_POST['dniClient'];

    $orderModel = new Order($orderId, '', $dniClient);

    $result = $orderModel->updateOrder($db->link);
    
    if ($result) {
        echo json_encode($result);
    } else {
        echo json_encode('ERROR');
    }
}
