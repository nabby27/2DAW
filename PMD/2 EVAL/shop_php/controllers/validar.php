<?php
require '../modelo.php';
require '../utils.php';

$db = new Bd();

if (isset($_POST['dni']) && isset($_POST['password'])) {
    $dni = $_POST['dni'];
    $password = $_POST['password'];
    $loginModel = new Login($dni, $password);
    $client = $loginModel->loginClient($db->link);
    if ($client && password_verify($password, $client->password)) {

        [$dni, $tempClientId] = getDniClientAndTempClientId();
        
        /** Actualizar el carrito con el usuario logeado */
        $soppingCartModel = new ShoppingCart(0, '', $client->dni, $tempClientId, 0, 0);
        $shoppingCartTotal = $soppingCartModel->updateShoppingCartToLoggedClient($db->link);

        setcookie('user_name', $client->name, time() + 3600);
        setcookie('dni', $client->dni, time() + 3600);
        header('Location: shop');
    } else {
        $error = 'El cliente no existe';
    }
}

require '../views/login.php';