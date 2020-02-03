<?php

class Bd {
    
    private $link;
    
    function __construct() {
        if (!isset($this->link)) {
            $this->link = new PDO('mysql:host=localhost;dbname=VIRTUALMARKET_PMD', 'root', '');
        }
    }

    function __get($var) {
        return $this->$var;
    }
}

class Login implements \JsonSerializable {
    use JsonSerializer;

    private $dni;
    private $pws;

    function __construct(string $dni, ?string $pws) {
        $this->dni = $dni;
        $this->pws = $pws;
    }

    function __get($property) {
        return $this->$property;
    }

    function __set($property, $value) {
        $this->$property = $value;
    }

    function loginAdmin($link): ?Client {
        $queryString = "SELECT * FROM clientes WHERE dniCliente='$this->dni' AND pwd='$this->password' AND administrador=TRUE";        
        $result = $link->query($queryString);
        if ($result) {
            return new Client($result['dniCliente'], $result['nombre'], $result['direccion'], $result['email'], $result['pwd'], $result['administrador']);
        }
        return null;
    }

    function loginClient($link): ?Client {
        $queryString = "SELECT * FROM clientes WHERE dniCliente='$this->dni' AND administrador=false";        
        $result = $link->query($queryString);
        if ($row = $result->fetch(PDO::FETCH_ASSOC)) {
            return new Client($row['dniCliente'], $row['nombre'], $row['direccion'], $row['email'], $row['pwd'], $row['administrador']);
        }
        return null;
    }

}

class Client implements \JsonSerializable {
    use JsonSerializer;

    private $dni;
    private $name;
    private $address;
    private $email;
    private $password;
    private $admin;

    function __construct($dni, $name, $address, $email, $password, $admin) {
        $this->dni = $dni;
        $this->name = $name;
        $this->address = $address;
        $this->email = $email;
        $this->password = $password;
        $this->admin = $admin;
    }

    function __get($property) {
        return $this->$property;
    }

    function __set($property, $value) {
        $this->$property = $value;
    }

    function save($link): bool {
        $queryString = "INSERT INTO clientes (dniCliente, nombre, direccion, email, pwd, administrador) VALUES
            ('$this->dni', '$this->name', '$this->address', '$this->email', '$this->password', " . (int) $this->admin . ")";
        $result = $link->query($queryString);

        return $result;
    }

    function update($link): bool {
        $queryString = "UPDATE clientes SET nombre='$this->name', direccion='$this->address', email='$this->email', administrador=" . (int) $this->admin . " WHERE dniCliente='$this->dni'";
        $result = $link->query($queryString);

        return $result;
    }

    function remove($link): bool {
        $queryString = "DELETE FROM clientes WHERE dniCliente='$this->dni'";
        $result = $link->query($queryString);

        return $result;
    }

    static function getAll($link): array {
        $queryString = "SELECT * FROM clientes";
        $result = $link->query($queryString);

        $clients = [];
        while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
            $client = new Client($row['dniCliente'], $row['nombre'], $row['direccion'], $row['email'], $row['pwd'], $row['administrador']);
            array_push($clients, $client);
        }

        return $clients;
    }

    function getOne($link): Client {
        $queryString = "SELECT * FROM clientes WHERE dniCliente='$this->dni'";
        $result = $link->query($queryString);

        if ($row = $result->fetch(PDO::FETCH_ASSOC)) {
            return new Client($row['dniCliente'], $row['nombre'], $row['direccion'], $row['email'], $row['pwd'], $row['administrador']);
        }

        return null;
    }
}

class Product implements \JsonSerializable {
    use JsonSerializer;

    private $id;
    private $name;
    private $photo;
    private $brand;
    private $quantity;
    private $price;

    function __construct($id, $name, $photo, $brand, $quantity, $price) {
        $this->id = $id;
        $this->name = $name;
        $this->photo = $photo;
        $this->brand = $brand;
        $this->quantity = $quantity;
        $this->price = $price;
    }
    
    function __get($property) {
        return $this->$property;
    }

    function __set($property, $value) {
        $this->$property = $value;
    }

    function save($link): bool {
        $queryString = "INSERT INTO productos (nombre, foto, marca, cantidad, precio) VALUES
            ('$this->name', '$this->photo', '$this->brand', $this->quantity, $this->price)";
        $result = $link->query($queryString);

        return $result;
    }

