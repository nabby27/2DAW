<?php
require '../../modelo.php';

$db = new Bd();

if (isset($_POST)) {
    $id = $_POST['id'];

    $productModel = new Product($id, '', '', '', '', '');
    $result = $productModel->remove($db->link);
    
    if ($result) {
        echo json_encode('SUCCESS');
    } else {
        echo json_encode('ERROR');
    }
}
