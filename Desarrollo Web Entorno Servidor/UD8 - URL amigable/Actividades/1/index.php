<?php
require 'controllers/ClientController.php';
require 'entities/Client.php';
require 'models.php';

$clientController = new ClientController();

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    if (isset($_GET['dni'])) {
        $dni = $_GET['dni'];
        $client = $clientController->listOneClient($dni);
        echo json_encode($client);
    } else {
        $clients = $clientController->listAllClients();
        echo json_encode($clients);
    }
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $result = $clientController->createClient();
    echo json_encode($result);
}

if ($_SERVER['REQUEST_METHOD'] == 'PUT') {
    $dni = $_GET['dni'];
    $result = $clientController->updateClient($dni);
    echo json_encode($result);
}

if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {
    $dni = $_GET['dni'];
    $result = $clientController->deleteClient($dni);
    echo json_encode($result);
}
