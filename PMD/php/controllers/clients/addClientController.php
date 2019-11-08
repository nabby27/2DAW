<?php
require '../../modelo.php';

$db = new Bd();

if (isset($_POST)) {
    $dni = $_POST['dni'];
    $name = $_POST['name'];
    $address = $_POST['address'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $admin = (isset($_POST['admin']) && $_POST['admin']) === 'on' ? true : false;
    
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    $clientModel = new Client($dni, $name, $address, $email, $hashed_password, $admin);
    $result = $clientModel->save($db->link);
    
    if ($result) {
        echo json_encode('SUCCESS');
    } else {
        echo json_encode('ERROR');
    }
}
