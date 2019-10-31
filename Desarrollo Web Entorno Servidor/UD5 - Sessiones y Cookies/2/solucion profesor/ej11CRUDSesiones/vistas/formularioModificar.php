<?php
echo "<form action='' method='post'>";
echo "dniCliente: ".$dato['dniCliente']."<br>";
echo "<input type='hidden' name='dniCliente' value='".$dato['dniCliente']."'>";
echo "nombre: <input type='text' name='nombre' value='".$dato['nombre']."'><br>";
echo "direccion: <input type='text' name='direccion' value='".$dato['direccion']."'><br>";
echo "email: <input type='text' name='email' value='".$dato['email']."'><br>";
echo "pwd: <input type='text' name='pwd' value='".$dato['pwd']."'>	<br>";
echo "<input type='submit' name='enviarModificar'><br>";
echo "</form>";
