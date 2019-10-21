<?php

function crear_directorio(string $dir) {
    if (!is_dir($dir)) {
        mkdir($dir);
    }
}

function estado_archivo(string $name, string $dir) {
    $nameAsArray = explode('.', $name);
    $extension = array_pop($nameAsArray);
    if (!in_array(strtolower($extension), ['jpg', 'jpeg', 'png', 'gif'])) {
        return false;
    }

    $image_name = $name;
    if (file_exists($dir . '/' . $image_name)) {
        $id = uniqid();
        $nameAsArray = explode('.', $name);
        $name = join('.', $nameAsArray);
        $image_name = $name . '-' . $id . '.' . $extension;
    }
    return $dir . '/' . $image_name;
}

if (is_uploaded_file($_FILES['file']['tmp_name'])) {
    crear_directorio($_POST['directorio']);
    $result = estado_archivo($_FILES['file']['name'], $_POST['directorio']);
    if ($result !== false) {
        move_uploaded_file($_FILES['file']['tmp_name'], $result);
    }
    else {
        echo "El tipo del archivo no era el correcto<br>";
    }

    echo "<a href='opciones.php'>inicio</a>";
}