<?php

$array = array(
    1 => array('País' => 'Alemania', 'Capital' => 'Berlín', 'Extension' => 557046, 'Habitantes' => 78420000),
    2 => array('País' => 'Austria', 'Capital' => 'Viena', 'Extension' => 83849, 'Habitantes' => 7614000),
    3 => array('País' => 'Bélgica', 'Capital' => 'Bruselas', 'Extension' => 30518, 'Habitantes' => 9932000)
);

echo "<table style='width:100%;text-align:center'>";

echo "<thead>";
foreach ($array[1] as $key => $value) {
    echo "<th>$key</th>";
}
echo "</thead>";

foreach ($array as $pais => $datos) {
    echo "<tr>";
    foreach ($datos as $key => $value) {
        echo "<td>$value</td>";
    }
    echo "</tr>";
}

echo "</table>";