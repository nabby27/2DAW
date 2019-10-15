<?php

function limpiar(string $text): string {
    return htmlspecialchars(trim($text));
}

function lista(string $name, array $options): string {
    $selectHTML = 'Directorio: <select name=' . $name . '>';
    foreach ($options as $key => $value) {
        $selectHTML .= '<option value=\'' . $value . '\'>' . $value . '</option>';
    }
    $selectHTML .= '</select>';

    return $selectHTML;
}

function crear_directorio(string $dir) {
    if (!is_dir('../' . $dir)) {
        mkdir('../' . $dir);
    }

    return '../' . $dir . '/';
}
