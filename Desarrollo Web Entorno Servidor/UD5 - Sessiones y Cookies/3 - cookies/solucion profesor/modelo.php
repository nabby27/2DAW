<?php

class Bd	
{
	private $link;
	function __construct()
	{
		if (!isset ($this->link)) {
			try{
				$this->link= new PDO("mysql:host=localhost;dbname=virtualmarket", "root", "");
			}
			catch(PDOException $e){
				$dato= "¡Error!: " . $e->getMessage() . "<br/>";
 				require "vista/mostrar.php";
 				die();
 			}
 		}
	}
		
	function __get($var){
		return $this->$var;
	}
}
class Cliente
{
		private $dniCliente;
		private $pwd;
		private $nombre;

		
		function __construct($dni, $pwd){
			$this->dniCliente=$dni;
			$this->pwd=$pwd;
		}
		function __get($var){
			return $this->$var;
		}
		function validar ($link){
			try{
				$consulta="SELECT * FROM clientes where dniCliente='$this->dniCliente'";
				$result=$link->prepare($consulta);
				$result->execute();
				$fila=$result->fetch(PDO::FETCH_ASSOC);
				$this->nombre=$fila['nombre'];
				return password_verify($this->pwd,$fila['pwd']);
			}
			catch(PDOException $e){
				$dato= "¡Error!: " . $e->getMessage() . "<br/>";
 				require "vista/mostrar.php";
 				die();
 			}
		}
		
}