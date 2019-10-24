<?php

require 'modelos/ClienteModelo.php';
require 'entidades/Cliente.php';

if (!isset($_POST['buscar']) && !isset($_POST['actualizar'])) {
    require 'vistas/formulario_buscar_dni.php';
}

if(isset($_POST['buscar']) && !isset($_POST['actualizar'])) {
    $dniCliente = $_POST['dniCliente'];

    $clienteModelo = new ClienteModelo();

    $cliente = $clienteModelo->getOne($dniCliente);
    if ($cliente == null) {
        require 'vistas/error_cliente_no_existe.php';
    } else {
        require 'vistas/formulario_actualizar_cliente.php';    
    }
}

if (!isset($_POST['buscar']) && isset($_POST['actualizar'])) {
    $dniCliente = $_POST['dniCliente'];
    $nombre = $_POST['nombre'];
    $direccion = $_POST['direccion'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    $cliente = new Cliente($dniCliente, $nombre, $direccion, $email, $password);
    $clienteModelo = new ClienteModelo();
    $clienteModelo->actualizar($cliente);
    require 'vistas/actualizacion_correcta.php';
}
