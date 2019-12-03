<?php
session_start();
require "modelo.php";
$base= new Base();
if (isset($_POST['continuar'])) {
	$_SESSION['linea']++;
	$lin= new linea ($_SESSION['idPedido'],$_SESSION['linea'],$_POST['Producto'],$_POST['cantidad']);
	$lin->guardar();
	
}
require "funcion.php";
require "vistas/Vistalineas.php";

