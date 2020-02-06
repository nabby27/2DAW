<?php
require '../modelo.php';
require '../utils.php';

$db = new Bd();

if (!isset($_COOKIE['user_name'])) {
    header('Location: ../login');
} else {
    [$dni, $tempClientId] = getDniClientAndTempClientId();
    $soppingCartModel = new ShoppingCart('', '', $dni, $tempClientId, '', '');
    $products = $soppingCartModel->getProductsOnShoppingCart($db->link);
    
    $newId = Order::getNewOrderId($db->link);
    $date = date('Y-m-d H:i:s');
    
    $orderModel = new Order($newId, $date, $dni);
    $orderSaved = $orderModel->saveOrder($db->link);

    $lineOfOrderId = 0;
    foreach ($products as $product) {
        $lineOfOrderId++;
        $lineOforder = new LineOfOrder($orderSaved->id, $lineOfOrderId, $product->productId, $product->quantity);
        $lineOforder->saveLineOrder($db->link);
    }
    
    $soppingCartModel->deleteAllShoppingCartForClient($db->link);
    
    $html = getHtml($products);
    
    require '../views/resum.php';
}


function getHtml($products) {
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
    $html .=                    '<img src="/docs/4.4/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="">';
    $html .=                    'NBA T-shop';
    $html .=                '</a>';
    $html .=                '<div>';
    $html .=                    '<div>Bienvenido ' . $_COOKIE['user_name'] . '!</div>';
    $html .=                '</div>';
    $html .=            '</nav>';
    $html .=        '</header>';

    $html .=        '<section class="container-fluid">';
    $html .=            '<form class="m-5" action="../../shopping-cart" method="POST">';
    $html .=                '<div class="row m-2 d-flex justify-content-around">';
    $html .=                    '<a class="btn btn-primary" href="../../exit">Salir</a>';
    $html .=                '</div>';
    $html .=                '<div class="row">';
                                foreach ($products as $product) :
    $html .=                        '<div class="col-12 m-2">';
    $html .=                            '<article class="card">';
    $html .=                                '<div class="row">';
    $html .=                                    '<div class="col-md-4">';
    $html .=                                        '<img src="./img/' . $product->productImage . '>';
    $html .=                                    '</div>';
    $html .=                                    '<div class="col-md-8">';
    $html .=                                        '<div class="card-body row">';
    $html .=                                            '<h5 class="card-title col">' . $product->productName . '</h5>';
    $html .=                                            '<p class="card-text col">' . $product->productPrice .'&euro;</p>';
    $html .=                                            '<input class="form-control form-control-sm col-1" type="number" min="0" name="quantity[]" value="' . $product->quantity . '">';
    $html .=                                            '<input type="hidden" name="shoppinCartId[]" value="' . $product->shoppinCartId . '">';
    $html .=                                            '<input type="hidden" name="productId[]" value="' . $product->productId .'">';
    $html .=                                            '<a class="col text-dark d-flex justify-content-center align-items-center" href="../../shopping-cart/' . $product->shoppinCartId . '"><i class="fas fa-trash col d-flex justify-content-center align-items-center"></i></a>';
    $html .=                                        '</div>';
    $html .=                                    '</div>';
    $html .=                                '</div>';
    $html .=                            '</article>';
    $html .=                        '</div>';
                                endforeach;
    $html .=                '</div>';
    $html .=            '</form>';
    $html .=        '</section>';
    $html .=    '</body>';
    $html .='</html>';

    return $html;
}