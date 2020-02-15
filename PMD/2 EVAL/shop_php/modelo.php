<?php

class Bd {
    
    private $link;
    
    function __construct() {
        if (!isset($this->link)) {
            try {
                $this->link = new PDO('mysql:host=localhost;dbname=virtualmarket_ivan', 'root', '');
                $this->link->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
                $this->link->exec("set names utf8");

            } catch (PDOException $e) {
                die();
            }
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
        try {
            $queryString = "SELECT * FROM clients WHERE dni = :dni AND admin=TRUE";        
            $result = $link->prepare($queryString);
            $result->bindValue(':dni', $this->dni);
            $result->execute();
        } catch (PDOException $e) {
            return null;
        }

        if ($row = $result->fetch(PDO::FETCH_ASSOC)) {
            return new Client($row['dni'], $row['name'], $row['address'], $row['email'], $row['password'], (bool) $row['admin']);
        }
        return null;
    }

    function loginClient($link): ?Client {
        try {
            $queryString = "SELECT * FROM clients WHERE dni=:dni AND admin=FALSE";
            $result = $link->prepare($queryString);
            $result->bindValue(':dni', $this->dni);
            $result->execute();
        } catch (PDOException $e) {
            return null;
        }
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

    function save($link): Client {
        try {
            $queryString = "INSERT INTO clients (dni, name, address, email, password, admin) VALUES (:dni, :name, :address, :email, :password, :admin)";
            $result = $link->prepare($queryString);
            $result->bindValue(':dni', $this->dni);
            $result->bindValue(':name', $this->name);
            $result->bindValue(':address', $this->address);
            $result->bindValue(':email', $this->email);
            $result->bindValue(':password', $this->password);
            $result->bindValue(':admin', (int) $this->admin);
            $result->execute();
        } catch (PDOException $e) {
            return new Client('', '', '', '', '', false);
        }
        
        if ($result) {
            return new Client($this->dni, $this->name, $this->address, $this->email, $this->password, (bool) $this->admin);
        }
        return new Client('', '', '', '', '', false);
    }

    function update($link): ?Client {
        try {
            $queryString = "UPDATE clients SET name=:name, address=:address, email=:email, admin=:admin WHERE dni=:dni";
            $result = $link->prepare($queryString);
            $result->bindValue(':dni', $this->dni);
            $result->bindValue(':name', $this->name);
            $result->bindValue(':address', $this->address);
            $result->bindValue(':email', $this->email);
            $result->bindValue(':admin', $this->admin, PDO::PARAM_BOOL);
            $result->execute();
        } catch (Exception $e) {
            return null;
        }
        
        if ($result) {
            return new Client($this->dni, $this->name, $this->address, $this->email, $this->password, (bool) $this->admin);
        }
        return null;
    }

    function remove($link): ?bool {
        try {
            $queryString = "DELETE FROM clients WHERE dni=:dni";
            $result = $link->prepare($queryString);
            $result->bindValue(':dni', $this->dni);
            $result->execute();
        } catch (PDOException $e) {
            return null;
        }

        if ($result) {
            return true;
        }
        return false;
    }

    static function getAll($link) {
        try {
            $queryString = "SELECT * FROM clients";
            $result = $link->prepare($queryString);
            $result->execute();
        } catch (PDOException $e) {
            return null;
        }

        $clients = [];
        while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
            $client = new Client($row['dni'], $row['name'], $row['address'], $row['email'], $row['password'], (bool) $row['admin']);
            array_push($clients, $client);
        }

        return $clients;
    }

    function getOne($link): ?Client {
        try {
            $queryString = "SELECT * FROM clients WHERE dni=:dni";
            $result = $link->prepare($queryString);
            $result->bindValue(':dni', $this->dni);
            $result->execute();
        } catch (PDOException $e) {
            return null;
        }

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
        try {
            $queryString = "INSERT INTO products (name, description, image, brand, quantity, price) VALUES (:name, :description, :image, :brand, :quantity, :price)";
            $result = $link->prepare($queryString);
            $result->bindValue(':name', $this->name);
            $result->bindValue(':description', $this->description);
            $result->bindValue(':image', $this->image);
            $result->bindValue(':brand', $this->brand);
            $result->bindValue(':quantity', $this->quantity, PDO::PARAM_INT);
            $result->bindValue(':price', $this->price, PDO::PARAM_INT);
            $result->execute();
        } catch (PDOException $e) {
            return null;
        }

        if ($result) {
            return $this->getLastProduct($link);
        }
        return null;
    }

    function update($link): ?Product {
        try {
            if ($this->image != '') {
                $queryString = "UPDATE products SET name='$this->name', description='$this->description', image='$this->image', brand='$this->brand', quantity='$this->quantity', price='$this->price' WHERE id='$this->id'";
                $result = $link->prepare($queryString);
                $result->bindValue(':image', $this->image);
            } else {
                $queryString = "UPDATE products SET name='$this->name', description='$this->description', brand='$this->brand', quantity='$this->quantity', price='$this->price' WHERE id='$this->id'";
                $result = $link->prepare($queryString);
            }
            $result->bindValue(':name', $this->name);
            $result->bindValue(':description', $this->description);
            $result->bindValue(':brand', $this->brand);
            $result->bindValue(':quantity', $this->quantity);
            $result->bindValue(':price', $this->price);
            $result->execute();
        } catch (PDOException $e) {
            return null;
        }

        if ($result) {
            return new Product((int) $this->id, $this->name, $this->description, $this->image, $this->brand, (int) $this->quantity, (float) $this->price);
        }
        return null;
    }

    function remove($link): ?bool {
        try {
            $queryString = "DELETE FROM products WHERE id=:id";
            $result = $link->prepare($queryString);
            $result->bindParam(':id', $this->id);
            $result->execute();
        } catch (PDOException $e) {
            return null;
        }

        if ($result) {
            return true;
        }
        return false;
    }

    static function getAll($link): ?array {
        try {
            $queryString = "SELECT * FROM products";
            $result = $link->prepare($queryString);
            $result->execute();
        } catch (PDOException $e) {
            return null;
        }

        $products = [];
        while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
            $product = new Product((int) $row['id'], $row['name'], $row['description'], $row['image'], $row['brand'], (int) $row['quantity'], (float) $row['price']);
            array_push($products, $product);
        }
        return $products;
    }

