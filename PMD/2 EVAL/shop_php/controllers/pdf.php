<?php

require_once '../lib/dompdf/autoload.inc.php';
use Dompdf\Dompdf;

if (isset($_COOKIE['productsToPdf'])) {
    $htmlToPDF = getHtmlToPDF(json_decode($_COOKIE['productsToPdf']));
    $dompdf = new Dompdf();
    $dompdf->loadHtml($htmlToPDF);
    $dompdf->render();
    $pdf = $dompdf->output(); 
    $dompdf->stream('factura_Tshop_' . date('Y-m-d') . '.pdf');
}

function getHtmlToPDF($products) {
    $sum = 0;
    $html = '<!DOCTYPE html>';
    $html .= '<html>';
    $html .= '<head>';
    $html .=     '<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>';
    $html .=     '<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>';
    $html .=     '<script src="https://kit.fontawesome.com/788922d05d.js" crossorigin="anonymous"></script>';
    $html .=     '<link rel="stylesheet" href="../lib/bootstrap/css/bootstrap.min.css">';
    $html .= '</head>';
    $html .= '<body>';
    $html .= '<h1 style="font-size: 50px">';
    $html .=    '<img src="../assets/img/logo_nba.png" style="margin-right:20px" width="60" height="60" class="d-inline-block align-top" alt="">T-shop';
    $html .= '</h1>';
    $html .= '<h6 style="font-size: 20px" class="mt-5 ml-3">';
    $html .=    'Factura de compra realizada el ' . $date = date('d/m/Y H:i');
    $html .= '</h6>';
    $html .= '<table class="table container mt-2">';
    $html .=    '<thead class="thead-dark">';
    $html .=        '<tr style:"width: 100%; height:50px;">';
    $html .=            '<th scope="col" style="text-align:center">Producto</th>';
    $html .=            '<th scope="col" style="text-align:center">Cantidad</th>';
    $html .=            '<th scope="col" style="text-align:center">Precio unitario</th>';
    $html .=        '</tr>';
    $html .=    '</thead>';
    $html .=    '<tbody>';
        foreach ($products as $product) :
            $sum += ($product->productPrice * $product->quantity);
            $html .='<tr style:"height:50px;">';
            $html .=    '<td style="text-align:center">' . $product->productName . '</td>';
            $html .=    '<td style="text-align:center">' . $product->quantity . '</td>';
            $html .=    '<td style="text-align:center">' . $product->productPrice . '&euro;</td>';
            $html .='</tr>';
        endforeach;
    $html .=        '<tr>';
    $html .=            '<td></td>';
    $html .=            '<td></td>';
    $html .=            '<td style="text-align:center;"><strong>Precio total: ' . $sum . '&euro;</strong></td>';
    $html .=        '</tr>';
    $html .=    '</tbody>';
    $html .= '</table>';
    $html .= '</body>';
    $html .= '</html>';

    return $html;
}
