<?php

require('../model/Image.php');
require('./functions.php');

if (!isset($_POST['sendOptions']) && !isset($_POST['sendFile']))
{
    require('../views/opciones.html');
}

if (isset($_POST['sendOptions'])) {
    $options = [];
    
    foreach ($_POST as $key => $value) {
        if ($value !== '' && $value != 'Enviar') {
            $options[$value] = limpiar($value);
        }
    }

    require('../views/formulario.php');
}

if (isset($_POST['sendFile'])) {
    $folder = crear_directorio($_POST['directorio']);
    $image = new Image($folder);
    if (!$image->upload()) {
        require('../views/error.html');    
    }
    require('../views/go_home.html');
}
