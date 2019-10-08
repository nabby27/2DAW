<?php
function limpiar ($txt){
	return trim(htmlspecialchars($txt));
}
function lista ($nombre,$opciones){
	$str="<select name='$nombre'>";
	foreach ($opciones as $value) {
		if (!empty($value)) $str.="<option value='$value'>$value</option>";
	}
	return $str.="</select>";
}
$ops[0]=limpiar($_POST['opcion1']);
$ops[1]=limpiar($_POST['opcion2']);
$ops[2]=limpiar($_POST['opcion3']);
$ops[3]=limpiar($_POST['opcion4']);
echo "<form action='subir.php' enctype='multipart/form-data' method='post'>";
echo "directorios: ".lista('directorio',$ops)."<br>";
echo "<input type='file' name='fichero'><br/>";
echo "<input type='submit' name='enviar'>";
echo "</form>";