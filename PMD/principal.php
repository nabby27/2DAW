<?php
require 'php/modelo.php';
session_start();

$db = new Bd();

if (isset($_SESSION['dni'])) {
    $products = Product::getAll($db->link);

    require 'php/views/tienda.php';
} else {
    header('Location: validar.php');
}