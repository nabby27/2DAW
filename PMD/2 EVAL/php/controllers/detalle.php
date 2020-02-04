<?php
require '../modelo.php';
require '../utils.php';

$db = new Bd();

$productId = $_GET['id'];

[$dni, $tempClientId] = getDniClientAndTempClientId();

$productModel = new Product($productId, '', '', '', '', '', '');
$product = $productModel->getOne($db->link);

$soppingCartModel = new ShoppingCart('', '', $dni, $tempClientId, '', '');
$shoppingCartTotal = $soppingCartModel->getNumberOfItemsByClient($db->link);

require '../views/detail.php';
