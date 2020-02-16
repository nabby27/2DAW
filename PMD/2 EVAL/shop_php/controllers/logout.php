<?php

$paths = ['', '/', '/shop', '/detail', '/shopping-cart', '/confirm', '/pdf', '/login', '/sign-up', '/logout'];

if (isset($_SERVER['HTTP_COOKIE'])) {
    $cookies = explode(';', $_SERVER['HTTP_COOKIE']);
    foreach($cookies as $cookie) {
        $parts = explode('=', $cookie);
        $name = trim($parts[0]);
        foreach ($paths as $path) {
            setcookie($name, '', time()-1000, $path);
        }
    }
}

header('Location: ../shop');