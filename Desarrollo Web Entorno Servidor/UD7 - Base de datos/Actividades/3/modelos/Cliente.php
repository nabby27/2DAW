<?php

class Cliente {

    static function getAll($link) {
        $queryString = "SELECT * FROM clientes";
        return $link->query($queryString);
    }

    static function existe($link, $dniCliente): bool {
        $queryString = "SELECT * FROM clientes WHERE dniCliente='" . $dniCliente . "'";
        $result = $link->query($queryString);
        return $result->num_rows > 0;
    }

    static function insertar($link, $dniCliente, $nombre, $direccion, $email, $password) {
        $queryString = "INSERT INTO clientes (dniCliente, nombre, direccion, email, pwd) VALUES ('" . $dniCliente . "', '" . $nombre . "', '" . $direccion . "', '" . $email . "', '" . $password . "')";
        $link->query($queryString);
    }

}