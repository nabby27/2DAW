<?php
require '../modelo.php';
require '../utils.php';
setcookie('productsToPdf', '', time()-3600, '/');

$db = new Bd();

[$dni, $tempClientId] = getDniClientAndTempClientId();

/** Recojo todos los productos de la bd */
$products = Product::getAll($db->link);

/** Recoge el número de producto que hay en el carrito */
$soppingCartModel = new ShoppingCart(0, '', $dni, $tempClientId, 0, 0);
$shoppingCartTotal = $soppingCartModel->getNumberOfItemsByClient($db->link);

require '../views/shop.php';
