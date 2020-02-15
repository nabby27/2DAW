<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    require '../../modelo.php';
    require '../../utils.php';
    $db = new Bd();

    $root_path_images = '../../assets/img/';

    $_POST = json_decode(file_get_contents('php://input'), FILE_USE_INCLUDE_PATH);

    $name = $_POST['name'];
    $description = $_POST['description'];
    $image = $_POST['image'];
    $brand = $_POST['brand'];
    $quantity = $_POST['quantity'];
    $price = $_POST['price'];

    $image_name = '';
    if (isset($_FILES['image'])) {
        if (is_uploaded_file($_FILES['image']['tmp_name'])) {
            createPathIfNotExist();
            $image_name = getImageName();
            $image_path = $root_path_images . '/' . $image_name;
            move_uploaded_file($_FILES['image']['tmp_name'], $image_path);
        }
    }

    $productModel = new Product(0, $name, $description, $image_name, $brand, (int) $quantity, (float) $price);
    $productCreated = $productModel->save($db->link);

    if ($productCreated) {
        http_response_code(201);
        echo json_encode($productCreated);
    } else {
        http_response_code(400);
        echo json_encode(['error' => ['message' => 'Failure adding product']]);
    }
}
