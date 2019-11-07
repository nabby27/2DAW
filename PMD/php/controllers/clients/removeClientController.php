<?php
require '../../modelo.php';

$db = new Bd();

if (isset($_POST)) {
    $dni = $_POST['dni'];

    $clientModel = new Client($dni, '', '', '', '', '');
    $result = $clientModel->remove($db->link);
    
    if ($result) {
        echo json_encode('SUCCESS');
    } else {
        echo json_encode('ERROR');
    }
}
