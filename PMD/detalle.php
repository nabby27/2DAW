<?php
require 'php/modelo.php';
session_start();

$db = new Bd();

if (isset($_SESSION['dni'])) {
    
    require 'php/views/tienda.php';
} else {
    header('Location: validar.php');
}