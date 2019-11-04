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

    private $link;

    private $dni;
    private $pws;

    function __construct($dni, $pws) {
        $this->dni = $dni;
        $this->pws = $pws;
    }

    function doLogin($link) {
        $queryString = 'SELECT * FROM clientes WHERE dniCliente=\'' . $this->dni . '\'';
        $client= $link->query($queryString);
        
    }

}

class Clientes {

    private $link;

    private $dni;
    private $pws;

    function __construct() {

    }

}

class Productos {

    private $link;

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