<?php
require 'php/modelo.php';
session_start();

$db = new Bd();

$error = '';

if (isset($_POST['dni']) && isset($_POST['password'])) {
    $dni = $_POST['dni'];
    $password = $_POST['password'];
    $loginModel = new Login($dni, $password);
    $client = $loginModel->getOne($db->link);
    if (password_verify($password, $client['pwd'])) {
        if (!$client['administrador']) {
            $_SESSION['name'] = $client['nombre'];
            $_SESSION['dni'] = $client['dniCliente'];
            $_SESSION['total'] = 0;
        }else {
            header('Location: ./admin/gestion_clientes.html');
        }
        echo json_encode($client);
    } else {
        $error = 'El usuario no existe o la contraseña es incorrecta';
        require 'php/views/login.php';
    }
} else {
    require 'php/views/login.php';
}