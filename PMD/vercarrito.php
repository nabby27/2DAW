<?php
require 'php/modelo.php';
session_start();

$db = new Bd();

if (isset($_SESSION['dni'])) {
    if (isset($_POST)) {
        $id = $_POST['id'];
        $name = $_POST['name'];
        $price = $_POST['price'];
        $quantity = $_POST['quantity'];

        $_SESSION['total']++;

        // $productModel = new Product($id, '', '', '', '', '');
        // $product = $productModel->getOne($db->link);
        
        // require 'php/views/detalle.php';
    }
} else {
    header('Location: validar.php');
}