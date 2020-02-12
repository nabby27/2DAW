<?php

require_once '../assets/dompdf/autoload.inc.php';
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
    $html .= '<body>';
    $html .= '<h1 style="text-align:center">T-shop</h1>';
    $html .= '<table style="width:100%; margin-top:100px;">';
    foreach ($products as $product) :
        $sum += ($product->productPrice * $product->quantity);
        $html .='<tr style="width:100%; border-bottom:5px solid black;">';
        $html .=    '<td style="text-align:center">Cantidad: <strong>' . $product->quantity . '</strong></td>';
        $html .=    '<td style="text-align:center">Producto: <strong>' . $product->productName . '</strong></td>';
        $html .=    '<td style="text-align:center">Precio: <strong>' . $product->productPrice . '&euro;</strong></td>';
        $html .='</tr>';
    endforeach;
    $html .='<tr style="width:100%; height:300px;">';
    $html .=    '<td></td>';
    $html .=    '<td></td>';
    $html .=    '<td style="text-align:end;">Total: <strong>' . $sum . '&euro;</strong></td>';
    $html .='</tr>';
    $html .= '</table>';
    $html .= '</body>';
    $html .= '</html>';

    return $html;
}
