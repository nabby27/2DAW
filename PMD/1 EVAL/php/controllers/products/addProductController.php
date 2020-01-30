<?php
require '../../modelo.php';

$db = new Bd();
$root_path_images = '../../../img/';

if (isset($_POST)) {
    $id = $_POST['id'];
    $name = $_POST['name'];
    $brand = $_POST['brand'];
    $quantity = $_POST['quantity'];
    $price = $_POST['price'];

    $image_name = '';
    if (is_uploaded_file($_FILES['photo']['tmp_name'])) {
        createPathIfNotExist();
        $image_name = getImageName();
        $image_path = $root_path_images . '/' . $image_name;
        move_uploaded_file($_FILES['photo']['tmp_name'], $image_path);
    }

    $productModel = new Product($id, $name, $image_name, $brand, $quantity, $price);
    $result = $productModel->save($db->link);
    
    if ($result) {
        echo json_encode($result);
    } else {
        echo json_encode('ERROR');
    }
}


function createPathIfNotExist() {
    global $root_path_images;

    if (!is_dir($root_path_images)) {
        mkdir($root_path_images);
    }
}

function getImageName() {
    global $root_path_images;

    $image_name = $_FILES['photo']['name'];
    if (file_exists($root_path_images . '/' . $image_name)) {
        $image_name = generateUniqName();
    }

    return $image_name;
}

function generateUniqName() {
    $id = uniqid();
    $nameAsArray = explode('.', $_FILES['photo']['name']);
    $extension = array_pop($nameAsArray);
    $name = join('.', $nameAsArray);

    return $name . '-' . $id . '.' . $extension;
}