<?php

$options = [];

function limpiar(string $text): string {
    return htmlspecialchars(trim($text));
}

function lista(string $name, array $options): string {
    $selectHTML = '<select name=' . $name . '>';
    foreach ($options as $key => $value) {
        $selectHTML .= '<option value=\'' . $value . '\'>' . $value . '</option>';
    }
    $selectHTML .= '</select>';

    return $selectHTML;
}

foreach ($_POST as $key => $value) {
    if ($value !== '' && $value != 'Enviar') {
        $options[$value] = limpiar($value);
    }
}

include_once('../views/formulario.php');
?>