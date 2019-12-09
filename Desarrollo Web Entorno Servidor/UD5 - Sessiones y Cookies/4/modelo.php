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

class Clients {
    
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
        } catch (PDOException $error) {
            require 'vistas/error.php';
            die();
        }
        
        $clients = [];
        while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
            $client = new Clients($row['dniCliente'], $row['nombre']);
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
        } catch (PDOException $error) {
            require 'vistas/error.php';
            die();
        }
        
        $products = [];
        while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
            $product = new Productos($row['idProducto'], $row['nombre']);
            array_push($products, $product);
        }

        return $products;
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
        } catch (PDOException $error) {
            require 'vistas/error.php';
            die();
        }
        
        if ($result->rowCount() > 0) {
            return true;
        }

        return false;
    }

    function guardar() {
        $_COOKIE['idPedido'] = $_POST['idPedido'];
        $_COOKIE['fecha'] = $_POST['fecha'];
        $_COOKIE['cliente'] = $_POST['cliente'];
        $_COOKIE['numeroLineas'] = 0;
        $data['idPedido'] = $_POST['idPedido'];
        $data['fecha'] = $_POST['fecha'];
        $data['cliente'] = $_POST['cliente'];
        $data['numeroLineas'] = 0;
    }

}

class Lineas {
        
    private $idPedido;
    private $numeroLinea;
    private $idProducto;
    private $cantidad;

    function __construct($idPedido, $numeroLinea, $idProducto, $cantidad) {
        $this->idPedido = $idPedido;
        $this->numeroLinea = $numeroLinea;
        $this->idProducto = $idProducto;
        $this->cantidad = $cantidad;
    }

    function guardar() {
        $_COOKIE['producto'][$this->numeroLinea] = $this->idProducto;
        $_COOKIE['cantidad'][$this->numeroLinea] = $this->cantidad;
        $data['producto'][$this->numeroLinea] = $this->idProducto;
        $data['cantidad'][$this->numeroLinea] = $this->cantidad;
    }

    static function insertarTodas($link) {
        try {
            $link->beginTransaction();
            $queryString = 'INSERT INTO pedidos (idPedido, fecha, dniCliente) VALUES (' . $_COOKIE['idPedido'] . ', \'' . date($_COOKIE['fecha']) . '\', ' . $_COOKIE['cliente'] . ')';
            $result = $link->prepare($queryString);
            $result->execute();

            for ($index = 1; $index <= $_COOKIE['numeroLineas']; $index++) {
                $queryString = 'INSERT INTO lineaspedidos (idPedido, nLinea, idProducto, cantidad) VALUES (:idPedido, :nLinea, :idProducto, :cantidad)';
                $result = $link->prepare($queryString);
                $result->bindParam(':idPedido', $_COOKIE['idPedido']);
                $result->bindParam(':nLinea', $index);
                $result->bindParam(':idProducto', $_COOKIE['producto'][$index]);
                $result->bindParam(':cantidad', $_COOKIE['cantidad'][$index]);
                $result->execute();
            }

            $link->commit();
        } catch (PDOException $error) {
            $link->rollBack();
            require 'vistas/error.php';
            die();
        }
    }

}
