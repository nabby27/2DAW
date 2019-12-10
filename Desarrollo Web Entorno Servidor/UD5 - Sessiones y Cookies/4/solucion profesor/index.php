<?php
require "modelo.php";
$base= new Base();
if (isset($_POST['enviar'])) {
	$ped= new Pedido ($_POST['idPedido'],$_POST['fecha'],$_POST['Cliente']);
	if (!$ped->existe($base->link)) {
		setcookie('ultimaLinea',0,time()+36000);
		$ped->guardar();
		header('Location:lineas.php');
	} else {
		$dato="Error: ya existe este pedido <br/>";
		require "vistas/mensaje.php";
	}
}else{
	require "funcion.php";
	require "vistas/pedido.php";
}