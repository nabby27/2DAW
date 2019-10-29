<?php

class Bd	
{
	private $link;
	function __construct()
	{
		if (!isset ($this->link)) {
			$this->link= new mysqli('localhost', 'root', '', 'virtualmarket');
			if ( $this->link->connect_errno ){ 
			$dato= "Fallo al conectar a MySQL: ". $link->connect_error; 
 			require "vista/mostrar.php";
			}else $this->link->set_charset('utf-8'); 
		}
	}
	function __get($var){
		return $this->$var;
	}
}
class Cliente
{
		private $dniCliente;
		private $nombre;
		private $direccion;
		private $email;
		private $pwd;

		static function getAll($link){
			$consulta="SELECT * FROM clientes";
			return $result=$link->query($consulta);
		}
		function __construct($dni, $nombre, $direccion,$email,$pwd){
			$this->dniCliente=$dni;
			$this->nombre=$nombre;
			$this->direccion=$direccion;
			$this->email=$email;
			$this->pwd=$pwd;
		}
		function buscar ($link){
			$consulta="SELECT * FROM clientes where dniCliente='$this->dniCliente'";
			$result=$link->query($consulta);
			return $result->fetch_assoc();
		}
		function insertar ($link){
			$consulta="INSERT INTO clientes VALUES ('$this->dniCliente','$this->nombre','$this->direccion','$this->email','$this->pwd')";
			return $link->query($consulta);
		}
		function modificar ($link){
			$consulta="UPDATE clientes SET nombre='$this->nombre',  direccion='$this->direccion',  email='$this->email', pwd='$this->pwd' WHERE dniCliente='$this->dniCliente'";
			return $link->query($consulta);
		}
		function borrar ($link){
			$consulta="DELETE FROM clientes where dniCliente='$this->dniCliente'";
			return $link->query($consulta);
		}
}