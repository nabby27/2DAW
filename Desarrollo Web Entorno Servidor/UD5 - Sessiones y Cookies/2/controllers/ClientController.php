<?php
require 'models/ClientModel.php';

class ClientController {
    
    private $clientModel;

    function __construct() {
        $this->clientModel = new ClientModel();
    }

    public function login() {
        if (isset($_POST['login'])) {
            $dni = $_POST['dni'];
            $password = $_POST['password'];

            $client = $this->clientModel->getOne($dni);
            if ($client != null && $password == $client->password) {
                $_SESSION['name'] = $client->name;
                header('Location: index.php');
            } else {
                require 'views/errorNotLogin.php';
            }
        } else {
            require 'views/login.php';
        }
    }

    public function listAllClients() {
        $clients = $this->clientModel->getAll();
        require 'views/listClientView.php';
    }

    public function createClient() {
        if (isset($_POST['create'])) {
            $dni = $_POST['dniClient'];
            $name = $_POST['name'];
            $address = $_POST['address'];
            $email = $_POST['email'];
            $password = $_POST['password'];

            $client = new Client($dni, $name, $address, $email, $password);
            $this->clientModel->create($client);
            header('Location: index.php');
        } else {
            require 'views/formCreateClientView.php';
        }
    }

    public function updateClient(string $dni) {
        if (isset($_POST['update'])) {
            $dni = $_POST['dni'];
            $name = $_POST['name'];
            $address = $_POST['address'];
            $email = $_POST['email'];
            $password = $_POST['password'];

            $client = new Client($dni, $name, $address, $email, $password);
            $this->clientModel->update($client);
            header('Location: index.php');
        } else {
            $client = $this->clientModel->getOne($dni);
            require 'views/formUpdateClientView.php';
        }
    }

    public function deleteClient(string $dni) {
        $client = $this->clientModel->delete($dni);
        header('Location: index.php');
    }

}