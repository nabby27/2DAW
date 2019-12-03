<?php

function lista ($link,$tabla, $nomid, $mostrar){
    $consulta=$tabla::getall($link);
    $string= "<select name='$tabla'>";
    while($fila=$consulta->fetch(PDO::FETCH_ASSOC)){
       $string.= "<option value='".$fila[$nomid]."'>".$fila[$mostrar]."</option>";
    }
    $string.= "</select>";
  
    return $string;
}
