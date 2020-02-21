<?php

    include 'navegador.php';
    
    require "utils.php";

    if(!isset($_GET['name'])){
        $citas = getAllQuotes();
    }else{
        $citas = getQuoteByName($_GET['name']);
    }

   echo "<table>";
    foreach($citas as $cita){
        echo "<tr>"; 
            echo "<td>".$cita['quote']."</td>";
            echo "<td>".$cita['author']."</td>";
            echo "<td><a href='personajes.php?name=".$cita['author']."'>Personaje</a></td>";
        echo "</tr>";
    }
    echo "</table>";

?>