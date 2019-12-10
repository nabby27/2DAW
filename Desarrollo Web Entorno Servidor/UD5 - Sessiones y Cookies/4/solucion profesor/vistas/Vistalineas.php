<?php
    echo "<table><tr><td>Pedido</td><td>Nlinea</td><td>producto</td><td>cantidad</td></tr>";
    if (isset($dato['ultimaLinea'])){
        for ($i=1; $i <= $dato['ultimaLinea']; $i++) { 
          echo "<tr><td>". $_COOKIE['idPedido']."</td><td>$i</td> <td>". $dato['idProducto'][$i] ."</td> <td> ". $dato['cantidad'][$i]."</td></tr>";
        }
    }else $i=1;
    echo "<br><form action='' method='post'>";
    echo "<tr><td>". $_COOKIE['idPedido']."</td><td>$i</td> <td>".lista($base->link, 'Producto', 'idProducto','nombre');
    echo "<td><input type='text' name='cantidad'></td>";
    echo "<td><input type='submit' name='continuar' value='continuar'><td></tr></form>";
    echo "</table><br><a href='terminar.php'> terminar</a>";

