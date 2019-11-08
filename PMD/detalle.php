<?php
require 'php/modelo.php';
session_start();

$db = new Bd();

if (isset($_SESSION['dni']) && isset($_GET['idProducto'])) {
    $id = $_GET['idProducto'];

    $productModel = new Product($id, '', '', '', '', '');
    $product = $productModel->getOne($db->link);

    require 'php/views/detalle.php';
} else {
    header('Location: validar.php');
}