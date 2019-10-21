<?php
/**
 * 
 */
class imagen 
{
	private $name;
	private $tmpName;
	private $tipo;

	function __get ($var){
		return $this->$var;
	}
	
	function __construct($nombre,$tmp,$type)
	{
	$this->name=$nombre;
	$this->tmpName=$tmp;
	$this->tipo=$type;
	}

	function estaCargado()
	{
		return is_uploaded_file($this->tmpName);
	}

	function cambiarNombre($dir){
		if(!$nom=estado_archivo ($this->name, $dir)){
			return False;
		}else {
			$this->name=$nom;
			return True;}
	}

	function mover(){
		move_uploaded_file($this->tmpName, $this->name);
	}

}