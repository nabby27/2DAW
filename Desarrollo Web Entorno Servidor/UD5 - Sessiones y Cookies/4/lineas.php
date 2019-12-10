<?php
require 'modelo.php';
require 'functions.php';

$bd = new Bd();
$link = $bd->link;

$productos = Productos::getAll($link);
$dato['numeroLineas'] = $_COOKIE['numeroLineas'];

if (isset($_POST['continuar'])) {
    $numeroLineas = $_COOKIE['numeroLineas'] + 1;
    $dato['numeroLineas'] = $numeroLineas;
    $dato['producto'] = [];
    $dato['cantidad'] = [];
    if ($numeroLineas > 1) {
        $dato['producto'] = $_COOKIE['producto'];
        $dato['cantidad'] = $_COOKIE['cantidad'];
    }
    $dato['producto'][$numeroLineas] = $_POST['producto'];
    $dato['cantidad'][$numeroLineas] = $_POST['cantidad'];
    
    setcookie('numeroLineas', $numeroLineas, time() + 36000);
    
    $linea = new Lineas($_COOKIE['idPedido'], $numeroLineas, $_POST['producto'], $_POST['cantidad']);
    $linea->guardar();
    
}

require 'vistas/detalle.php';