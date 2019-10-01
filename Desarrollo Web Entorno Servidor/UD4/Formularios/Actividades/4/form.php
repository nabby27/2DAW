<?php

$root_path_images = './img';

if (is_uploaded_file($_FILES['image']['tmp_name'])) {
    if (!is_dir($root_path_images)) {
        mkdir('./img');
    }
    $id = time();
    $image_name = $id . '-' . $_FILES['image']['name'];
    $image_path = $root_path_images . '/' . $image_name;
    move_uploaded_file($_FILES['image']['tmp_name'], $image_path);
    
    echo 'Subida realizada satisfactoriamente <br>';
}

echo '<a href="./index.html">ir al formulario</a>';