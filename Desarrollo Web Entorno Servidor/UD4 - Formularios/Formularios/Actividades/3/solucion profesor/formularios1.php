<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
<?php
$error=False;
if (isset($_GET['enviar'])) {
	if (empty($_GET['nombre'])||empty($_GET['apellidos'])||empty($_GET['domicilio'])){
		ECHO "Hay un error";
		$error=True;
	}
	
	else{
		foreach ($_GET as $key => $value) {
			$vector[$key]=$value;
			echo "$key : ".$vector[$key]."<br>";}
		}
	}
	
if (!isset($_GET['enviar']) || $error){	
	echo "<form action='' >";
	echo "Nombre: <input type='text' name='nombre'><br>";
	echo "apellidos: <input type='text' name='apellidos'><br>";
	echo "domicilio: <input type='text' name='domicilio'><br>";
	echo "<input type='submit' name='enviar'><br>";
	echo "</form>";	}	?>
</body>
</html>