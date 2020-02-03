<?php
include "../modelo.php";

$bd = new Bd();

header("HTTP/1.1 200 OK");

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    if (isset($_GET['dni'])) {
        $dni = $_GET['dni'];
        $clientModel = new Client($dni,'','','','', '');
        $client = $clientModel->getOne($bd->link);
        echo json_encode($client);
    } else {
        $clients = Client::getAll($bd->link);
        echo json_encode($clients);
    }
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    [$dni, $name, $address, $email, $password, $admin] = getDataFromBodyRequest();
    $clientModel = new Client($dni, $name, $address, $email, $password, $admin);
    $client = $clientModel->save($bd->link);

    echo json_encode($client);
}

if ($_SERVER['REQUEST_METHOD'] == 'PUT') {
    [$dni, $name, $address, $email, $password, $admin] = getDataFromBodyRequest();
    $clientModel = new Client($dni, $name, $address, $email, $password, $admin);
    $client = $clientModel->update($bd->link);

    echo json_encode($client);
}

if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {
    $dni = $_GET['dni'];
    $clientModel = new Client($dni, '', '', '', '', '');
    $clientModel->remove($bd->link);

    echo json_encode($client);
}

exit();

function getDataFromBodyRequest() {
    parse_str(file_get_contents('php://input'), $_POST);
    return [$_POST['dni'], $_POST['name'], $_POST['address'], $_POST['email'], $_POST['password'], $_POST['admin']];
}