    function update($link): bool {
        if ($this->photo != '') {
            $queryString = "UPDATE productos SET nombre='$this->name', foto='$this->photo', marca='$this->brand', cantidad='$this->quantity', precio='$this->price' WHERE idProducto='$this->id'";
        } else {
            $queryString = "UPDATE productos SET nombre='$this->name', marca='$this->brand', cantidad='$this->quantity', precio='$this->price' WHERE idProducto='$this->id'";
        }
        $result = $link->query($queryString);

        return $result;
    }

    function remove($link): bool {
        $queryString = "DELETE FROM productos WHERE idProducto='$this->id'";
        $result = $link->query($queryString);

        return $result;
    }

    static function getAll($link): array {
        $queryString = "SELECT * FROM productos";
        $result = $link->query($queryString);

        $products = [];
        while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
            $product = new Product($row['idProducto'], $row['nombre'], $row['foto'], $row['marca'], $row['cantidad'], $row['precio']);
            array_push($products, $product);
        }

        return $products;
    }

    function getOne($link): ?Product {
        $queryString = "SELECT * FROM productos WHERE idProducto='$this->id'";
        $result = $link->query($queryString);

        if ($row = $result->fetch(PDO::FETCH_ASSOC)) {
            return new Product($row['idProducto'], $row['nombre'], $row['foto'], $row['marca'], $row['cantidad'], $row['precio']);
        }

        return null;
    }

    function getLastProduct($link): ?Product {
        $queryString = "SELECT * FROM productos ORDER BY idProducto DESC LIMIT 1";
        $result = $link->query($queryString);

        if ($row = $result->fetch(PDO::FETCH_ASSOC)) {
            return new Product($row['idProducto'], $row['nombre'], $row['foto'], $row['marca'], $row['cantidad'], $row['precio']);
        }

        return null;
    }

}

class Order implements \JsonSerializable {
    use JsonSerializer;

    private $orderId;
    private $date;
    private $dniClient;

    function __construct($orderId, $date, $dniClient) {
        $this->orderId = $orderId;
        $this->date = $date;
        $this->dniClient = $dniClient;
    }

    function __get($property) {
        return $this->$property;
    }

    function __set($property, $value) {
        $this->$property = $value;
    }

    function saveOrder($link): bool {
        $queryString = "INSERT INTO pedidos (idPedido, fecha, dniCliente) VALUES
            ($this->orderId, '$this->date', '$this->dniClient')";
        $result = $link->query($queryString);

        return $result;
    }

    function updateOrder($link): bool {
        $queryString = "UPDATE pedidos SET dniCliente='$this->dniClient' WHERE idPedido=$this->orderId";
        $result = $link->query($queryString);

        return $result;
    }

    function getNewOrderId($link): int {
        $queryString = "SELECT max(idPedido) FROM pedidos";
        $result = $link->query($queryString);
        $maxId = mysqli_fetch_row($result)[0];
        
        if($maxId) {
            return $maxId + 1;
        }

        return 0;
    }

    static function getAllOrder($link): array {
        $queryString = "SELECT * FROM pedidos";
        $result = $link->query($queryString);

        $orders = [];
        while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
            $order = new Order($row['idPedido'], $row['fecha'], $row['dniCliente']);
            array_push($orders, $order);
        }

        return $orders;
    }

    function removeOrder($link): bool {
        $queryString = "DELETE FROM pedidos WHERE idPedido=$this->orderId";
        $result = $link->query($queryString);

        return $result;

    }
    
    function getOneOrder($link): ?Order {
        $queryString = "SELECT * FROM pedidos WHERE idPedido=$this->orderId";
        $result = $link->query($queryString);

        if ($row = $result->fetch(PDO::FETCH_ASSOC)) {
            return new Order($row['idPedido'], $row['fecha'], $row['dniCliente']);
        }

        return null;
    }
}

class LineOfOrder implements \JsonSerializable {
    use JsonSerializer;

    private $orderId;
    private $lineId;
    private $productId;
    private $quantity;

    function __construct($orderId, $lineId, $productId, $quantity) {
        $this->orderId = $orderId;
        $this->lineId = $lineId;
        $this->productId = $productId;
        $this->quantity = $quantity;
    }
    
    function __get($property) {
        return $this->$property;
    }

    function __set($property, $value) {
        $this->$property = $value;
    }

