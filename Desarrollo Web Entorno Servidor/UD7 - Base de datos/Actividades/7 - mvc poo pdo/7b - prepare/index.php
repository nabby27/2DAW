<?php
require 'controllers/ClientController.php';

$clientController = new ClientController();

if (isset($_GET['action']) && $_GET['action'] == 'create') {
    $clientController->createClient();
} elseif (isset($_GET['action']) && $_GET['action'] == 'update') {
    $dni = $_GET['dni'];
    $clientController->updateClient($dni);
} elseif (isset($_GET['action']) && $_GET['action'] == 'delete') {
    $dni = $_GET['dni'];
    $clientController->deleteClient($dni);
} else {
    $clientController->listAllClients();
}