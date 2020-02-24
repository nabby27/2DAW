<?php
/** Controlador Partida */

if (isset($_POST['insertarPartida'])) {
    require './icd.php';
    $db = new Base();
    $titulo = $_POST['titulo'];
    $partidaModelo = new Partida($titulo);
    $partidaModelo->insertar($db->link);

    $idPartida = $partidaModelo->maximo($db->link);
    setcookie('idPartida', $idPartida, time() + 3600);

    require './vistas/partidaInsertada.php';
} else {
    require './vistas/insertarPartida.php';
}
