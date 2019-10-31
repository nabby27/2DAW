<?php
echo "<table><tr><td> Dni </td><td> Nombre </td><td>  </td><td>  </td><td><a href='insertar.php'>Nuevo</a>  </td> </tr>";
while($fila=$dato->fetch_assoc()){
	echo "<tr><td>".$fila['dniCliente']."</td><td>".$fila['nombre']."</td>";
	echo "<td><a href='modificar.php?dni=".$fila['dniCliente']."'>modificar</a></td>";
	echo "<td><a href='borrar.php?dni=".$fila['dniCliente']."'>borrar</a></td>";
	echo "<td><a href='detalle.php?dni=".$fila['dniCliente']."'>detalle</a></td></tr>";
}
echo "</table>";