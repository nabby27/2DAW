<?php
require '../modelo.php';
require '../utils.php';

$db = new Bd();

[$dni, $tempClientId] = getDniClientAndTempClientId();

$products = Product::getAll($db->link);
$soppingCartModel = new ShoppingCart('', '', $dni, $tempClientId, '', '');
$shoppingCartTotal = $soppingCartModel->getNumberOfItemsByClient($db->link);

require '../views/shop.php';
