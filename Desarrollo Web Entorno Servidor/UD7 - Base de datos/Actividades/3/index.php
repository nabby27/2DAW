<?php

require 'modelos/Cliente.php';

if (!isset($_POST['enviar'])) {
    require 'vistas/formulario_anadir_cliente.php';
} else {
    $dniCliente = $_POST['dniCliente'];
    $nombre = $_POST['nombre'];
    $direccion = $_POST['direccion'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    $clienteModel = new Cliente($dniCliente, $nombre, $direccion, $email, $password);

    $existe = $clienteModel->existe($clienteModel->dniCliente);

    if (!$existe) {
        $clienteModel->insertar($clienteModel);
        $clientes = $clienteModel->getAll();
        require 'vistas/ver_clientes.php';
        $clientes->free();
    } else {
        require 'vistas/error_cliente_ya_existe.php';
    }
}
