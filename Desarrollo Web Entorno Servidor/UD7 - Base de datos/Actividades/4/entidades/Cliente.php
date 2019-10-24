<?php

class Cliente {

    private $dniCliente;
    private $nombre;
    private $direccion;
    private $email;
    private $password;

    function __construct(string $dniCliente, string $nombre, string $direccion, string $email, string $password) {
        $this->dniCliente = $dniCliente;
        $this->nombre = $nombre;
        $this->direccion = $direccion;
        $this->email = $email;
        $this->password = $password;
    }

    function __get($var) {
        return $this->$var;
    }

}