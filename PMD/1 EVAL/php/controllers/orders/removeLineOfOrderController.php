<?php
require '../../modelo.php';

$db = new Bd();

if (isset($_POST)) {
    $idLine = $_POST['idLine'];
    $idOrder = $_POST['idOrder'];

    $carritoModel = new Carrito($idOrder, $idLine, '', '');
    $result = $carritoModel->removeLine($db->link);
    
    if ($result) {
        echo json_encode('SUCCESS');
    } else {
        echo json_encode('ERROR');
    }
}
