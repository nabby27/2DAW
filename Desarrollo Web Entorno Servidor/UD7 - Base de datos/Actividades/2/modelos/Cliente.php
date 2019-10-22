<?php

class Cliente {

/*
    private $dniCliente;
    private $nombre;
    private $direccion;
    private $email;
    private $pwd;
*/

    static function getAll($link) {
        $queryString = "SELECT * FROM clientes";
        return $link->query($queryString);
    }

}