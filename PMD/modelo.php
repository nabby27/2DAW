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

class Carrito {


    function __construct() {

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

class Clientes {

    private $dniCliente;
    private $nombre;
    private $direccion;
    private $email;
    private $pwd;
    private $administrador;

    function __construct($dniCliente, $nombre, $direccion, $email, $pwd, $administrador) {
        $this->dniCliente = $dniCliente;
        $this->nombre = $nombre;
        $this->direccion = $direccion;
        $this->email = $email;
        $this->pwd = $pwd;
        $this->administrador = $administrador;
    }

}

class Productos {

    private $idProducto;
    private $nombre;
    private $foto;
    private $marca;
    private $peso;
    private $unidades;
    private $precio;

    function __construct() {
    }
    
    static function getOne($link) {
        $this->link = $link;
    }

    static function getAll($link) {
        $this->link = $link;
    }

}