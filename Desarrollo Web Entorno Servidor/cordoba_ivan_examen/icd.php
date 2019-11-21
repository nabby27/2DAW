<?php
require './ivan.php';
require './cordoba.php';

$bd = new Conexion();
$pantalla = new Pantalla();

if (isset($_POST['enviar'])) {
    $idAlquiler = $_POST['idAlquiler'];
    $pelicula = $_POST['peliculas'];
    $cliente = $_POST['clientes'];
    $empleado = $_POST['empleados'];

    $alquiler = new Alquileres($idAlquiler, $pelicula, $cliente, $empleado);

    if ($alquiler->existe($bd->link)) {
        $pantalla->cuerpo = '<a href="">Volver a intentarlo</a><br>';
        $pantalla->pie = 'Ya existe un alquiler con este Id';
    } else {
        $alquiler->insertar($bd->link);
        $pantalla->cuerpo = '<a href="">Volver a intentarlo</a><br>';
        $pantalla->pie = 'El registro se ha insertado correctamente';
    }
} else {
    require './donet.php';

    $cuerpo_html = '<form action="" method="POST">';
        $cuerpo_html .= 'IdAlquiler: <input type="text" name="idAlquiler"><br>';
        $cuerpo_html .= 'peliculas:' . icd($bd->link, 'peliculas', 'IdPelicula', 'Titulo') . '<br>';
        $cuerpo_html .= 'clientes:' . icd($bd->link, 'clientes', 'IdCliente', 'Nombre') . '<br>';
        $cuerpo_html .= 'empleados:' . icd($bd->link, 'empleados', 'IdEmpleado', 'Nombre') . '<br>';
        $cuerpo_html .= '<button type="submit" name="enviar">Enviar</button>';
    $cuerpo_html .= '</form>';
    
    $pantalla->cuerpo = $cuerpo_html;
    $pantalla->pie = 'Rellene el formulario';
}

$pantalla->mostrar();