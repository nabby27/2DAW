<?php
require "modelo.php";
$base= new Bd();
$datos=Cliente::getAll($base->link);
require "vistas/mostrar.php";
$datos->free();
$base->link->close(); 
