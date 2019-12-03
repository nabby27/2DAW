<?php
try {
	$base= new PDO('mysql:host=localhost;dbname=virtualmarket', 'root', '');
	$result=$base->query('SELECT * from CLIENTES');
	while ($fila = $result->fetch(PDO::FETCH_ASSOC)){
       foreach($fila as $campo=>$valor){
		 echo "$campo : $valor <br>";
	   }
	   echo "<hr>";
    }
    $base = null;
} catch (PDOException $e) {
    print "¡Error!: " . $e->getMessage() . "<br/>";
    die();
}
?>