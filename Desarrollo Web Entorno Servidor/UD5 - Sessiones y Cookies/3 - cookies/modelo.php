<?php 

class Bd {

    private $link;

    function __construct() {
        if (!isset($this->link)) {
            try {
                $this->link = new PDO('mysql:host=localhost;dbname=virtualmarket', 'root', '');
                $this->link->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);    
            } catch (PDOException $error) {
                require 'vistas/error.php';
                die();
            }
        }
    }

    function __get($var) {
        return $this->$var;
    }

}

class Clientes {
    
    private $dni;
    private $pwd;
    private $nombre;

    function __construct(String $dni, String $pwd, String $nombre) {
        $this->dni = $dni;
        $this->pwd = $pwd;
        $this->nombre = $nombre;
    }

    function __get($property) {
        return $this->$property;
    }

    function validar($link) {
        try {
            $queryString = "SELECT * FROM clientes where dniCliente='$this->dni' and pwd='$this->pwd'";
            $result = $link->prepare($queryString);
            $result->execute();
        } catch (PDOException $error) {
            require 'vistas/error.php';
            die();
        }
        
        $client = null;
        while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
            $client = new Clientes($row['dniCliente'], $row['pwd'], $row['nombre']);
        }

        return $client;
    }

}
