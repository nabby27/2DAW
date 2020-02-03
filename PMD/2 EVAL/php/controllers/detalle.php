<?php
require '../modelo.php';

$db = new Bd();

$id = $_GET['id'];

$productModel = new Product($id, '', '', '', '', '');
$product = $productModel->getOne($db->link);

require '../views/detail.php';
