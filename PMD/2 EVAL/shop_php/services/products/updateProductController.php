<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    require '../../modelo.php';
    require '../../utils.php';
    $db = new Bd();

    $root_path_images = '../../../assets/img/';
    
    $_PUT = json_decode(file_get_contents('php://input'), FILE_USE_INCLUDE_PATH);

    $id = $_GET['id'];
    $name = $_PUT['name'];
    $description = $_PUT['description'];
    $image = $_PUT['image'];
    $brand = $_PUT['brand'];
    $quantity = $_PUT['quantity'];
    $price = $_PUT['price'];

    $image_name = '';
    if (isset($_FILES['image'])) {
        if (is_uploaded_file($_FILES['image']['tmp_name'])) {
            createPathIfNotExist();
            $image_name = getImageName();
            $image_path = $root_path_images . '/' . $image_name;
            move_uploaded_file($_FILES['image']['tmp_name'], $image_path);
        }
    }

    $productModel = new Product($id, $name, $description, $image_name, $brand, $quantity, $price);
    $productUpdated = $productModel->update($db->link);
    
    if ($productUpdated) {
        http_response_code(201);
        echo json_encode($productUpdated);
    } else {
        http_response_code(400);
        echo json_encode(['error' => ['message' => 'Failure updating product with id = ' . $id]]);
    }
}
