<?php

class Client {

    public $dni;
    public $name;
    public $address;
    public $email;
    public $password;

    function __construct(string $dni, string $name, string $address, string $email, string $password) {
        $this->dni = $dni;
        $this->name = $name;
        $this->address = $address;
        $this->email = $email;
        $this->password = $password;
    }

    function __get($var) {
        return $this->$var;
    }

}