<?php
require '../../modelo.php';

$db = new Bd();

if (isset($_GET)) {
    $result = Client::getAll($db->link);

    if ($result) {
        echo json_encode($result);
    } else {
        echo json_encode('ERROR');
    }
}