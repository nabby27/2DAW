<?php

function icd($link, $tabla, $id_tabla, $columna_mostrar) {
    $queryString = "SELECT * FROM $tabla";
    $result = $link->query($queryString);

    
    $html = '<select name=' . $tabla . '>';
    while ($row = $result->fetch_assoc()) {
        $html .= '<option value=' . $row[$id_tabla] . '>' . $row[$columna_mostrar] . '</option>';
    }
    $html .= '</select>';

    return $html;
}