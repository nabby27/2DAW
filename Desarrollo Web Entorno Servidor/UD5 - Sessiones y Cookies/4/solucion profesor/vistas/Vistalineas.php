<?php
    echo "<table><tr><td>Pedido</td><td>Nlinea</td><td>producto</td><td>cantidad</td></tr>";
    if (isset($_SESSION['linea'])){
        for ($i=1; $i <= $_SESSION['linea']; $i++) { 
          echo "<tr><td>". $_SESSION['idPedido']."</td><td>$i</td> <td>". $_SESSION['idProducto'][$i] ."</td> <td> ". $_SESSION['cantidad'][$i]."</td></tr>";
        }
    }
    echo "<br><form action='' method='post'>";
    echo "<tr><td>". $_SESSION['idPedido']."</td><td>$i</td> <td>".lista($base->link, 'Producto', 'idProducto','nombre');
    echo "<td><input type='text' name='cantidad'></td>";
    echo "<td><input type='submit' name='continuar' value='continuar'><td></tr></form>";
    echo "</table><br><a href='terminar.php'> terminar</a>";

