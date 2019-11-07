<?php
require '../../modelo.php';

$db = new Bd();

if (isset($_POST)) {
    $id = $_POST['id'];
    $name = $_POST['name'];
    $photo = $_POST['photo'];
    $brand = $_POST['brand'];
    $quantity = $_POST['quantity'];
    $price = $_POST['price'];

    $productModel = new Product($id, $name, $photo, $brand, $quantity, $price);
    $result = $productModel->update($db->link);
    
    if ($result) {
        echo json_encode('SUCCESS');
    } else {
        echo json_encode('ERROR');
    }
}
