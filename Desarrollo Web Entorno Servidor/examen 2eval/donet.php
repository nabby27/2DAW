<?php
/** Controlador Jugadores */

if (isset($_POST['insertarJugador'])) {
    require './icd.php';
    $db = new Base();
    $idJugador = $_POST['idJugador'];

    $opciones = array('http' =>
        array(
            'method'  => 'GET',
            'header'  => 'Content-type: application/json'
        )
    );
    $contexto = stream_context_create($opciones);
    if ($idJugador === '') {
        $modo = 0;
        $resultado = file_get_contents('http://localhost/cordobadonetivanfinal/ivan/todos', false, $contexto);
    } else {
        $modo = 1;
        $resultado = file_get_contents('http://localhost/cordobadonetivanfinal/ivan/' . $idJugador, false, $contexto);
    }
    $datos = json_decode($resultado);

    $partidaJugadoresModelo = new PartidaJugador();
    $partidaJugadoresModelo->insertarTodas($db->link, $datos, $modo);
    
    $idPartida = $_COOKIE['idPartida'];
    setcookie('idPartida', $idPartida, time() - 3600);

    require './vistas/jugadorInsertado.php';
} else {
    require './vistas/insertarJugador.php';
}
