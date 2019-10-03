<?php

$root_path_images = './img';

if (is_uploaded_file($_FILES['image']['tmp_name'])) {
    createPathIfNotExist();
    $image_name = getImageName();
    $image_path = $root_path_images . '/' . $image_name;
    move_uploaded_file($_FILES['image']['tmp_name'], $image_path);
    echo 'Subida realizada satisfactoriamente <br>';
}

echo '<a href="./index.html">ir al formulario</a>';

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
