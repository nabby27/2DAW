<?php
require '../modelo.php';
require '../utils.php';

$db = new Bd();

$productId = $_GET['id'];

[$dni, $tempClientId] = getDniClientAndTempClientId();

/** Recojo un producto en concreto de la bd */
$productModel = new Product((int) $productId, '', '', '', '', 0, (float) 0);
$product = $productModel->getOne($db->link);

/** Recoge el número de producto que hay en el carrito */
$soppingCartModel = new ShoppingCart(0, '', $dni, $tempClientId, 0, 0);
$shoppingCartTotal = $soppingCartModel->getNumberOfItemsByClient($db->link);

require '../views/detail.php';
