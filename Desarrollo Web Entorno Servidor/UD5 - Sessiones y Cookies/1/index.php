<?php

session_start();

if(isset($_POST['login']) || isset($_SESSION['name'])) {
    $_SESSION['name'] = $_POST['name'];
    require 'wellcome.php';
} else {
    require 'form.php';
}