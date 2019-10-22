<?php

require 'modelos/Bd.php';
require 'modelos/Cliente.php';

if (!isset($_POST['enviar'])) {
    require 'vistas/formulario_anadir_cliente.php';
} else {

    $dniCliente = $_POST['dniCliente'];
    $nombre = $_POST['nombre'];
    $direccion = $_POST['direccion'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    $bd = new Bd();

    $existe = Cliente::existe($bd->link, $dniCliente);

    if (!$existe) {
        Cliente::insertar($bd->link, $dniCliente, $nombre, $direccion, $email, $password);
        $clientes = Cliente::getAll($bd->link);
        require 'vistas/ver_clientes.php';
        $clientes->free();
    } else {
        require 'vistas/error_cliente_ya_existe.php';
    }
    
    $bd->link->close();
}
