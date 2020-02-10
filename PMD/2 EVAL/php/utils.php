<?php

function getDniClientAndTempClientId() {
    $dni = null;
    $tempClientId = null;

    if (isset($_COOKIE['user_name'])) {
        $dni = $_COOKIE['dni'];
    }

    $tempClientId = (isset($_COOKIE['tempClientId'])) ? $_COOKIE['tempClientId'] : time() . '-' . uniqid();
    setcookie('tempClientId', $tempClientId, time() + 60*60*24*30); // one month

    return [$dni, $tempClientId];
}

function createPathIfNotExist() {
    global $root_path_images;

    if (!is_dir($root_path_images)) {
        mkdir($root_path_images);
    }
}

function getImageName() {
    global $root_path_images;

    $image_name = $_FILES['image']['name'];
    if (file_exists($root_path_images . '/' . $image_name)) {
        $image_name = generateUniqName();
    }

    return $image_name;
}

function generateUniqName() {
    $id = uniqid();
    $nameAsArray = explode('.', $_FILES['image']['name']);
    $extension = array_pop($nameAsArray);
    $name = join('.', $nameAsArray);

    return $name . '-' . $id . '.' . $extension;
}