<?php

include "utils.php";
include "modelo.php";

$base= new Bd();

/*
  listar todos los posts o solo uno
 */
if ($_SERVER['REQUEST_METHOD'] == 'GET')
{
    if (isset($_GET['dniCliente']))
    {
      //Mostrar un post
      $cli= new Cliente($_GET['dniCliente'],'','','','');
      $dato=$cli->buscar($base->link);
      header("HTTP/1.1 200 OK");
      echo json_encode($dato);
      exit();
	  }
    else {
      //Mostrar lista de post
      $dato=Cliente::getAll($base->link);
      $dato->setFetchMode(PDO::FETCH_ASSOC);
      header("HTTP/1.1 200 OK");
      echo json_encode($dato->fetchAll());
      exit();
	}
}

// Crear un nuevo post
if ($_SERVER['REQUEST_METHOD'] == 'POST')
{
    $cli= new Cliente($_POST['dniCliente'],$_POST['nombre'],$_POST['direccion'],$_POST['email'],$_POST['pwd']);
    if(!$cli->buscar($base->link)){
      $cli->insertar($base->link);
      header("HTTP/1.1 200 OK");
      echo json_encode($_POST['dniCliente']);
      exit();
	 }
}

//Borrar
if ($_SERVER['REQUEST_METHOD'] == 'DELETE')
{
	$dniCliente = $_GET['dniCliente'];
  $cli= new Cliente($dniCliente,'','','','');
  if($dato=$cli->borrar($base->link)){
	 header("HTTP/1.1 200 OK");
   echo json_encode($dniCliente);
	 exit();
  }
}

//Actualizar
if ($_SERVER['REQUEST_METHOD'] == 'PUT')
{

  if(isset($_GET['dniCliente'])){
    $input = $_GET;
    $fields = getParams($input);
    $nombre=NULL;
    $direccion=NULL;
    $email=NULL;
    $pwd=NULL;
    if(isset($_GET['nombre'])) $nombre=$_GET['nombre'];
    if(isset($_GET['direccion'])) $direccion=$_GET['direccion'];
    if(isset($_GET['email'])) $email=$_GET['email'];
    if(isset($_GET['pwd'])) $pwd=$_GET['pwd'];
    $cli= new Cliente($_GET['dniCliente'],$nombre,$direccion,$email,$pwd);
    $error=$cli->modificarParcial($base->link,$input);
    header("HTTP/1.1 200 OK");
    echo $_GET['dniCliente'];
    exit();
  }
}


//En caso de que ninguna de las opciones anteriores se haya ejecutado
header("HTTP/1.1 400 Bad Request");

?>
