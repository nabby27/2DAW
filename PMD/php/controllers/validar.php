<?php
require '../modelo.php';
session_start();

$db = new Bd();

if (isset($_POST['dni']) && isset($_POST['password'])) {
    $user = login($db);
}

function login($db) {
    $dni = $_POST['dni'];
    $password = $_POST['password'];
    $loginModel = new Login($dni, $password);
    $client = $loginModel->getOne($db->link);
    if ($password === $client['pwd']) {
        if (!$client['administrador']) {
            $_SESSION['name'] = $client['nombre'];
            $_SESSION['dni'] = $client['dniCliente'];
            $_SESSION['total'] = 0;
        }
        echo json_encode($client);
    } else {
        echo json_encode('USER_NOT_EXIST');
    }
}