<?php
require 'controllers/ShowController.php';

if (!isset($_GET['controller'])) {
    $showController = new ShowController();
    $showController->showClients();
}

if (isset($_GET['controller']) === 'create') {
    $createController = new CreateController();
    $createController->createClient();
}