<?php
require '../../modelo.php';

$db = new Bd();

if (isset($_GET)) {
    $id = $_GET['id'];

    $productModel = new Product($id, '', '', '', '', '');
    $result = $productModel->getOne($db->link);

    if ($result) {
        echo json_encode($result);
    } else {
        echo json_encode('ERROR');
    }
}