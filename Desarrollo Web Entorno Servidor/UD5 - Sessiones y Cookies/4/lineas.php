<?php
session_start();

require 'modelo.php';
require 'functions.php';

$bd = new Bd();
$link = $bd->link;

$productos = Productos::getAll($link);

if (isset($_POST['continuar'])) {
    $_SESSION['numeroLineas']++;
    $linea = new Lineas($_SESSION['producto'], $_SESSION['numeroLineas'], $_POST['producto'], $_POST['cantidad']);
    $linea->guardar();
}

require 'vistas/detalle.php';