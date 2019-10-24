<?php
require 'modelos/Bd.php';

class Cliente {

    private $link;
    private $dniCliente;
    private $nombre;
    private $direccion;
    private $email;
    private $password;

    function __construct($dniCliente, $nombre, $direccion, $email, $password) {
        $bd = new Bd();
        $this->link = $bd->link;
        $this->dniCliente = $dniCliente;
        $this->nombre = $nombre;
        $this->direccion = $direccion;
        $this->email = $email;
        $this->password = $password;
    }

    function __destruct() {
        $this->link->close();
    }

    function __get($var) {
        return $this->$var;
    }

    function getAll() {
        $queryString = "SELECT * FROM clientes";
        return $this->link->query($queryString);
    }

    function existe(string $dniCliente): bool {
        $queryString = "SELECT * FROM clientes WHERE dniCliente='" . $dniCliente . "'";
        $result = $this->link->query($queryString);
        return $result->num_rows > 0;
    }

    function insertar(Cliente $cliente) {
        $queryString = "INSERT INTO clientes (dniCliente, nombre, direccion, email, pwd) VALUES ('" . $cliente->dniCliente . "', '" . $cliente->nombre . "', '" . $cliente->direccion . "', '" . $cliente->email . "', '" . $cliente->password . "')";
        $this->link->query($queryString);
    }

}