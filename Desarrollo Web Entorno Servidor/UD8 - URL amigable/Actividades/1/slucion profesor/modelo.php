<?php

class Bd	
{
	private $link;
	function __construct()
	{
		if (!isset ($this->link)) {
			try{
				$this->link= new PDO("mysql:host=localhost;dbname=virtualmarket", "root", "");
				$this->link->exec("set names utf8mb4");
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
		private $nombre;
		private $direccion;
		private $email;
		private $pwd;

		static function getAll($link){
			try{
				$consulta="SELECT * FROM clientes";
				$result=$link->prepare($consulta);
				$result->execute();
				return $result;
			}
			catch(PDOException $e){
				$dato= "¡Error!: " . $e->getMessage() . "<br/>";
 				require "vista/mostrar.php";
 				die();
 			}
		}
		function __construct($dni, $nombre, $direccion,$email,$pwd){
			$this->dniCliente=$dni;
			$this->nombre=$nombre;
			$this->direccion=$direccion;
			$this->email=$email;
			$this->pwd=$pwd;
		}
		function __get($var){
		return $this->$var;
		}
		function buscar ($link){
			try{
				$consulta="SELECT * FROM clientes where dniCliente='$this->dniCliente'";
				$result=$link->prepare($consulta);
				$result->execute();
				return $result->fetch(PDO::FETCH_ASSOC);
			}
			catch(PDOException $e){
				$dato= "¡Error!: " . $e->getMessage() . "<br/>";
 				require "vista/mostrar.php";
 				die();
 			}
		}
		function insertar ($link){
			try{
				$consulta="INSERT INTO clientes VALUES (:dniCliente,:nombre,:direccion,:email,:pwd)";
				$result=$link->prepare($consulta);
				$result->bindParam(':dniCliente',$dniCliente);
				$result->bindParam(':nombre',$nombre);
				$result->bindParam(':direccion',$direccion);
				$result->bindParam(':email',$email);
				$result->bindParam(':pwd',$pwd);
				$dniCliente=$this->dniCliente;
				$nombre=$this->nombre;
				$direccion=$this->direccion;
				$email=$this->email;
				$pwd=$this->pwd;
				$result->execute();
				return $result;
			}
			catch(PDOException $e){
				$dato= "¡Error!: " . $e->getMessage() . "<br/>";
 				require "vista/mostrar.php";
 				die();
 			}
		}

		
		function modificar ($link){
			try{
				$consulta="UPDATE clientes SET nombre='$this->nombre',  direccion='$this->direccion',  email='$this->email', pwd='$this->pwd' WHERE dniCliente='$this->dniCliente'";
				$result=$link->prepare($consulta);
				return $result->execute();
			}
			catch(PDOException $e){
				$dato= "¡Error!: " . $e->getMessage() . "<br/>";
 				require "vista/mostrar.php";
 				die();
 			}
		}
		function modificarParcial ($link,$input){
			try{
				$fields = getParams($input);
				$consulta = "
          		UPDATE clientes
          		SET $fields
          		WHERE dniCliente='$this->dniCliente'";
          		$ver=$consulta;
          		$result=$link->prepare($consulta);
				bindAllValues($result,$input);
				$result->execute();
				return $result;
			}
			catch(PDOException $e){
				$dato= "¡Error!: " . $e->getMessage() . "<br/>";
 				require "vista/mostrar.php";
 				die();
 			}
		}
		function borrar ($link){
			try{
				$consulta="DELETE FROM clientes where dniCliente='$this->dniCliente'";
				$result=$link->prepare($consulta);
				return $result->execute();
			}
			catch(PDOException $e){
				$dato= "¡Error!: " . $e->getMessage() . "<br/>";
 				require "vista/mostrar.php";
 				die();
 			}
		}
}