<?php
require 'php/modelo.php';
session_start();

$db = new Bd();

if (isset($_SESSION['dni'])) {
    
    $orderModel = new Order('', '', '');
    $orderId = $orderModel->getNewOrderId($db->link);

    $orderToInsert = new Order($orderId, date('Y-m-d'), $_SESSION['dni']);

    $orderToInsert->saveOrder($db->link);

    for ($index = 0; $index < $_SESSION['total']; $index++) { 
        $lineOrder = new Carrito($orderId, $index+1, $_SESSION['product_id'][$index], $_SESSION['quantity'][$index]);
        $lineOrder->saveLineOrder($db->link);
    }
    $html = getHtml();
    require 'php/views/order.php';
    // session_destroy();
} else {
    header('Location: validar.php');
}

function getHtml() {
    $html =  "<!DOCTYPE html>";
    $html .=    "<html lang='en'>";
    $html .=    "<head>";
    $html .=        "<meta charset='UTF-8'>";
    $html .=        "<meta name='viewport' content='width=device-width, initial-scale=1.0'>";
    $html .=        "<meta http-equiv='X-UA-Compatible' content='ie=edge'>";            
    $html .=        "<link rel='stylesheet' href='./css/tienda.css'>";
    $html .=        "<title>Tienda</title>";
    $html .=    "</head>";

    $html .=    "<body>";
    $html .=        "<h3 class='order-success'>Su pedido se ha realizado correctamente</h3>";
                    
    $html .=        "<article class='line-order'>";
    $html .=            "<div class='line-order__item'>Product</div>";
    $html .=            "<div class='line-order__item'>Cantidad</div>";
    $html .=            "<div class='line-order__item'>Precio unitario</div>";
    $html .=            "<div class='line-order__item'>Importe</div>";
    $html .=        "</article>";
                    $totalImport = 0;
                    for ($index = 0; $index < $_SESSION['total']; $index++) {
                        $totalImport += $_SESSION['price'][$index] * $_SESSION['quantity'][$index];
                        if (intval($_SESSION['quantity'][$index]) > 0) {
                            $html .=                "<article class='line-order'>";
    $html .=                "<div class='line-order__item'>" . $_SESSION['product_name'][$index] . "</div>";
    $html .=                "<div class='line-order__item'>" . $_SESSION['quantity'][$index] . "</div>";
    $html .=                "<div class='line-order__item'>" . $_SESSION['price'][$index] . " &euro;</div>";
    $html .=                "<div class='line-order__item'>" . $_SESSION['price'][$index] * $_SESSION['quantity'][$index] . "</div>";
    $html .=                "</article>";
                        }
                    }
                
    $html .=        "<div class='total-import__container'>";
    $html .=            "<strong>Total: " . $totalImport . " &euro;</strong>";
    $html .=        "</div>";

    $html .=        "<div class='buttons-end__container'>";
    $html .=            "<a href='principal.php' class='button button--go-to'>Cerrar</a>";
    $html .=        "</div>";

    $html .=    "</body>";
    $html .= "</html>";
    
    return $html;
}