    function getOne($link): ?Product {
        try {
            $queryString = "SELECT * FROM products WHERE id=:id";
            $result = $link->prepare($queryString);
            $result->bindValue(':id', $this->id);
            $result->execute();
        } catch (PDOException $e) {
            return null;
        }

        if ($row = $result->fetch(PDO::FETCH_ASSOC)) {
            return new Product((int) $row['id'], $row['name'], $row['description'], $row['image'], $row['brand'], (int) $row['quantity'], (float) $row['price']);
        }
        return null;
    }

    function getLastProduct($link): ?Product {
        try {
            $queryString = "SELECT * FROM products ORDER BY id DESC LIMIT 1";
            $result = $link->prepare($queryString);
            $result->execute();
        } catch (PDOException $e) {
            return null;
        }

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
        try {
            $queryString = "INSERT INTO orders (id, date, dni_client) VALUES (:id, :date, :dniClient)";
            $result = $link->prepare($queryString);
            $result->bindValue(':id', $this->id);
            $result->bindValue(':date', $this->date);
            $result->bindValue(':dniClient', $this->dniClient);
            $result->execute();
        } catch (PDOException $e) {
            return null;
        }

        if ($result) {
            return $this->getOneOrder($link);
        }
        return null;
    }

    function updateOrder($link): ?Order {
        try {
            $queryString = "UPDATE orders SET dni_client=:dniClient WHERE id=:id";
            $result = $link->prepare($queryString);
            $result->bindValue(':id', $this->id);
            $result->bindValue(':dniClient', $this->dniClient);
            $result->execute();
        } catch (PDOException $e) {
            return null;
        }

        if ($result) {
            return $this->getOneOrder($link);
        }
        return false;
    }

    static function getNewOrderId($link): ?int {
        try {
            $queryString = "SELECT max(id) FROM orders";
            $result = $link->prepare($queryString);
            $result->execute();
        } catch (PDOException $e) {
            return null;
        }
        
        $maxId = $result->fetch(PDO::FETCH_ASSOC)['max(id)'];
        if($maxId !== null) {
            return intval($maxId, 10) + 1;
        }
        return 0;
    }

