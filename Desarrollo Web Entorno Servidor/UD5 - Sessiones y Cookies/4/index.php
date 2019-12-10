<?php
require 'modelo.php';
require 'functions.php';

$bd = new Bd();
$link = $bd->link;
$error = '';

$clientes = Clientes::getAll($link);

if (isset($_POST['enviar'])) {

    $pedido = new Pedidos($_POST['idPedido'], $_POST['fecha'], $_POST['cliente']);
    if (!$pedido->existe($link)) {
        setcookie('numeroLineas', 0, time() + 36000);
        $pedido->guardar();
        header('Location: lineas.php');
    } else {
        $error = "<br>El pedido ya existe";
    }
}

require 'vistas/principal.php';
