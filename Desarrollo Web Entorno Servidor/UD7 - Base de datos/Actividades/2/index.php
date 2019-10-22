<?php

require 'modelos/Bd.php';
require 'modelos/Cliente.php';

$bd = new Bd();

$clientes = Cliente::getAll($bd->link);

require 'vistas/ver_clientes.php';

$clientes->free();
$bd->link->close();