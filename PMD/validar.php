<?php

$db = new Bd();

if (isset($_POST['dni']) && isset($_POST['password'])) {
    $user = login();
}

function login() {
    $dni = $_POST['dni'];
    $password = $_POST['password'];
    $loginModel = new LoginModel($dni, $password);

    return $loginModel->doLogin($db->link);

}