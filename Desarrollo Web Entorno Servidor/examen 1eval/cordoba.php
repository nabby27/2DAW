<?php

class Pantalla {

    private $cabecera = '<h1>Iván Córdoba Donet</h1>';
    private $cuerpo;
    private $pie;

    function mostrar() {
        echo $this->cabecera . $this->cuerpo . $this->pie;
    }
    
    function __set($property, $value) {
		$this->$property = $value;
    }

}