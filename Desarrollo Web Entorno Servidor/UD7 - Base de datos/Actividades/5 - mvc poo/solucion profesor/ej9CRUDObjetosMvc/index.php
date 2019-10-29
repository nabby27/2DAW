<?php
include "vistas/inicio.html";
require "modelo.php";
$base= new Bd();
$dato=Cliente::getAll($base->link);
require "vistas/verTabla.php";
