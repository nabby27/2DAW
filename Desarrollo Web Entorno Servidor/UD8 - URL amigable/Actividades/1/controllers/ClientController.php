<?php


class ClientController {
    
    private $clientModel;

    function __construct() {
        $this->clientModel = new ClientModel();
    }

    public function listOneClient(string $dni) {
        $client = $this->clientModel->getOne($dni);
        return $client;
    }

    public function listAllClients() {
        $clients = $this->clientModel->getAll();
        return $clients;
    }

    public function createClient() {
        parse_str(file_get_contents('php://input'), $_POST);
        $dni = $_POST['dni'];
        $name = $_POST['name'];
        $address = $_POST['address'];
        $email = $_POST['email'];
        $password = $_POST['password'];

        $client = new Client($dni, $name, $address, $email, $password);
        $this->clientModel->create($client);
        return $client;
    }

    public function updateClient(string $dni) {
        parse_str(file_get_contents('php://input'), $_POST);
        $dni = $_POST['dni'];
        $name = $_POST['name'];
        $address = $_POST['address'];
        $email = $_POST['email'];
        $password = $_POST['password'];

        $client = new Client($dni, $name, $address, $email, $password);
        $this->clientModel->update($client);
        return $client;
    }

    public function deleteClient(string $dni) {
        $result = $this->clientModel->delete($dni);
        return $result;
    }

}