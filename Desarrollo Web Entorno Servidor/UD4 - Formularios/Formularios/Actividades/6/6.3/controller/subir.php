<?php

include_once('functions.php');

if (is_uploaded_file($_FILES['file']['tmp_name'])) {
    crear_directorio($_POST['directorio']);
    $result = estado_archivo($_FILES['file']['name'], $_POST['directorio']);
    if ($result !== false) {
        move_uploaded_file($_FILES['file']['tmp_name'], $result);
    }
    else {
        echo "El tipo del archivo no era el correcto<br>";
    }

    echo "<a href='../views/opciones.html'>inicio</a>";
}