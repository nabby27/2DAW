<?php

$images = ['image1', 'image2'];

foreach ($images as $image) {
    uploadImages($image);
    sleep(1);
}

function uploadImages($image) {
    $root_path_images = './img';

    if (is_uploaded_file($_FILES[$image]['tmp_name'])) {
        if (!is_dir($root_path_images)) {
            mkdir('./img');
        }
        $image_name = generateUniqName();
        $image_path = $root_path_images . '/' . $image_name;
        move_uploaded_file($_FILES[$image]['tmp_name'], $image_path);
        
        echo 'Subida realizada satisfactoriamente <br>';
    }
}
echo '<a href="./index.html">ir al formulario</a>';

function generateUniqName() {
    $id = uniqid();
    $nameAsArray = explode('.', $_FILES['image']['name']);
    $extension = $nameAsArray[count($nameAsArray) - 1];
    unset($nameAsArray[count($nameAsArray) - 1]);
    $name = join('.', $nameAsArray);
    
    return $name . '-' . $id . '.' . $extension;
}
