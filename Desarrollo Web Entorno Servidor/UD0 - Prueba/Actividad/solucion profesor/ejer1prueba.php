<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
<?php
	function fact ($n){
		$fact=1;
		for ($i=2; $i <=$n ; $i++) { 
		$fact*=$i;	
		}
		return $fact;
	}

	$n1=5;
	$n2=7;
	$n3=3;
	$max=$n1;

	if ($n2>$max) {
		$max=$n2;		
	}
	if ($n3>$max) {
		$max=$n3;		
	}
	echo "el número máximo es: $max <br>";
	
	$min=$n1;

	if ($n2<$min) {
		$min=$n2;		
	}
	if ($n3<$min) {
		$min=$n3;		
	}
	echo "el número Mínimo es: $min <br>";
	echo "el factorial de $n1 es:".fact($n1)."<br>";
	echo "el factorial de $n2 es:".fact($n2)."<br>";
	echo "el factorial de $n3 es:".fact($n3)."<br>";
?>
</body>
</html>