<?php
require 'modelos/Bd.php';

class ClienteModelo {

    private $link;

    function __construct() {
        $bd = new Bd();
        $this->link = $bd->link;
    }

    function __destruct() {
        $this->link->close();
    }

    function getAll() {
        $queryString = "SELECT * FROM clientes";
        return $this->link->query($queryString);
    }

    function getOne(string $dniCliente): ?Cliente {
        $cliente = null;
        $queryString = "SELECT * FROM clientes WHERE dniCliente = '" . $dniCliente . "'";
        $result = $this->link->query($queryString);
        if ($result->num_rows > 0) {
            $result = $result->fetch_object();
            $cliente = new Cliente($result->dniCliente, $result->nombre, $result->direccion, $result->email, $result->pwd);
        } 

        return $cliente;
    }

    function insertar(Cliente $cliente) {
        $queryString = "INSERT INTO clientes (dniCliente, nombre, direccion, email, pwd) VALUES ('" . $cliente->dniCliente . "', '" . $cliente->nombre . "', '" . $cliente->direccion . "', '" . $cliente->email . "', '" . $cliente->password . "')";
        $this->link->query($queryString);
    }

    function actualizar(Cliente $cliente) {
        $queryString = "UPDATE clientes SET nombre='" . $cliente->nombre . "', direccion='" . $cliente->direccion ."', email='" . $cliente->email . "', pwd='" . $cliente->password . "' WHERE dniCliente='" . $cliente->dniCliente . "'";
        $this->link->query($queryString);
    }
}