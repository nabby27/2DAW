<?php
require '../../modelo.php';

$db = new Bd();

if (isset($_POST)) {
    $idOrder = $_POST['id'];

    $carritoModel = new Carrito($idOrder, '', '', '');
    $carritoModel->removeLinesOfOrder($db->link);
    $orderModel = new Order($idOrder, '', '');
    $result = $orderModel->removeOrder($db->link);
    
    if ($result) {
        echo json_encode('SUCCESS');
    } else {
        echo json_encode('ERROR');
    }
}
