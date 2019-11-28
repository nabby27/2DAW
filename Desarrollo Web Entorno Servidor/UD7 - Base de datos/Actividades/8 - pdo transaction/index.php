<?php
session_start();

require 'modelo.php';
require 'functions.php';

$bd = new Bd();
$link = $bd->link;
$error = '';

if (!isset($_POST['enviar'])) {
    $clientes = Clientes::getAll($link);
    require 'vistas/principal.php';
} else {
    $pedido = new Pedidos($_POST['idPedido'], $_POST['fecha'], $_POST['cliente']);
    if (!$pedido->existe($link)) {
        $_SESSION['idPedido'] = $_POST['idPedido'];
        $_SESSION['fecha'] = $_POST['fecha'];
        $_SESSION['cliente'] = $_POST['cliente'];
        $_SESSION['numeroLineas'] = 0;
    var_dump('a');
        // header('Location: lineas.php');
    }
}
