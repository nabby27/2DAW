<?php
session_start();
require "modelo.php";
$base= new Base();
try{
	$base->link->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	$base->link->beginTransaction();
	$pedido= new Pedido($_SESSION['idPedido'],$_SESSION['fecha'], $_SESSION['dniCliente']);
	$pedido->insertar($base->link);
	$dato= Linea::insertarTodas($base->link);
	$base->link->commit();
}catch (Exception $e){
	$base->link->rollback();
	$dato="Fallo: ".$e->getMessage();	
}

$dato.="<br><a href=index.php> volver</a>";
require"vistas/mensaje.php";
