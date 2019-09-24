<?php
$array = array(
    array('País' => 'Alemania', 'Capital' => 'Berlín', 'Extension' => 557046, 'Habitantes' => 78420000),
    array('País' => 'Austria', 'Capital' => 'Viena', 'Extension' => 83849, 'Habitantes' => 7614000),
    array('País' => 'Bélgica', 'Capital' => 'Bruselas', 'Extension' => 30518, 'Habitantes' => 9932000)
);

echo "<table style='width:100%;text-align:center'>";

echo "<thead>";
foreach ($array[0] as $key => $value) {
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