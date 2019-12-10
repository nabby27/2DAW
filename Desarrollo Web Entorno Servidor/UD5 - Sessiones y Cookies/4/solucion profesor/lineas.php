<?php
require "modelo.php";
$base= new Base();
if (isset($_POST['continuar'])) {
	$numLinea=$_COOKIE['ultimaLinea']+1;
	$dato['ultimaLinea']=$numLinea;
	$dato['nlinea']=$_COOKIE['nlinea'];
	$dato['idProducto']=$_COOKIE['idProducto'];
	$dato['cantidad']=$_COOKIE['cantidad'];
	setcookie('ultimaLinea',$numLinea,time()+36000);
	$lin= new linea ($_COOKIE['idPedido'],$numLinea,$_POST['Producto'],$_POST['cantidad']);
	$lin->guardar();
	$dato['nlinea'][$numLinea]=$lin->nlinea;
	$dato['idProducto'][$numLinea]=$lin->idProducto;
	$dato['cantidad'][$numLinea]=$lin->cantidad;
}
require "funcion.php";
require "vistas/Vistalineas.php";

