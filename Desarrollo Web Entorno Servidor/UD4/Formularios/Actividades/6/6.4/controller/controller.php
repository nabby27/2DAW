<?php

include('functions.php');

if (!isset($_POST['sendOptions']) && !isset($_POST['sendFile']))
{
    include('../views/opciones.html');
}

if (isset($_POST['sendOptions'])) {
    $options = [];
    
    foreach ($_POST as $key => $value) {
        if ($value !== '' && $value != 'Enviar') {
            $options[$value] = limpiar($value);
        }
    }

    include('../views/formulario.php');
}

if (isset($_POST['sendFile'])) {
    if (is_uploaded_file($_FILES['file']['tmp_name'])) {
        crear_directorio($_POST['directorio']);
        $result = estado_archivo($_FILES['file']['name'], $_POST['directorio']);
        if ($result !== false) {
            move_uploaded_file($_FILES['file']['tmp_name'], $result);
        }
        else {
            include('../views/error.html');
        }
        
        include('../views/go_home.html');
    }
}
