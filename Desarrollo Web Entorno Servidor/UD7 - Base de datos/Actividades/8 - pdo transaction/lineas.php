<?php
session_start();

require 'modelo.php';
require 'functions.php';

$bd = new Bd();
$link = $bd->link;

$productos = Productos::getAll($link);

if (iseet($_POST['continuar'])) {
    $_SESSION['numeroLineas']++;
    $_SESSION['numeroLineas']['producto'] = $_POST['producto'];
    $_SESSION['numeroLineas']['cantidad'] = $_POST['cantidad'];
}

require 'vistas/detalle.php';