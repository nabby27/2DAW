<?php
require '../../modelo.php';

$db = new Bd();

if (isset($_POST)) {

    $orderModel = new Order('', '', '');
    $orderId = $orderModel->getNewOrderId($db->link);

    $orderModel = new Order($orderId, date('Y-m-d'), $_POST['dniClient']);

    $result = $orderModel->saveOrder($db->link);
    
    if ($result) {
        echo json_encode($result);
    } else {
        echo json_encode('ERROR');
    }
}
