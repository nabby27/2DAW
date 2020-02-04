<?php
require '../modelo.php';
require '../utils.php';

$db = new Bd();

if (!isset($_COOKIE['user_name'])) {
    header('Location: ../login');
}

[$dni, $tempClientId] = getDniClientAndTempClientId();
$soppingCartModel = new ShoppingCart('', '', $dni, $tempClientId, '', '');
$products = $soppingCartModel->getProductsOnShoppingCart($db->link);

$newId = Order::getNewOrderId($db->link);
$date = date('Y-m-d H:i:s');

$orderModel = new Order($newId, $date, $dni);
$orderSaved = $orderModel->saveOrder($db->link);

foreach ($products as $product) {
    $lineOforder = new LineOfOrder();
}

require '../views/resum.php';