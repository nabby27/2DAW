<?php
if (isset($_GET['op'])){
	setcookie('nombre','',-360000);
	header("Location:validar.php");
}else{
	require "modelo.php";
	if (isset($_COOKIE['nombre'])){
		$dato= "Ya está validado". $_COOKIE['nombre'];
		$dato.= "<br><a href='validar.php?op=salir'> salir </a>";
		require "vistas/mensaje.php";
	}else{
		if (isset($_POST['enviar'])){
			$base=new Bd();
			$cliente=new Cliente ($_POST['dni'],$_POST['pass']);
			if ($cliente->validar($base->link)){
				setcookie('nombre',$cliente->nombre,time()+360000);
				$dato="Los datos introducidos son correctos";
				$dato.= "<br><a href='validar.php'>volver</a>";
				require "vistas/mensaje.php";
			}else{
				$dato="Error en los datos";
				$dato.= "<br><a href='validar.php'>volver</a>";
				require "vistas/mensaje.php";
			}

		}else require ('vistas/formulario.php');
	}
}