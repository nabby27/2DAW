<?php
include "vistas/inicio.html";
require "modelo.php";
if (isset($_POST['busqueda'])) {
	$link=new Bd;
	$cli= new Cliente($_POST['dniCliente'],'','','','');
	
	if ($dato=$cli->buscar($link->link)){
		require "vistas/formularioModificar.php";
	}else {	$dato="El cliente no existe";
			$dato.="<a href='modificar.php'>Volver</a>";
			require "vistas/mensaje.php";
	}
	$link->link->close();
}elseif (isset($_POST['enviarModificar'])) {
	$link=new Bd;
	$cli= new Cliente($_POST['dniCliente'],$_POST['nombre'],$_POST['direccion'],$_POST['email'],$_POST['pwd']);
		if($cli->modificar($link->link)){
			$dato="El cliente se ha modificado correctamente";
			$dato.="<a href='modificar.php'>Volver</a>";
			require "vistas/mensaje.php";
		} else {
			$dato="ERROR AL MODIFICAR";
			$dato.="<a href='modificar.php'>Volver</a>";
			require "vistas/mensaje.php";
		}
	}
	else require "vistas/formularioBusqueda.php";
include "vistas/fin.html";