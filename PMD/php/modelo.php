<?php

class Bd {

    private $link;
    
	function __construct() {
		if (!isset ($this->link)) {
            $this->link= new mysqli('localhost', 'root', '', 'VIRTUALMARKET_PMD');
            $this->link->set_charset('utf-8'); 
		}
    }
    
    function __get($var) {
		return $this->$var;
	}
}

class Login {

    private $dni;
    private $pws;

    function __construct($dni, $pws) {
        $this->dni = $dni;
        $this->pws = $pws;
    }

    function getOne($link) {
        $queryString = "SELECT * FROM clientes WHERE dniCliente='$this->dni'";
        $result = $link->query($queryString);
        return $result->fetch_assoc();
    }

}

class Client implements \JsonSerializable {
    use JsonSerializer;

    private $dni;
    private $name;
    private $address;
    private $email;
    private $password;
    private $admin;

    function __construct($dni, $name, $address, $email, $password, $admin) {
        $this->dni = $dni;
        $this->name = $name;
        $this->address = $address;
        $this->email = $email;
        $this->password = $password;
        $this->admin = $admin;
    }

    function __get($var) {
        $this->$var;
    }

    function __set($key, $value) {
        $this->$key = $value;
    }

    function save($link) {
        $queryString = "INSERT INTO clientes  (dniCliente, nombre, direccion, email, pwd, administrador) VALUES
            ('$this->dni', '$this->name', '$this->address', '$this->email', '$this->password', '$this->admin')";
        $result = $link->query($queryString);

        return $result;
    }

    static function getAll($link) {
        $queryString = "SELECT * FROM clientes";
        $result = $link->query($queryString);

        $clients = [];
        while ($row = $result->fetch_assoc()) {
            $client = new Client($row['dniCliente'], $row['nombre'], $row['direccion'], $row['email'], $row['pwd'], $row['administrador']);
            array_push($clients, $client);
        }

        return $clients;
    }
}

class Product {

    private $idProducto;
    private $name;
    private $photo;
    private $brand;
    private $weight;
    private $unity;
    private $price;

    function __construct() {
    }
    
    function getOne($link) {
        $this->link = $link;
    }

    static function getAll($link) {
        $this->link = $link;
    }

}

trait JsonSerializer {
    public function jsonSerialize()
    {
        return get_object_vars($this);
    }
}