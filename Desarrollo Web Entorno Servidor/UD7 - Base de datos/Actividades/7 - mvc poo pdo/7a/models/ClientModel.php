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
        $queryString = "SELECT * FROM clientes";
        $result = $this->bd->query($queryString);
        
        $clients = [];
        while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
            $client = new Client($row['dniCliente'], $row['nombre'], $row['direccion'], $row['email'], $row['pwd']);
            array_push($clients, $client);
        }

        return $clients;
    }

    function getOne(string $dni): ?Client {
        $queryString = "SELECT * FROM clientes WHERE dniCliente = '" . $dni . "'";
        $result = $this->bd->query($queryString);

        $client = null;
        if ($result->rowCount() > 0) {
            $result = $result->fetch(PDO::FETCH_OBJ);
            $client = new Client($result->dniCliente, $result->nombre, $result->direccion, $result->email, $result->pwd);
        } 

        return $client;
    }

    function create(Client $client) {
        $queryString = "INSERT INTO clientes (dniCliente, nombre, direccion, email, pwd) VALUES ('" . $client->dni . "', '" . $client->name . "', '" . $client->address . "', '" . $client->email . "', '" . $client->password . "')";
        $this->bd->query($queryString);
    }

    function update(Client $client) {
        $queryString = "UPDATE clientes SET nombre='" . $client->name . "', direccion='" . $client->address ."', email='" . $client->email . "', pwd='" . $client->password . "' WHERE dniCliente='" . $client->dni . "'";
        $this->bd->query($queryString);
    }

    function delete(string $dni) {
        $queryString = "DELETE FROM clientes WHERE dniCliente='" . $dni . "'";
        $this->bd->query($queryString);
    }
}