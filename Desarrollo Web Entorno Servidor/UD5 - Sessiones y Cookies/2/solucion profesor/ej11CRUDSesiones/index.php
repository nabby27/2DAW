<?php
session_start();
include "vistas/inicio.html";
require "modelo.php";	
$base= new Bd();
if (!isset($_SESSION['nombre'])){
	if (isset($_POST['enviarPass'])){
		
		$cli= new Cliente($_POST['dni'],'','','',$_POST['pass']);
		if($nom=$cli->autenticar($base->link)){
			$_SESSION['nombre']=$nom['nombre'];
		} else {
			$dato="el usuario o la contraseña es incorrecta<br>";
			$dato.="<a href='index.php'> Volver </a>";
			require "vistas/mensaje.php";
		}
	} else require "vistas/validacion.php";
	}
if (isset($_SESSION['nombre'])){
	$dato= "Bienvenido ".$_SESSION['nombre'];
	require "vistas/mensaje.php";
	$dato=Cliente::getAll($base->link);
	require "vistas/verTabla.php";
}

$base->link->close();