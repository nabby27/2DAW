<?php
require '../../modelo.php';

$db = new Bd();

if (isset($_GET)) {
    $idOrder = $_GET['idOrder'];

    $cartModel = new Carrito($idOrder, '', '', '');
    $result = $cartModel->getAllLineOfOrder($db->link);

    echo json_encode($result);
}