<?php
require 'models/Bd.php';
require 'entities/Client.php';

class ClientModel {

    private $bd;

    function __construct() {
        $bd = new Bd();
        $this->bd = $bd->link;
    }

    function __destruct() {
        $this->bd = null;
    }

    function getAll() {
        try {
            $queryString = "SELECT * FROM clientes";
            $result = $this->bd->prepare($queryString);
            $result->execute();
        } catch (PDOException $e) {
            echo "¡Error!: " . $e->getMessage() . "<br/>";
            die();
        }
        
        $clients = [];
        while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
            $client = new Client($row['dniCliente'], $row['nombre'], $row['direccion'], $row['email'], $row['pwd']);
            array_push($clients, $client);
        }

        return $clients;
    }

    function getOne(string $dni): ?Client {
        try {
            $queryString = "SELECT * FROM clientes WHERE dniCliente = :dni";
            $result = $this->bd->prepare($queryString);
            $result->bindParam(':dni', $dni);
            $result->execute();
        } catch (PDOException $e) {
            echo "¡Error!: " . $e->getMessage() . "<br/>";
            die();
        }

        $client = null;
        if ($result->rowCount() > 0) {
            $obj = $result->fetch(PDO::FETCH_OBJ);
            $client = new Client($obj->dniCliente, $obj->nombre, $obj->direccion, $obj->email, $obj->pwd);
        }
        return $client;
    }

    function create(Client $client) {
        try {
            $queryString = "INSERT INTO clientes (dniCliente, nombre, direccion, email, pwd) VALUES (:dni, :name, :address, :email, :password)";
            $result = $this->bd->prepare($queryString);
            $result->bindParam(':dni', $client->dni);
            $result->bindParam(':name', $client->name);
            $result->bindParam(':address', $client->address);
            $result->bindParam(':email', $client->email);
            $result->bindParam(':password', $client->password);
            $result->execute();
        } catch (PDOException $e) {
            echo "¡Error!: " . $e->getMessage() . "<br/>";
            die();
        }
    }

    function update(Client $client) {
        try {
            $queryString = "UPDATE clientes SET nombre=:name, direccion=:address, email=:email, pwd=:password WHERE dniCliente=:dni";
            $result = $this->bd->prepare($queryString);
            $result->bindParam(':name', $client->name);
            $result->bindParam(':address', $client->address);
            $result->bindParam(':email', $client->email);
            $result->bindParam(':password', $client->password);
            $result->bindParam(':dni', $client->dni);
            $result->execute();
        } catch (PDOException $e) {
            echo "¡Error!: " . $e->getMessage() . "<br/>";
            die();
        }
    }

    function delete(string $dni) {
        try {
            $queryString = "DELETE FROM clientes WHERE dniCliente=:dni";
            $result = $this->bd->prepare($queryString);
            $result->bindParam(':dni', $dni);
            $result->execute();
        } catch (PDOException $e) {
            echo "¡Error!: " . $e->getMessage() . "<br/>";
            die();
        }
    }
}