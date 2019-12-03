<?php

if(isset($_POST['login'])) {
    setcookie('name', $_POST['name'], time() + 3600);
} else if (!isset($_POST['login']) && !isset($_COOKIE['name'])) {
    require 'form.php';
}

if(isset($_POST['login']) || isset($_COOKIE['name'])) {
    require 'wellcome.php';
}