<?php
require '../modelo.php';
require '../utils.php';

$db = new Bd();

[$dni, $tempClientId] = getDniClientAndTempClientId();

$products = Product::getAll($db->link);
$soppingCartModel = new ShoppingCart(0, '', $dni, $tempClientId, 0, 0);
$shoppingCartTotal = $soppingCartModel->getNumberOfItemsByClient($db->link);

require '../views/shop.php';
