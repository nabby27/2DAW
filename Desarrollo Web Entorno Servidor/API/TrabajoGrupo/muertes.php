<?php

	include 'navegador.php';

	require 'utils.php';

	
	if(!isset($_GET['name'])){
		$muertes = getAllDeaths();
		echo "<h1>Personajes muertos en Breaking Bad</h1>";

		foreach ($muertes as $muerte){
			echo "<table>
					<tr>
						<td><strong>Character:</strong>".$muerte['death'] ."</td>
						<td><strong>Death cause:</strong> ".$muerte['cause']." </td>
						<td><strong>Last words:</strong> ".$muerte['last_words']." </td>
						<td><strong>Responsable:</strong> ".$muerte['responsible']."</td>
					</tr>
				</table>";
		}
    }else{
		$muertes = getDeathByName($_GET['name']);
		
		foreach ($muertes as $muerte) {
			echo "<h1>Personajes muertos por ". $muerte['name'] ."</h1>";
			echo "<h2>" . $muerte['deathCount'] . "</h2>";
		}
    }


?>