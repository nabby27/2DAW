<?php
/**
 * 
 */
class automovil 
{
	protected $matricula;
	protected $marca;
	function __construct($mat,$mar)	
	{
		$this->matricula=$mat;
		$this->marca=$mar;
	}
	function mostrar(){
		echo $this->matricula."<br/>";
		echo $this->marca."<br/>";
	}
}
/**
 * 
 */
class coche extends automovil
{
	private $puertas;
	function __construct($mat,$mar,$npuer)
	{
		parent::__construct($mat,$mar);
		$this->puertas=$npuer;
	}
}