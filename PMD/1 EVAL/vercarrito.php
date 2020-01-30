<?php
require 'php/modelo.php';
session_start();

$db = new Bd();

if (isset($_SESSION['dni'])) {
    if (isset($_POST['id'])) {
        if ($_POST['quantity'] > 0) {
            $_SESSION['product_id'][$_SESSION['total']] = $_POST['id'];
            $_SESSION['product_name'][$_SESSION['total']] = $_POST['name'];
            $_SESSION['price'][$_SESSION['total']] = $_POST['price'];
            $_SESSION['quantity'][$_SESSION['total']] = $_POST['quantity'];
    
            $_SESSION['total']++;
        }
    } elseif (isset($_POST['update'])) {
        foreach ($_POST['index'] as $index) {
            if ($_POST['quantity'][$index] == 0) {
                array_splice($_SESSION['product_id'], $index, 1);
                array_splice($_SESSION['product_name'], $index, 1);
                array_splice($_SESSION['price'], $index, 1);
                array_splice($_SESSION['quantity'], $index, 1);
                
                $_SESSION['total']--;
            } else {
                $_SESSION['quantity'][$index] = $_POST['quantity'][$index];
            }
        }
    }
    require 'php/views/cart.php';
} else {
    header('Location: validar.php');
}
