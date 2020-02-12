<?php
require '../modelo.php';
require '../utils.php';

$db = new Bd();

if (!isset($_COOKIE['user_name'])) {
    header('Location: ../login');
} else {
    [$dni, $tempClientId] = getDniClientAndTempClientId();
    $products = saveOrder($db, $dni, $tempClientId);
    
    setcookie('productsToPdf', json_encode($products), time()+3600);
    $html = getHtml($products);
    require '../views/resum.php';
}

function saveOrder($db, $dni, $tempClientId) {
    $soppingCartModel = new ShoppingCart(0, '', $dni, $tempClientId, 0, 0);
    $products = $soppingCartModel->getProductsOnShoppingCart($db->link);
    
    $newId = Order::getNewOrderId($db->link);
    $date = date('Y-m-d H:i:s');
    
    $orderModel = new Order((int) $newId, $date, $dni);
    $orderSaved = $orderModel->saveOrder($db->link);

    $lineOfOrderId = 0;
    foreach ($products as $product) {
        $lineOfOrderId++;
        $lineOforder = new LineOfOrder((int) $orderSaved->id, (int) $lineOfOrderId, (int) $product->productId, (int) $product->quantity);
        $lineOforder->saveLineOrder($db->link);
    }
    
    $soppingCartModel->deleteAllShoppingCartForClient($db->link);
    
    return $products;
}

function getHtml($products) {
    $sum = 0;
    $html  ='<!DOCTYPE html>';
    $html .='<html lang="en">';
    $html .=    '<head>';
    $html .=        '<meta charset="UTF-8">';
    $html .=        '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
    $html .=        '<meta http-equiv="X-UA-Compatible" content="ie=edge">';
    $html .=        '<title>T-Shop</title>';
    $html .=        '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">';
    $html .=        '<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>';
    $html .=        '<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>';
    $html .=        '<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>';
    $html .=        '<script src="https://kit.fontawesome.com/788922d05d.js" crossorigin="anonymous"></script>';
    $html .=    '</head>';
    $html .=    '<body>';
    $html .=        '<header class="header">';
    $html .=            '<nav class="navbar navbar-light bg-light">';
    $html .=                '<a class="navbar-brand" href="../../shop">';
    $html .=                    '<img src="../img/logo_nba.ico" width="30" height="30" class="d-inline-block align-top" alt="">';
    $html .=                    'NBA T-shop';
    $html .=                '</a>';
    $html .=                '<div>';
    $html .=                    '<div>Bienvenido ' . $_COOKIE['user_name'] . '!</div>';
    $html .=                '</div>';
    $html .=            '</nav>';
    $html .=        '</header>';

    $html .=        '<section class="container">';
    $html .=            '<h1 class="text-center">Compra realizada correctamente</h1>';
    $html .=            '<div class="row m-2 d-flex justify-content-around">';
    $html .=                '<a class="btn btn-primary" href="../pdf">Crear PDF</a>';
    $html .=                '<a class="btn btn-primary" href="../logout">Salir</a>';
    $html .=            '</div>';
    $html .=            '<div class="row">';
                            foreach ($products as $product) :
                                $sum += ($product->productPrice * $product->quantity);
    $html .=                    '<div class="col-12 m-2">';
    $html .=                        '<article class="card">';
    $html .=                            '<div class="row">';
    $html .=                                '<div class="col-md-4 d-flex justify-content-center align-items-center">';
    $html .=                                    '<img class="img-fluid w-25" src="../img/' . $product->productImage . '">';
    $html .=                                '</div>';
    $html .=                                '<div class="col-md-8">';
    $html .=                                    '<div class="card-body h-100 row d-flex align-items-center">';
    $html .=                                        '<div class="col">Producto: ' . $product->productName . '</div>';
    $html .=                                        '<div class="col">Precio unitario: ' . $product->productPrice .'&euro;</div>';
    $html .=                                        '<div class="col">Cantidad: ' . $product->quantity . '</div>';
    $html .=                                    '</div>';
    $html .=                                '</div>';
    $html .=                            '</div>';
    $html .=                        '</article>';
    $html .=                    '</div>';
                            endforeach;
    $html .=            '</div>';
    $html .=            '<div class="d-flex justify-content-end>';
    $html .=                'El total es: ' . $sum . '&euro;';
    $html .=            '</div>';
    $html .=        '</section>';
    $html .=    '</body>';
    $html .='</html>';

    return $html;
}
