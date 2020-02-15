<?php
require '../modelo.php';
require '../utils.php';

$db = new Bd();

$productId = $_GET['id'];

[$dni, $tempClientId] = getDniClientAndTempClientId();

$productModel = new Product((int) $productId, '', '', '', '', 0, (float) 0);
$product = $productModel->getOne($db->link);

$soppingCartModel = new ShoppingCart(0, '', $dni, $tempClientId, 0, 0);
$shoppingCartTotal = $soppingCartModel->getNumberOfItemsByClient($db->link);

require '../views/detail.php';
