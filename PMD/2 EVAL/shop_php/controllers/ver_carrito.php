<?php
require '../modelo.php';
require '../utils.php';

$db = new Bd();
[$dni, $tempClientId] = getDniClientAndTempClientId();
$date = date('Y-m-d H:i:s');

/** Añade productos al carrito */
if (isset($_POST['addProductToCart'])) {
    $productId = $_POST['productId'];
    $quantity = $_POST['quantity'];

    $shoppingCartModel = new ShoppingCart(0, $date, $dni, $tempClientId, (int) $productId, (int) $quantity);
    $shoppingCartModel->addToCart($db->link);
}

/** Editar las cantiades de las lineas del carrito */
if (isset($_POST['updateShoppingCart'])) {
    for ($i=0; $i < count($_POST['quantity']); $i++) {
        $quantity = $_POST['quantity'][$i];
        $shoppinCartId = $_POST['shoppinCartId'][$i];
        $productId = $_POST['productId'][$i];
        
        $shoppingCartModel = new ShoppingCart((int) $shoppinCartId, $date, $dni, $tempClientId, (int) $productId, (int) $quantity);
        
        if ($quantity == 0) {
            $shoppingCartModel->removeItemOnShoppingCart($db->link);    
        } else {
            $shoppingCartModel->updateQuantityShoppingCart($db->link);
        }
    }
}

/** Elimina producto del carrito mediante el icono */
if (isset($_GET['id'])) {
    $shoppinCartId = $_GET['id'];
    $shoppingCartModel = new ShoppingCart((int) $shoppinCartId, '', '', '', 0, 0);
    $shoppingCartModel->removeItemOnShoppingCart($db->link);
    header('Location: ../../shopping-cart');
}

/** Recoge el número de producto que hay en el carrito */
$soppingCartModel = new ShoppingCart(0, '', $dni, $tempClientId, 0, 0);
$shoppingCartTotal = $soppingCartModel->getNumberOfItemsByClient($db->link);

/** Recoge los productos que hay en el carrito */
$products = $soppingCartModel->getProductsOnShoppingCart($db->link);

require '../views/shopping-cart.php';
