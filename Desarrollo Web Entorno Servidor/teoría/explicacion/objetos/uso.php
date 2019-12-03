<?php
require 'modelo.php';
$coche= new automovil('3456 avc','ferrari');
$coche->mostrar();
$ford= new coche ('2345 JKL','FORD',3);
$ford->mostrar();