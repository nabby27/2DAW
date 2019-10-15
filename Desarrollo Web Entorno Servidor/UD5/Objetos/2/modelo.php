<?php

class Producto {
    protected $peso;
    protected $precio;
    protected $stock;

    function __construct($peso, $precio, $stock) {
        $this->peso = $peso;
        $this->precio = $precio;
        $this->stock = $stock;
    }

    protected function asignar() {
        $result = [];
        foreach ($this as $key => $value) {
            $result[$key] = $value;
        }

        return $result;
    }

}

class Monitor extends Producto {
    private $pulgadas;
    
    function __construct($peso, $precio, $stock, $pulgadas) {
        parent::__construct($peso, $precio, $stock);
        $this->pulgadas = $pulgadas;
    }

    public function __get($property) {
        var_dump($this->$property);
        $this->$property;
    }

    public function __set($property, $value) {
        $this->$property = $value;
    }

    public function asignar() {
        $result = parent::asignar();
        $result['pulgadas'] = $this->pulgadas;

        return $result;
    }
}

class DiscoDuro extends Producto {
    private $capacidad;

    function __construct($peso, $precio, $stock, $capacidad) {
        parent::__construct($peso, $precio, $stock);
        $this->capacidad = $capacidad;
    }

    public function __get($property) {
        var_dump($this->$property);
        $this->$property;
    }

    public function __set($property, $value) {
        $this->$property = $value;
    }

    public function asignar() {
        $result = parent::asignar();
        $result['capacidad'] = $this->capacidad;

        return $result;
    }
}