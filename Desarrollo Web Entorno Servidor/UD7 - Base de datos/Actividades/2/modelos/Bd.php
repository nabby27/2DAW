<?php 

class Bd {

    private $link;

    function __construct() {
        if (!isset($this->link)) {
            $this->link = new mysqli('localhost', 'root', '', 'virtualmarket');
            $this->link->set_charset('UTF-8');
            if ($this->link->connect_errno) {
                require 'vistas/error_conexion_base_de_datos.php';
            }
        }
    }

    function __get($var) {
        return $this->$var;
    }

}