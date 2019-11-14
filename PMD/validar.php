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
    if ($client && password_verify($password, $client->pwd)) {
        if ($client->administrador === '0') {
            $_SESSION['user_name'] = $client->nombre;
            $_SESSION['dni'] = $client->dniCliente;
            $_SESSION['total'] = 0;
            header('Location: principal.php');
        }else {
            $_SESSION['user_name'] = $client->nombre;
            header('Location: ./admin/gestion_clientes.html');
        }
    } else {
        $error = 'El usuario no existe o la contraseña es incorrecta';
        require 'php/views/login.php';
    }
} else {
    session_destroy();
    require 'php/views/login.php';
}