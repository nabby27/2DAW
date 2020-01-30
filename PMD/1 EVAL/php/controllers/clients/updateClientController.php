<?php
require '../../modelo.php';

$db = new Bd();

if (isset($_POST)) {
    $dni = $_POST['dni'];
    $name = $_POST['name'];
    $address = $_POST['address'];
    $email = $_POST['email'];
    $admin = (isset($_POST['admin']) && $_POST['admin'] === 'on') ? true : false;

    $clientModel = new Client($dni, $name, $address, $email, '', $admin);
    $result = $clientModel->update($db->link);
    
    if ($result) {
        echo json_encode('SUCCESS');
    } else {
        echo json_encode('ERROR');
    }
}
