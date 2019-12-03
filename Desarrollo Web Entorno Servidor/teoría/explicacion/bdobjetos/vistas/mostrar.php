<?php
while ($fila=$datos->fetch_assoc()){
		echo "nombre: ".$fila['nombre']."<br>";
	}