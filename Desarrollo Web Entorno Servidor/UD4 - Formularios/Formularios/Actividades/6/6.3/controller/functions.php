<?php

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

function crear_directorio(string $dir) {
    if (!is_dir('../' . $dir)) {
        mkdir('../' . $dir);
    }
}

function estado_archivo(string $name, string $dir) {
    $nameAsArray = explode('.', $name);
    $extension = array_pop($nameAsArray);
    if (!in_array(strtolower($extension), ['jpg', 'jpeg', 'png', 'gif'])) {
        return false;
    }

    $image_name = $name;
    if (file_exists('../' . $dir . '/' . $image_name)) {
        $id = uniqid();
        $nameAsArray = explode('.', $name);
        $name = join('.', $nameAsArray);
        $image_name = $name . '-' . $id . '.' . $extension;
    }
    return '../' . $dir . '/' . $image_name;
}
