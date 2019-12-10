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
    
    private $id;
    private $nombre;

    function __construct(int $id, String $nombre) {
        $this->id = $id;
        $this->nombre = $nombre;
    }

    function __get($property) {
        return $this->$property;
    }

    // function __set($property, $value) {
    //     $this->$property = $value;
    // }

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
    
    function __set($property, $value) {
        $this->$property = $value;
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

    function __set($property, $value) {
        $this->$property = $value;
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
        setcookie('idPedido', $_POST['idPedido'], time() + 36000);
        setcookie('fecha', $_POST['fecha'], time() + 36000);
        setcookie('cliente', $_POST['cliente'], time() + 36000);
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

    function __get($property) {
        return $this->$property;
    }

    function __set($property, $value) {
        $this->$property = $value;
    }

    function guardar() {
        setcookie('producto[' . $this->numeroLinea . ']', $this->idProducto, time() + 36000);
        setcookie('cantidad[' . $this->numeroLinea . ']', $this->cantidad, time() + 36000);
    }

    static function insertarTodas($link) {
        try {
            $link->beginTransaction();
            $queryString = 'INSERT INTO pedidos (idPedido, fecha, dniCliente) VALUES (' . $_COOKIE['idPedido'] . ', \'' . date($_COOKIE['fecha']) . '\', ' . $_COOKIE['cliente'] . ')';
            $result = $link->prepare($queryString);
            $result->execute();

            for ($linea = 1; $linea <= $_COOKIE['numeroLineas']; $linea++) {
                $queryString = 'INSERT INTO lineaspedidos (idPedido, nLinea, idProducto, cantidad) VALUES (:idPedido, :nLinea, :idProducto, :cantidad)';
                $result = $link->prepare($queryString);
                $result->bindParam(':idPedido', $_COOKIE['idPedido']);
                $result->bindParam(':nLinea', $linea);
                $result->bindParam(':idProducto', $_COOKIE['producto'][$linea]);
                $result->bindParam(':cantidad', $_COOKIE['cantidad'][$linea]);
                $result->execute();
            }

            $link->commit();
            setcookie('producto', '', time() - 36000);
            setcookie('cantidad', '', time() - 36000);
            setcookie('idPedido', '', time() - 36000);
            setcookie('fecha', '', time() - 36000);
            setcookie('cliente', '', time() - 36000);
            setcookie('numeroLineas', '', time() - 36000);
        } catch (PDOException $error) {
            $link->rollBack();
            require 'vistas/error.php';
            die();
        }
    }

}
