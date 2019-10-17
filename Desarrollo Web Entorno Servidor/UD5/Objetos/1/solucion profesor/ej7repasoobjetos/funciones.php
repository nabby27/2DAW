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