<?php
function crear_directorio ($dir){
	if(!is_dir($dir)) mkdir($dir);
}
function estado_archivo ($nombre, $directorio){
	$partes=explode('.', $nombre);
	$extension=array_pop($partes);
	if ((strtoupper($extension)=='GIF') || (strtoupper($extension)=='PNG') || (strtoupper($extension)=='JPG')) {
		$nombre=implode('.', $partes);
		if(is_file($directorio.'/'.$nombre.".".$extension)){
			$idUnico=uniqid();		
			$nombre.="_".$idUnico.".".$extension;
		}else $nombre.=".".$extension;
		return $directorio.'/'.$nombre;
	}else return False;

}

$nombre=$_FILES['fichero']['name'];
if (is_uploaded_file($_FILES['fichero']['tmp_name'])){

		$dir=$_POST['directorio'];
		crear_directorio($dir);
		if ($nombre=estado_archivo($nombre,$dir)){
		move_uploaded_file($_FILES['fichero']['tmp_name'], $nombre);
		echo "el fichero $nombre se ha subido correctamente";}
		else echo "el archivo no es de extensión correcta";
	
}else 
	echo "no se ha podido subir el fichero";
echo "<a href='opciones.php'> volver a inicio </a>";