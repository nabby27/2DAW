<?php
require '../../modelo.php';

$db = new Bd();

if (isset($_GET)) {
    $idOrder = $_GET['idOrder'];

    $orderModel = new Order($idOrder, '', '');
    $result = $orderModel->getOneOrder($db->link);

    if ($result) {
        echo json_encode($result);
    } else {
        echo json_encode('ERROR');
    }
}