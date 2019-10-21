<?php
require('modelo.php');

if (!isset($_POST['enviar'])) {
    require('vistas/formulario.php');
} else {
    $producto = crearProducto($_POST['producto']);
    
    $propiedades = $producto->asignar();
    require('vistas/mostrar.php');
}

function crearProducto(string $tipo_producto): Producto {
    if ($tipo_producto === 'monitores') {
        $producto = new Monitor($_POST['peso'], $_POST['precio'], $_POST['stock'], $_POST['pulgadas']);
    }
    else if ($tipo_producto === 'disco_duro') {
        $producto = new DiscoDuro($_POST['peso'], $_POST['precio'], $_POST['stock'], $_POST['capacidad']);
    }

    return $producto;
}