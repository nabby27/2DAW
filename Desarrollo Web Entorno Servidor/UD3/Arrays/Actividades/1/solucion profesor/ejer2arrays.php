<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
<?php
$encabezado=array('País','Capital','Extensión','Habitantes');
$alemania=array('Alemania','Berlín','557046','78420000'); 
$austria=array('Austria','Viena','83849','7614000'); 
$belgica=array('Bélgica','Bruselas','30518','9932000');
echo "<table border='1'></tr>";
foreach ($encabezado as $value) {
	echo "<td>$value</td>";
}
echo "</tr><tr>";
foreach ($alemania as $value) {
	echo "<td>$value</td>";
}
echo "</tr><tr>";
foreach ($austria as $value) {
	echo "<td>$value</td>";
}
echo "</tr><tr>";
foreach ($austria as $value) {
	echo "<td>$value</td>";
}
echo "</tr></table>";

echo "fin primer ejercicio";
$dosdimensiones= array (array('País'=>'Alemania','Capital'=>'Berlín','Extensión'=>'557046','Habitantes'=>'78420000'),
 				array('País'=>'Austria','Capital'=>'Viena','Extensión'=>'83849','Habitantes'=>'7614000'),	 
 					array('País'=>'Bélgica','Capital'=>'Bruselas','Extensión'=>'30518','Habitantes'=>'9932000'));

echo "<table border='1'>";
$primera=True;
$linea1="<tr>";
$linea2="<tr>";
foreach ($dosdimensiones as $paises) {
	foreach ($paises as $key => $value) {
		if ($primera){
			$linea1.="<td>$key</td>";			
		}
		$linea2.="<td>$value</td>";
	}
	if ($primera){
			echo "$linea1</tr>";
			$primera=False;
		}
	echo "$linea2</tr>";
	$linea2="<tr>";
	
}

echo "</table>";
?>
</body>
</html>