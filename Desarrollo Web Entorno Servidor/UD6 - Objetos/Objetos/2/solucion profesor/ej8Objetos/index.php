<?php
include "vistas/inicio.html";
require "modelo.php";
if (isset($_POST['enviar'])) {
	if ($_POST['tipo']=="monitor") {
		echo "es un monitor";
		$objeto= new Monitor($_POST['peso'],$_POST['precio'],$_POST['stock'],$_POST['pulgadas']);
		# code...
	}else {
		$objeto= new Discoduro($_POST['peso'],$_POST['precio'],$_POST['stock'],$_POST['capacidad']);
	}

	$datos=$objeto->asignar();
	require "vistas/mostrar.php";
}else require "vistas/formulario.php";
include "vistas/fin.html";