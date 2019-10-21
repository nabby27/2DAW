<?php

include_once('functions.php');

$options = [];

foreach ($_POST as $key => $value) {
    if ($value !== '' && $value != 'Enviar') {
        $options[$value] = limpiar($value);
    }
}

include_once('../views/formulario.php');
?>