    static function getAllOrder($link): ?array {
        try {
            $queryString = "SELECT * FROM orders";
            $result = $link->prepare($queryString);
            $result->execute();
        } catch (PDOException $e) {
            return null;
        }

        $orders = [];
        while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
            $order = new Order((int) $row['id'], $row['date'], $row['dni_client']);
            array_push($orders, $order);
        }
        return $orders;
    }

    function removeOrder($link): ?bool {
        try {
            $queryString = "DELETE FROM orders WHERE id=:id";
            $result = $link->prepare($queryString);
            $result->bindValue(':id', $this->id);
            $result->execute();
        } catch (PDOException $e) {
            return null;
        }

        if ($result) {
            return true;
        }
        return false;

    }
    
    function getOneOrder($link): ?Order {
        try {
            $queryString = "SELECT * FROM orders WHERE id=:id";
            $result = $link->prepare($queryString);
            $result->bindValue(':id', $this->id);
            $result->execute();
        } catch (PDOException $e) {
            return null;
        }

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
        try {
            $queryString = "UPDATE orders_lines SET quantity=:quantity, product_id=:productId WHERE order_id=:orderId AND line_id=:lineId";
            $result = $link->prepare($queryString);
            $result->bindValue(':orderId', $this->orderId);
            $result->bindValue(':lineId', $this->lineId);
            $result->bindValue(':productId', $this->productId);
            $result->bindValue(':quantity', $this->quantity);
            $result->execute();
        } catch (PDOException $e) {
            return null;
        }

        if ($result) {
            return new LineOfOrder((int) $this->orderId, (int) $this->lineId, (int) $this->productId, (int) $this->quantity);
        }
        return null;
    }

    function saveLineOrder($link): ?LineOfOrder {
        try {
            $queryString = "INSERT INTO orders_lines (line_id, quantity, order_id, product_id) VALUES (:lineId, :quantity, :orderId, :productId)";
            $result = $link->prepare($queryString);
            $result->bindValue(':orderId', $this->orderId);
            $result->bindValue(':lineId', $this->lineId);
            $result->bindValue(':productId', $this->productId);
            $result->bindValue(':quantity', $this->quantity);
            $result->execute();
        } catch (PDOException $e) {
            return null;
        }

        if ($result) {
            return new LineOfOrder((int) $this->orderId, (int) $this->lineId, (int) $this->productId, (int) $this->quantity);
        }
        return null;
    }

    function getNewLineId($link): ?int {
        try {
            $queryString = "SELECT max(line_id) FROM orders_lines WHERE order_id=:orderId";
            $result = $link->prepare($queryString);
            $result->bindValue(':orderId', $this->orderId);
            $result->execute();
        } catch (PDOException $e) {
            return null;
        }

        $maxLineId = $result->fetch(PDO::FETCH_ASSOC)['max(line_id)'];
        if ($maxLineId != null) {
            return intval($maxLineId, 10) + 1;
        }
        return 0;
    }

    function getOneLine($link): ?LineOfOrder {
        try {
            $queryString = "SELECT * FROM orders_lines WHERE order_id=:orderId AND line_id=:lineId";
            $result = $link->prepare($queryString);
            $result->bindValue(':orderId', $this->orderId);
            $result->bindValue(':lineId', $this->lineId);
            $result->execute();
        } catch (PDOException $e) {
            return null;
        }

        if ($row = $result->fetch(PDO::FETCH_ASSOC)) {
            return new LineOfOrder((int) $row['order_id'], (int) $row['line_id'], (int) $row['product_id'], (int) $row['quantity']);
        }
        return null;
    }

    function getAllLineOfOrder($link): ?array {
        try {
            $queryString = "SELECT * FROM orders_lines WHERE order_id=:orderId";
            $result = $link->prepare($queryString);
            $result->bindValue(':orderId', $this->orderId);
            $result->execute();
        } catch (PDOException $e) {
            return null;
        }

        $lines = [];
        while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
            $line = new LineOfOrder((int) $this->orderId, (int) $row['line_id'], (int) $row['product_id'], (int) $row['quantity']);
            array_push($lines, $line);
        }
        return $lines;
    }

    function removeLinesOfOrder($link): ?bool {
        try {
            $queryString = "DELETE FROM orders_lines WHERE order_id=:orderId";
            $result = $link->prepare($queryString);
            $result->bindValue(':orderId', $this->orderId);
            $result->execute();
        } catch (PDOException $e) {
            return null;
        }

        if ($result) {
            return true;
        }
        return false;
    }

    function removeLine($link): ?bool {
        try {            
            $queryString = "DELETE FROM orders_lines WHERE line_id=:lineId AND order_id=:orderId";
            $result = $link->prepare($queryString);
            $result->bindValue(':orderId', $this->orderId);
            $result->bindValue(':lineId', $this->lineId);
            $result->execute();
        } catch (PDOException $e) {
            return null;
        }

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

    function getNumberOfItemsByClient($link): ?int {
        try {
            $queryString = "SELECT count(*) FROM shopping_cart WHERE dni_client = :dniClient or temp_client_id = :tempClientId;";
            $result = $link->prepare($queryString);
            $result->bindValue(':dniClient', $this->dniClient);
            $result->bindValue(':tempClientId', $this->tempClientId);
            $result->execute();
        } catch (PDOException $e) {
            return null;
        }

        return $result->fetchColumn();
    }

    function addToCart($link): ?bool {
        try {
            $queryString = "INSERT INTO shopping_cart (date, dni_client, temp_client_id, product_id, quantity) VALUES ('$this->date', '$this->dniClient', '$this->tempClientId', $this->productId, $this->quantity)";
            $result = $link->query($queryString);
        } catch (PDOException $e) {
            return null;
        }

        if ($result) {
            return true;
        }
        return false;
    }

    function updateShoppingCartToLoggedClient($link): ?bool {
        try {
            $queryString = "UPDATE shopping_cart SET dni_client=:dniClient WHERE temp_client_id=:tempClientId";
            $result = $link->prepare($queryString);
            $result->bindValue(':dniClient', $this->dniClient);
            $result->bindValue(':tempClientId', $this->tempClientId);
            $result->execute();
        } catch (PDOException $e) {
            return null;
        }

        if ($result) {
            return true;
        }
        return false;
    }

    function getProductsOnShoppingCart($link): ?array {
        try {
            $queryString = "SELECT * FROM shopping_cart WHERE dni_client = :dniClient or temp_client_id = :tempClientId;";
            $result = $link->prepare($queryString);
            $result->bindValue(':dniClient', $this->dniClient);
            $result->bindValue(':tempClientId', $this->tempClientId);
            $result->execute();
        } catch (PDOException $e) {
            return null;
        }

        $productsOnCart = [];
        while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
            try {    
                $queryString = "SELECT * FROM products WHERE id=:productId";
                $resultProduct = $link->prepare($queryString);
                $resultProduct->bindValue(':productId', $row['product_id']);
                $resultProduct->execute();
            } catch (PDOException $e) {
                return null;
            }

            if ($rowProduct = $resultProduct->fetch(PDO::FETCH_ASSOC)) {
                $productOnCart = new ProductOnShoppingCart((int) $row['id'], (int) $rowProduct['id'], (int) $row['quantity'], $rowProduct['brand'], $rowProduct['name'], $rowProduct['description'], $rowProduct['image'], (float) $rowProduct['price']);
                array_push($productsOnCart, $productOnCart);
            }
        }

        return $productsOnCart;
    }

    function updateQuantityShoppingCart($link): ?bool {
        try {
            $queryString = "UPDATE shopping_cart SET quantity=:quantity, date=:date WHERE id=:id";
            $result = $link->prepare($queryString);
            $result->bindValue(':id', $this->id);
            $result->bindValue(':quantity', $this->quantity);
            $result->bindValue(':date', $this->date);
            $result->execute();
        } catch (PDOException $e) {
            return null;
        }
        
        if ($result) {
            return true;
        }
        return false;
    }

    function removeItemOnShoppingCart($link): ?bool {
        try {
            $queryString = "DELETE FROM shopping_cart WHERE id=:id";
            $result = $link->prepare($queryString);
            $result->bindValue(':id', $this->id);
            $result->execute();
        } catch (PDOException $e) {
            return null;
        }
        
        if ($result) {
            return true;
        }
        return false;
    }

    function deleteAllShoppingCartForClient($link): ?bool {
        try {
            $queryString = "DELETE FROM shopping_cart WHERE dni_client=:dniClient";
            $result = $link->prepare($queryString);
            $result->bindValue(':dniClient', $this->dniClient);
            $result->execute();
        } catch (PDOException $e) {
            return null;
        }
        
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
