<?php
require 'models/Bd.php';
require 'entities/Client.php';

class ClientModel {

    private $link;

    function __construct() {
        $bd = new Bd();
        $this->link = $bd->link;
    }

    function __destruct() {
        $this->link->close();
    }

    function getAll() {
        $queryString = "SELECT * FROM clientes";
        $result = $this->link->query($queryString);
        
        $clients = [];
        while ($row = $result->fetch_assoc()) {
            $client = new Client($row['dniCliente'], $row['nombre'], $row['direccion'], $row['email'], $row['pwd']);
            array_push($clients, $client);
        }

        return $clients;
    }

    function getOne(string $dni): ?Client {
        $queryString = "SELECT * FROM clientes WHERE dniCliente = '" . $dni . "'";
        $result = $this->link->query($queryString);
        
        $client = null;
        if ($result->num_rows > 0) {
            $result = $result->fetch_object();
            $client = new Client($result->dniCliente, $result->nombre, $result->direccion, $result->email, $result->pwd);
        } 

        return $client;
    }

    function create(Client $client) {
        $queryString = "INSERT INTO clientes (dniCliente, nombre, direccion, email, pwd) VALUES ('" . $client->dni . "', '" . $client->name . "', '" . $client->address . "', '" . $client->email . "', '" . $client->password . "')";
        $this->link->query($queryString);
    }

    function update(Client $client) {
        $queryString = "UPDATE clientes SET nombre='" . $client->name . "', direccion='" . $client->dni ."', email='" . $client->email . "', pwd='" . $client->password . "' WHERE dniCliente='" . $client->dni . "'";
        $this->link->query($queryString);
    }

    function delete(string $dni) {
        $queryString = "DELETE FROM clientes WHERE dniCliente='" . $dni . "'";
        $this->link->query($queryString);
    }
}