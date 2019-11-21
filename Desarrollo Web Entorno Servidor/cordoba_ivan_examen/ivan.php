<?php

class Conexion {

    private $link;
    
	function __construct() {
		if (!isset ($this->link)) {
            $this->link= new mysqli('localhost', 'root', '', 'examendaw1eval');
		}
    }
    
    function __get($property) {
		return $this->$property;
	}
}

class Alquileres {

    private $idAlquiler;
    private $pelicula;
    private $cliente;
    private $empleado;

    function __construct($idAlquiler, $pelicula, $cliente, $empleado) {
        $this->idAlquiler = $idAlquiler;
        $this->pelicula = $pelicula;
        $this->cliente = $cliente;
        $this->empleado = $empleado;
    }

    function __get($property) {
		return $this->$property;
    }
    
    function __set($property, $value) {
		$this->$property = $value;
    }
    
    function existe($link) {
        $queryString = "SELECT idAlquiler FROM alquileres WHERE IdAlquiler='$this->idAlquiler'";
        $result = $link->query($queryString);

        if($result->num_rows > 0) {
            return true;
        }

        return false;

    }

    function insertar($link) {
        $queryString = "INSERT INTO alquileres (IdAlquiler, Fecha, Pelicula, Cliente, Empleado) VALUES
          ('$this->idAlquiler', curdate(), '$this->pelicula', $this->cliente, $this->empleado)";

        $result = $link->query($queryString);
    }

}
