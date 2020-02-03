<?php
require '../modelo.php';
$db = new Bd();

if (isset($_COOKIE['user_name'])) {
    setcookie('anonimIdClient');
    $dni = isset($_COOKIE['dni']);
} else {
    $anonimIdClient = (isset($_COOKIE['anonimIdClient'])) ? $_COOKIE['anonimIdClient'] : time();
    setcookie('anonimIdClient', $anonimIdClient, time() + 60*60*24*30); // one month
}

$products = Product::getAll($db->link);
$soppingCartModel = new ShoppingCart('', $dni, $anonimIdClient, '', '', '');
$shoppingCartTotal = $soppingCartModel->getNumberOfItemsByClient($db->link);
require '../views/shop.php';
