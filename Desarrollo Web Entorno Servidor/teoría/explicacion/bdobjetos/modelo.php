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
}