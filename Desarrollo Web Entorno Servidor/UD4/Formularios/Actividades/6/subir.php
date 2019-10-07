<?php

function crear_directorio(string $dir) {
    if (!is_dir($dir)) {
        mkdir($dir);
    }
}

function estado_archivo(string $name, string $dir) {
    if (!in_array(exif_imagetype($name), [IMAGETYPE_GIF, IMAGETYPE_JPEG, IMAGETYPE_PNG])) {
        return false;
    }

    $image_name = $_FILES['file']['name'];
    if (file_exists($dir . '/' . $image_name)) {
        $id = uniqid();
        $nameAsArray = explode('.', $_FILES['file']['name']);
        $extension = array_pop($nameAsArray);
        $name = join('.', $nameAsArray);
        $image_name = $name . '-' . $id . '.' . $extension;
    }
    return $dir . '/' . $image_name;
}

if (is_uploaded_file($_FILES['file']['tmp_name'])) {
    crear_directorio($_POST['directorio']);
    $result = estado_archivo($_FILES['file']['tmp_name'], $_POST['directorio']);
    if ($result !== false) {
        move_uploaded_file($_FILES['file']['tmp_name'], $result);
    }
    else {
        echo "El tipo del archivo no era el correcto<br>";
    }

    echo "<a href='opciones.php'>inicio</a>";
}