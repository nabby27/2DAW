<?php
/**
 * 
 */
class Producto 
{
	protected $peso;
	protected $precio;
	protected $stock;
	function __construct($pe,$pre,$sto)
	{
		$this->peso=$pe;
		$this->precio=$pre;
		$this->stock=$sto;	# code...
	}
	function asignar(){
		foreach ($this as $key => $value) {

			$array[$key]=$value;
		}
		return $array;
	}
}
/**
 * 
 */
class Monitor extends Producto
{
	private $pulgadas;
	function __construct($pe,$pre,$sto,$pul)
	{
		parent::__construct($pe,$pre,$sto);
		$this->pulgadas=$pul;
	}
	function asignar(){
		$array=parent::asignar();
		 $array['pulgadas']=$this->pulgadas;
		 return $array;

	}
}
class Discoduro extends Producto
{
	private $capacidad;
	function __construct($pe,$pre,$sto,$cap)
	{
		parent::__construct($pe,$pre,$sto);
		$this->capacidad=$cap;
	}
	function asignar(){
		$array=parent::asignar();
		$array['capacidad']=$this->capacidad;
		return $array;

	}
}