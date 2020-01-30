<?php
require '../../modelo.php';

$db = new Bd();

if (isset($_GET)) {
    $dni = $_GET['dni'];

    $clientModel = new Client($dni, '', '', '', '', '');
    $result = $clientModel->getOne($db->link);

    if ($result) {
        echo json_encode($result);
    } else {
        echo json_encode('ERROR');
    }
}