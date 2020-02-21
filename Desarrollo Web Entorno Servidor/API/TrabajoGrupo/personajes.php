<?php

    include 'navegador.php';
    
    require "utils.php";

    if(!isset($_GET['name'])){
        $characters = getAllCharacters();
    }else{
        $characters = getCharacterByName($_GET['name']);
    }

   echo "<table>";
    foreach($characters as $character){
        echo "<tr>"; 
            echo "<td><img style='width:50px;' src='".$character['img']."'></td>";
            echo "<td>".$character['name']."</td>";
            echo "<td>".$character['nickname']."</td>";
            echo "<td>".$character['portrayed']."</td>";
            echo "<td><a href='citas.php?name=".$character['name']."'>Frases</a></td>";
            echo "<td><a href='muertes.php?name=".$character['name']."'>Muertes atribuidas</a></td>";
        echo "</tr>";
    }
    echo "</table>";

?>