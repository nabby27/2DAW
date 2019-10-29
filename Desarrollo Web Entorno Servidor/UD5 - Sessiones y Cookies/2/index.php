<?php
require 'controllers/ClientController.php';

$clientController = new ClientController();

if (isset($_SESSION['name'])) {
    if (isset($_GET['action']) && $_GET['action'] == 'create') {
        $clientController->createClient();
    } elseif (isset($_GET['action']) && $_GET['action'] == 'update') {
        $dni = $_GET['dni'];
        $clientController->updateClient($dni);
    } elseif (isset($_GET['action']) && $_GET['action'] == 'delete') {
        $dni = $_GET['dni'];
        $clientController->deleteClient($dni);
    } elseif (isset($_GET['action']) && $_GET['action'] == 'logout') {
        session_destroy();
        header('Location: index.php');
    } else {
        $clientController->listAllClients();
    }
} else {
    $clientController->login();
}