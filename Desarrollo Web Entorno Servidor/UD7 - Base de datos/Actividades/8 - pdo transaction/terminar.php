<?php
session_start();

require 'modelo.php';

$bd = new Bd();
$link = $bd->link;

Lineas::insertarTodas($link);

$html = '<table>';
    $html .= '<tr>';
        $html .= '<td>Pedido</td>';
        $html .= '<td>Nlinea</td>';
        $html .= '<td>Producto</td>';
        $html .= '<td>Cantidad</td>';
    $html .= '</tr>';

for ($index = 1; $index <= $_SESSION['numeroLineas']; $index++) {
    $html .= '<tr>';
    $html .= '<td>' . $_SESSION['idPedido'] . '</td>';
        $html .= '<td>' . $index . '</td>';
        $html .= '<td>' . $_SESSION['producto'][$index] . '</td>';
        $html .= '<td>' . $_SESSION['cantidad'][$index] . '</td>';
    $html .= '</tr>';
}

$html .= '</table>';
$html .= '<br>';

$html .= '<a href="index.php">Volver</a>';

require './vistas/fin.php';
