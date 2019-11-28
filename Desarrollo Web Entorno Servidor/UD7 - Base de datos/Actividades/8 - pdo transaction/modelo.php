<?php 

class Bd {

    private $link;

    function __construct() {
        if (!isset($this->link)) {
            try {
                $this->link = new PDO('mysql:host=localhost;dbname=virtualmarket', 'root', '');
            } catch (PDOException $e) {
                // echo "¡Error!: " . $e->getMessage() . "<br/>";
                die();
            }
        }
    }

    function __get($var) {
        return $this->$var;
    }

}

class Clientes {
    
    private $id;
    private $nombre;

    function __construct(int $id, String $nombre) {
        $this->id = $id;
        $this->nombre = $nombre;
    }

    function __get($property) {
        return $this->$property;
    }

    static function getAll($link) {
        try {
            $queryString = "SELECT * FROM clientes";
            $result = $link->prepare($queryString);
            $result->execute();
        } catch (PDOException $e) {
            echo "¡Error!: " . $e->getMessage() . "<br/>";
            die();
        }
        
        $clients = [];
        while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
            $client = new Clientes($row['dniCliente'], $row['nombre']);
            array_push($clients, $client);
        }

        return $clients;
    }

}

class Productos {

    private $id;
    private $nombre;

    function __construct(int $id, String $nombre) {
        $this->id = $id;
        $this->nombre = $nombre;
    }

    function __get($property) {
        return $this->$property;
    }

    static function getAll($link) {
        try {
            $queryString = "SELECT * FROM productos";
            $result = $link->prepare($queryString);
            $result->execute();
        } catch (PDOException $e) {
            // echo "¡Error!: " . $e->getMessage() . "<br/>";
            die();
        }
        
        $clients = [];
        while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
            $client = new Clientes($row['idProducto'], $row['nombre']);
            array_push($clients, $client);
        }

        return $clients;
    }
}

class Pedidos {
    
    private $id;
    private $fecha;
    private $dniCliente;

    function __construct(int $id, String $fecha, String $dniCliente) {
        $this->id = $id;
        $this->fecha = $fecha;
        $this->dniCliente = $dniCliente;
    }

    function __get($property) {
        return $this->$property;
    }
    
    function existe($link) {
        try {
            $queryString = "SELECT * FROM productos WHERE idProducto = :idProducto";
            $result = $link->prepare($queryString);
            $result->bindParam(':idProducto', $this->id);
            $result->execute();
        } catch (PDOException $e) {
            // echo "¡Error!: " . $e->getMessage() . "<br/>";
            die();
        }
        
        if ($result->rowCount() > 0) {
            return true;
        }

        return false;
    }

    function guardar($link) {

    }

}

class Lineas {
        
    private $idPedido;
    private $numeroLinea;
    private $idProducto;
    private $cantidad;

    function guardar() {

    }

    static function insertarTodas() {

    }

}
