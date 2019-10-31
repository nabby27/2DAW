<?php
session_start();
include "vistas/inicio.html";
if (isset($_SESSION['nombre'])){
	require "modelo.php";
	$link=new Bd;
	$cli= new Cliente($_GET['dni'],'','','','');
	$dato=$cli->buscar($link->link);
	require "vistas/verDetalle.php";
	$dato="<a href='index.php'>Volver</a>";
	require "vistas/mensaje.php";
	$link->link->close();
}else {
	$dato="Es necesario estar registrado<br>";
	$dato.="<a href='index.php'> Volver </a>";
	require "vistas/mensaje.php";
}
include "vistas/fin.html";