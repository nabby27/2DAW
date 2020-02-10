<?php

class Bd {
    
    private $link;
    
    function __construct() {
        if (!isset($this->link)) {
            $this->link = new PDO('mysql:host=localhost;dbname=virtualmarket_ivan', 'root', '');
            $this->link->exec("set names utf8");
        }
    }

    function __get($var) {
        return $this->$var;
    }
}

class Login implements \JsonSerializable {
    use JsonSerializer;

    private $dni;
    private $password;

    function __construct(string $dni, ?string $password) {
        $this->dni = $dni;
        $this->password = $password;
    }

    function __get($property) {
        return $this->$property;
    }

    function __set($property, $value) {
        $this->$property = $value;
    }

    function loginAdmin($link): ?Client {
        $queryString = "SELECT * FROM clients WHERE dni='$this->dni' AND admin=TRUE";        
        $result = $link->query($queryString);
        if ($row = $result->fetch(PDO::FETCH_ASSOC)) {
            return new Client($row['dni'], $row['name'], $row['address'], $row['email'], $row['password'], (bool) $row['admin']);
        }
        return null;
    }

    function loginClient($link): ?Client {
        $queryString = "SELECT * FROM clients WHERE dni='$this->dni' AND admin=0";
        $result = $link->query($queryString);
        if ($row = $result->fetch(PDO::FETCH_ASSOC)) {
            return new Client($row['dni'], $row['name'], $row['address'], $row['email'], $row['password'], (bool) $row['admin']);
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

    function __construct(string $dni, string $name, string $address, string $email, string $password, bool $admin) {
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

    function save($link): ?Client {
        $queryString = "INSERT INTO clients (dni, name, address, email, password, admin) VALUES
            ('" . $this->dni . "', '" . $this->name . "', '" . $this->address . "', '" . $this->email . "', '" . $this->password . "', " . (int) $this->admin . ")";
        $result = $link->query($queryString);

        if ($result) {
            return new Client($this->dni, $this->name, $this->address, $this->email, $this->password, (bool) $this->admin);
        }
        return null;
    }

    function update($link): ?Client {
        $queryString = "UPDATE clients SET name='$this->name', address='$this->address', email='$this->email', admin=" . (int) $this->admin . " WHERE dni='$this->dni'";
        $result = $link->query($queryString);

        if ($result) {
            return new Client($this->dni, $this->name, $this->address, $this->email, $this->password, (bool) $this->admin);
        }
        return null;
    }

    function remove($link): bool {
        $queryString = "DELETE FROM clients WHERE dni='$this->dni'";
        $result = $link->query($queryString);

        if ($result) {
            return true;
        }
        return false;
    }

    static function getAll($link): array {
        $queryString = "SELECT * FROM clients";
        $result = $link->query($queryString);

        $clients = [];
        while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
            $client = new Client($row['dni'], $row['name'], $row['address'], $row['email'], $row['password'], (bool) $row['admin']);
            array_push($clients, $client);
        }

        return $clients;
    }

    function getOne($link): ?Client {
        $queryString = "SELECT * FROM clients WHERE dni='$this->dni'";
        $result = $link->query($queryString);

        if ($row = $result->fetch(PDO::FETCH_ASSOC)) {
            return new Client($row['dni'], $row['name'], $row['address'], $row['email'], $row['password'], (bool) $row['admin']);
        }

        return null;
    }
}

class Product implements \JsonSerializable {
    use JsonSerializer;

    private $id;
    private $name;
    private $description;
    private $image;
    private $brand;
    private $quantity;
    private $price;

    function __construct(int $id, string $name, string $description, string $image, string $brand, int $quantity, float $price) {
        $this->id = $id;
        $this->name = $name;
        $this->description = $description;
        $this->image = $image;
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

    function save($link): ?Product {
        $queryString = "INSERT INTO products (name, description, image, brand, quantity, price) VALUES
            ('$this->name', '$this->description', '$this->image', '$this->brand', $this->quantity, $this->price)";
        $result = $link->query($queryString);

        if ($result) {
            return $this->getLastProduct($link);
        }
        return null;
    }

    function update($link): ?Product {
        if ($this->image != '') {
            $queryString = "UPDATE products SET name='$this->name', description='$this->description', image='$this->image', brand='$this->brand', quantity='$this->quantity', price='$this->price' WHERE id='$this->id'";
        } else {
            $queryString = "UPDATE products SET name='$this->name', description='$this->description', brand='$this->brand', quantity='$this->quantity', price='$this->price' WHERE id='$this->id'";
        }
        $result = $link->query($queryString);

        if ($result) {
            return new Product((int) $this->id, $this->name, $this->description, $this->image, $this->brand, (int) $this->quantity, (float) $this->price);
        }
        return null;
    }

    function remove($link): bool {
        $queryString = "DELETE FROM products WHERE id='$this->id'";
        $result = $link->query($queryString);

        if ($result) {
            return true;
        }
        return false;
    }

    static function getAll($link): array {
        $queryString = "SELECT * FROM products";
        $result = $link->query($queryString);

        $products = [];
        while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
            $product = new Product((int) $row['id'], $row['name'], $row['description'], $row['image'], $row['brand'], (int) $row['quantity'], (float) $row['price']);
            array_push($products, $product);
        }

        return $products;
    }

    function getOne($link): ?Product {
        $queryString = "SELECT * FROM products WHERE id='$this->id'";
        $result = $link->query($queryString);

        if ($row = $result->fetch(PDO::FETCH_ASSOC)) {
            return new Product((int) $row['id'], $row['name'], $row['description'], $row['image'], $row['brand'], (int) $row['quantity'], (float) $row['price']);
        }

        return null;
    }

    function getLastProduct($link): ?Product {
        $queryString = "SELECT * FROM products ORDER BY id DESC LIMIT 1";
        $result = $link->query($queryString);

        if ($row = $result->fetch(PDO::FETCH_ASSOC)) {
            return new Product((int) $row['id'], $row['name'], $row['description'], $row['image'], $row['brand'], (int) $row['quantity'], (float) $row['price']);
        }

        return null;
    }

}

class Order implements \JsonSerializable {
    use JsonSerializer;

    private $id;
    private $date;
    private $dniClient;

    function __construct(int $id, $date, $dniClient) {
        $this->id = $id;
        $this->date = $date;
        $this->dniClient = $dniClient;
    }

    function __get($property) {
        return $this->$property;
    }

    function __set($property, $value) {
        $this->$property = $value;
    }

    function saveOrder($link): ?Order {
        $queryString = "INSERT INTO orders (id, date, dni_client) VALUES
            ($this->id, '$this->date', '$this->dniClient')";
        $result = $link->query($queryString);

        if ($result) {
            return $this->getOneOrder($link);
        }
        return null;
    }

    function updateOrder($link): ?Order {
        $queryString = "UPDATE orders SET dni_client='$this->dniClient' WHERE id=$this->id";
        $result = $link->query($queryString);

        if ($result) {
            return $this->getOneOrder($link);
        }
        return false;
    }

    static function getNewOrderId($link): int {
        $queryString = "SELECT max(id) FROM orders";
        $result = $link->query($queryString);
        $maxId = $result->fetch(PDO::FETCH_ASSOC)['max(id)'];

        if($maxId !== null) {
            return intval($maxId, 10) + 1;
        }

        return 0;
    }

    static function getAllOrder($link): array {
        $queryString = "SELECT * FROM orders";
        $result = $link->query($queryString);
        $orders = [];
        while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
            $order = new Order((int) $row['id'], $row['date'], $row['dni_client']);
            array_push($orders, $order);
        }

        return $orders;
    }

    function removeOrder($link): bool {
        $queryString = "DELETE FROM orders WHERE id=$this->id";
        $result = $link->query($queryString);

        if ($result) {
            return true;
        }
        return false;

    }
    
    function getOneOrder($link): ?Order {
        $queryString = "SELECT * FROM orders WHERE id=$this->id";
        $result = $link->query($queryString);

        if ($row = $result->fetch(PDO::FETCH_ASSOC)) {
            return new Order((int) $row['id'], $row['date'], $row['dni_client']);
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

    function __construct(int $orderId, int $lineId, int $productId, int $quantity) {
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

    function updateLine($link): ?LineOfOrder {
        $queryString = "UPDATE orders_lines SET quantity=$this->quantity, product_id=$this->productId WHERE order_id=$this->orderId AND line_id=$this->lineId";
        $result = $link->query($queryString);

        if ($result) {
            return new LineOfOrder((int) $this->orderId, (int) $this->lineId, (int) $this->productId, (int) $this->quantity);
        }
        return null;
    }

    function saveLineOrder($link): ?LineOfOrder {
        $queryString = "INSERT INTO orders_lines (line_id, quantity, order_id, product_id) VALUES
            ($this->lineId, $this->quantity, $this->orderId, $this->productId)";
        $result = $link->query($queryString);

        if ($result) {
            return new LineOfOrder((int) $this->orderId, (int) $this->lineId, (int) $this->productId, (int) $this->quantity);
        }
        return null;
    }

    function getNewLineId($link): int {
        $queryString = "SELECT max(line_id) FROM orders_lines WHERE order_id=$this->orderId";
        $result = $link->query($queryString);
        $maxLineId = $result->fetch(PDO::FETCH_ASSOC)['max(line_id)'];

        if ($maxLineId != null) {
            return intval($maxLineId, 10) + 1;
        }
        
        return 0;
    }

    function getOneLine($link): ?LineOfOrder {
        $queryString = "SELECT * FROM orders_lines WHERE order_id=$this->orderId AND line_id=$this->lineId";
        $result = $link->query($queryString);

        if ($row = $result->fetch(PDO::FETCH_ASSOC)) {
            return new LineOfOrder((int) $row['order_id'], (int) $row['line_id'], (int) $row['product_id'], (int) $row['quantity']);
        }

        return null;
    }

    function getAllLineOfOrder($link): array {
        $queryString = "SELECT * FROM orders_lines WHERE order_id=$this->orderId";
        $result = $link->query($queryString);

        $lines = [];
        while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
            $line = new LineOfOrder((int) $this->orderId, (int) $row['line_id'], (int) $row['product_id'], (int) $row['quantity']);
            array_push($lines, $line);
        }

        return $lines;
    }

    function removeLinesOfOrder($link): bool {
        $queryString = "DELETE FROM orders_lines WHERE order_id=$this->orderId";
        $result = $link->query($queryString);

        if ($result) {
            return true;
        }
        return false;
    }

    function removeLine($link): bool {
        $queryString = "DELETE FROM orders_lines WHERE line_id=$this->lineId AND order_id=$this->orderId";
        $result = $link->query($queryString);

        if ($result) {
            return true;
        }
        return false;
    }

}

class ShoppingCart implements \JsonSerializable {
    use JsonSerializer;

    private $id;
    private $date;
    private $dniClient;
    private $tempClientId;
    private $productId;
    private $quantity;

    function __construct(int $id, $date, $dniClient, $tempClientId, int $productId, int $quantity) {
        $this->id = $id;
        $this->date = $date;
        $this->dniClient = $dniClient;
        $this->tempClientId = $tempClientId;
        $this->productId = $productId;
        $this->quantity = $quantity;
    }
    
    function __get($property) {
        return $this->$property;
    }

    function __set($property, $value) {
        $this->$property = $value;
    }

    function getNumberOfItemsByClient($link): int {
        $queryString = "SELECT count(*) FROM shopping_cart WHERE dni_client = '$this->dniClient' or temp_client_id = '$this->tempClientId';";
        $result = $link->query($queryString);

        return $result->fetchColumn();
    }

    function addToCart($link): bool {
        $queryString = "INSERT INTO shopping_cart (date, dni_client, temp_client_id, product_id, quantity) VALUES
            ('$this->date', '$this->dniClient', '$this->tempClientId', $this->productId, $this->quantity)";
        $result = $link->query($queryString);

        if ($result) {
            return true;
        }
        return false;
    }

    function updateShoppingCartToLoggedClient($link): bool {
        $queryString = "UPDATE shopping_cart SET dni_client='$this->dniClient' WHERE temp_client_id='$this->tempClientId'";
        $result = $link->query($queryString);

        if ($result) {
            return true;
        }
        return false;
    }

    function getProductsOnShoppingCart($link): array {
        $queryString = "SELECT * FROM shopping_cart WHERE dni_client = '$this->dniClient' or temp_client_id = '$this->tempClientId';";
        $result = $link->query($queryString);

        $productsOnCart = [];
        while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
            $queryString = "SELECT * FROM products WHERE id = " . $row['product_id'];
            $resultProduct = $link->query($queryString);
            if ($rowProduct = $resultProduct->fetch(PDO::FETCH_ASSOC)) {
                $productOnCart = new ProductOnShoppingCart((int) $row['id'], (int) $rowProduct['id'], (int) $row['quantity'], $rowProduct['brand'], $rowProduct['name'], $rowProduct['description'], $rowProduct['image'], (float) $rowProduct['price']);
                array_push($productsOnCart, $productOnCart);
            }
        }

        return $productsOnCart;
    }

    function updateQuantityShoppingCart($link): bool {
        $queryString = "UPDATE shopping_cart SET quantity='$this->quantity', date='$this->date' WHERE id=$this->id";
        $result = $link->query($queryString);
        
        if ($result) {
            return true;
        }
        return false;
    }

    function removeItemOnShoppingCart($link): bool {
        $queryString = "DELETE FROM shopping_cart WHERE id=$this->id";
        $result = $link->query($queryString);
        
        if ($result) {
            return true;
        }
        return false;
    }

    function deleteAllShoppingCartForClient($link) {
        $queryString = "DELETE FROM shopping_cart WHERE dni_client='$this->dniClient'";
        $result = $link->query($queryString);
        
        if ($result) {
            return true;
        }
        return false;
    }

}

class ProductOnShoppingCart implements \JsonSerializable {
    use JsonSerializer;

    private $shoppinCartId;
    private $productId;
    private $quantity;
    private $productBrand;
    private $productName;
    private $productDescription;
    private $productImage;
    private $productPrice;

    function __construct(int $shoppinCartId, int $productId, int $quantity, $productBrand, $productName, $productDescription, $productImage, float $productPrice) {
        $this->shoppinCartId = $shoppinCartId;
        $this->productId = $productId;
        $this->quantity = $quantity;
        $this->productBrand = $productBrand;
        $this->productName = $productName;
        $this->productDescription = $productDescription;
        $this->productImage = $productImage;
        $this->productPrice = $productPrice;
    }
    
    function __get($property) {
        return $this->$property;
    }

    function __set($property, $value) {
        $this->$property = $value;
    }
}

trait JsonSerializer {
    public function jsonSerialize()
    {
        return get_object_vars($this);
    }
}