    function updateLine($link): bool {
        $queryString = "UPDATE lineas_pedidos SET cantidad=$this->quantity, idProducto=$this->productId WHERE idPedido=$this->orderId AND nLinea=$this->lineId";
        $result = $link->query($queryString);

        return $result;
    }

    function saveLineOrder($link): bool {
        $queryString = "INSERT INTO lineas_pedidos (nLinea, cantidad, idPedido, idProducto) VALUES
            ('$this->lineId', '$this->quantity', '$this->orderId', '$this->productId')";
        $result = $link->query($queryString);

        return $result;
    }

    function getNewLineId($link): int {
        $queryString = "SELECT max(nLinea) FROM lineas_pedidos WHERE idPedido=$this->orderId";
        $result = $link->query($queryString);
        $maxId = mysqli_fetch_row($result)[0];
        
        if ($maxId) {
            return $maxId + 1;
        }
        
        return 0;
    }

    function getOneLine($link): LineOfOrder {
        $queryString = "SELECT * FROM lineas_pedidos WHERE idPedido=$this->orderId AND nLinea=$this->lineId";
        $result = $link->query($queryString);

        if ($row = $result->fetch(PDO::FETCH_ASSOC)) {
            return new LineOfOrder($row['idPedido'], $row['nLinea'], $row['idProducto'], $row['cantidad']);
        }

        return null;
    }

    function getAllLineOfOrder($link): array {
        $queryString = "SELECT * FROM lineas_pedidos WHERE idPedido=$this->orderId";
        $result = $link->query($queryString);

        $lines = [];
        while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
            $line = new LineOfOrder($this->orderId, $row['nLinea'], $row['idProducto'], $row['cantidad']);
            array_push($lines, $line);
        }

        return $lines;
    }

    function removeLinesOfOrder($link): bool {
        $queryString = "DELETE FROM lineas_pedidos WHERE idPedido=$this->orderId";
        $result = $link->query($queryString);

        return $result;
    }

    function removeLine($link): bool {
        $queryString = "DELETE FROM lineas_pedidos WHERE nLinea=$this->lineId AND idPedido=$this->orderId";
        $result = $link->query($queryString);

        return $result;
    }

}

class ShoppingCart implements \JsonSerializable {
    use JsonSerializer;

    private $id;
    private $dniClient;
    private $tempClientId;
    private $productId;
    private $quantity;
    private $date;

    function __construct($id, $dniClient, $tempClientId, $productId, $quantity, $date) {
        $this->id = $id;
        $this->dniClient = $dniClient;
        $this->tempClientId = $tempClientId;
        $this->productId = $productId;
        $this->quantity = $quantity;
        $this->date = $date;
    }
    
    function __get($property) {
        return $this->$property;
    }

    function __set($property, $value) {
        $this->$property = $value;
    }

    function getNumberOfItemsByClient($link): int {
        $queryString = "SELECT count(dniCliente) FROM shooping_cart WHERE dniCliente = '11111111A';";
        $result = $link->query($queryString);

        return $result;
    }

    // function updateShoppingCart($link): bool {
    //     $queryString = "UPDATE lineas_pedidos SET cantidad=$this->quantity, idProducto=$this->productId WHERE idPedido=$this->orderId AND nLinea=$this->lineId";
    //     $result = $link->query($queryString);

    //     return $result;
    // }

    // function saveShoppingCart($link): bool {
    //     $queryString = "INSERT INTO lineas_pedidos (nLinea, cantidad, idPedido, idProducto) VALUES
    //         ('$this->lineId', '$this->quantity', '$this->orderId', '$this->productId')";
    //     $result = $link->query($queryString);

    //     return $result;
    // }

    // function getShoppingCart($link): Carrito {
    //     $queryString = "SELECT * FROM lineas_pedidos WHERE idPedido=$this->orderId AND nLinea=$this->lineId";
    //     $result = $link->query($queryString);

    //     if ($row = $result->fetch(PDO::FETCH_ASSOC)) {
    //         return new Carrito($row['idPedido'], $row['nLinea'], $row['idProducto'], $row['cantidad']);
    //     }

    //     return null;
    // }

    // function removeShoppingCart($link): bool {
    //     $queryString = "DELETE FROM lineas_pedidos WHERE idPedido=$this->orderId";
    //     $result = $link->query($queryString);

    //     return $result;
    // }

}

trait JsonSerializer {
    public function jsonSerialize()
    {
        return get_object_vars($this);
    }
}