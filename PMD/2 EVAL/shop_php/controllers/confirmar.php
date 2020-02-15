<?php
require '../modelo.php';
require '../utils.php';

$db = new Bd();

if (!isset($_COOKIE['user_name'])) {
    header('Location: ../login');
} else {
    [$asiaTime, $asiaHour] = getAsiaHour();
    ((int) $asiaHour < 20) ? $sendToday = true : $sendToday = false;

    [$dni, $tempClientId] = getDniClientAndTempClientId();
    $products = saveOrder($db, $dni, $tempClientId);
    
    $clientModel = new Client($dni, '', '', '', '', false);
    $client = $clientModel->getOne($db->link);

    setcookie('productsToPdf', json_encode($products), time()+3600);
    $html = getHtml($client, $products, $asiaTime, $sendToday);
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

function getAsiaHour() {
    $url = 'http://worldtimeapi.org/api/timezone/Asia/Singapore';
    $options = array(
        'http' => array(
            'header'  => "Content-type: application/json\r\n",
            'method'  => 'GET',
        )
    );
    $context  = stream_context_create($options);
    $result = file_get_contents($url, false, $context);
    if ($result) {
        $dateResponse = date_create(json_decode($result)->datetime);
        $time = date_format($dateResponse, 'H:i:s');
        $hour = date_format($dateResponse, 'H');
        return [$time, $hour];
    }
}

function getHtml($client, $products, $asiaTime, $sendToday) {
    $sum = 0;
    $html  ='<!DOCTYPE html>';
    $html .='<html lang="en">';
    $html .=    '<head>';
    $html .=        '<meta charset="UTF-8">';
    $html .=        '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
    $html .=        '<meta http-equiv="X-UA-Compatible" content="ie=edge">';
    $html .=        '<title>T-Shop</title>';
    $html .=        '<link rel="icon" type="image/x-icon" href="../assets/img/logo_nba.ico">';
    $html .=        '<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>';
    $html .=        '<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>';
    $html .=        '<script src="https://kit.fontawesome.com/788922d05d.js" crossorigin="anonymous"></script>';
    $html .=        '<link rel="stylesheet" href="../lib/bootstrap/css/bootstrap.min.css">';
    $html .=        '<script src="../lib/bootstrap/js/bootstrap.min.js"></script>';
    $html .=        '<style>';
    $html .=            '.btn {transition: all 0.5s;}';
    $html .=            '.btn:hover {transform: scale(1.05);}';
    $html .=            '.btn:active {transform: scale(0.9);box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 5px 8px 0 rgba(0,0,0,.14), 0 1px 14px 0 rgba(0,0,0,.12);}';
    $html .=            '.btn-primary {background-color: #1D4289 !important; border-color: transparent !important; box-shadow: none  !important;}';
    $html .=            '.btn-secondary {background-color: #C80F2E !important; border-color: transparent !important; box-shadow: none  !important;}';
    $html .=            '.btn-info {background-color: #B542E2 !important;border-color: transparent !important; box-shadow: none  !important;}';
    $html .=            '.btn-dark {background-color: #303030 !important;border-color: transparent !important;box-shadow: none  !important;}';
    $html .=            '.btn-light {background-color: #FCFCFC !important;border-color: #000 !important;box-shadow: none  !important;}';
    $html .=            '.card {border-color: #C80F2E #C80F2E #1D4289 #1D4289 !important;border-width: 5px !important;transition: all 0.5s;}';
    $html .=            '.card:hover {border-color: #1D4289 #1D4289 #C80F2E #C80F2E !important;}';
    $html .=            '.card-container--sm {width: 10%;}';
    $html .=            '.card-container--lg {width: 40%;}';
    $html .=        '</style>';
    $html .=    '</head>';
    $html .=    '<body>';
    $html .=        '<header class="header">';
    $html .=            '<nav class="navbar navbar-light bg-light">';
    $html .=                '<a class="navbar-brand" href="../../shop">';
    $html .=                    '<img src="../assets/img/logo_nba.ico" width="60" height="60" class="d-inline-block align-top" alt="">';
    $html .=                    '<h1 style="display:inline">NBA T-shop</h1>';
    $html .=                '</a>';
    $html .=            '</nav>';
    $html .=        '</header>';

    $html .=        '<section class="container">';
    $html .=            '<h1 class="text-center">Compra realizada correctamente</h1>';
    $html .=            '<p class="text-center">En Singapore son las ' . $asiaTime . '</p>';
    $html .=            '<p class="text-center">Se enviará el pedido ' . (($sendToday) ? 'hoy': 'mañana') . ' a la dirección: ' . $client->address . '</p>';
    $html .=            '<div class="row m-2 d-flex justify-content-around">';
    $html .=                '<a class="btn btn-info" href="../pdf">Crear PDF</a>';
    $html .=                '<a class="btn btn-secondary" href="../logout">Salir</a>';
    $html .=            '</div>';
    $html .=            '<div class="row">';
                            foreach ($products as $product) :
                                $sum += ($product->productPrice * $product->quantity);
    $html .=                    '<div class="col-12 m-2">';
    $html .=                        '<article class="card">';
    $html .=                            '<div class="row">';
    $html .=                                '<div class="col-md-4 d-flex justify-content-center align-items-center">';
    $html .=                                    '<img class="img-fluid w-25" src="../assets/img/' . $product->productImage . '">';
    $html .=                                '</div>';
    $html .=                                '<div class="col-md-8">';
    $html .=                                    '<div class="card-body h-100 row d-flex align-items-center">';
    $html .=                                        '<div class="col-sm-12 col-md">Producto: ' . $product->productName . '</div>';
    $html .=                                        '<div class="col-sm-12 col-md">Precio unitario: ' . $product->productPrice .'&euro;</div>';
    $html .=                                        '<div class="col-sm-12 col-md">Cantidad: ' . $product->quantity . '</div>';
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
