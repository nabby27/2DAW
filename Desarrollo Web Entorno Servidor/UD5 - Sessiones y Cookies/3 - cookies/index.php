<?php
require 'modelo.php';
$bd = new Bd();
$link = $bd->link;
$error = '';

if(isset($_POST['login'])) {
    $cliente = new Clientes($_POST['dni'], $_POST['password'], '');
    $cliente = $cliente->validar($link);
    if ($cliente) {
        setcookie('name', $cliente->nombre, time() + 3600);
    } else {
        $error = 'El usuario o contraseñas no son correctas';
        require 'form.php';    
    }
} else if (!isset($_POST['login']) && !isset($_COOKIE['name'])) {
    require 'form.php';
}

if(isset($_COOKIE['name'])) {
    require 'wellcome.php';
}