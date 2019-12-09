<?php

function getSelect($dataArray, $name, $value, $text) {

    $html = '<select name=' . $name . '>';
    foreach ($dataArray as $data) {
        $html .= '<option value=' . $data->$value . '>' . $data->$text . '</option>';
    }
    $html .= '</select>';

    return $html;
}