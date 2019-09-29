<?php
$countriesData = array(
    array('País' => 'Alemania', 'Capital' => 'Berlín', 'Extension' => 557046, 'Habitantes' => 78420000),
    array('País' => 'Austria', 'Capital' => 'Viena', 'Extension' => 83849, 'Habitantes' => 7614000),
    array('País' => 'Bélgica', 'Capital' => 'Bruselas', 'Extension' => 30518, 'Habitantes' => 9932000)
);

function paintTableHeader(array $countriesData) {
    foreach ($countriesData[0] as $field => $value) {
        echo "<th>$field</th>";
    }
}

function paintTableData(array $countriesData) {
    foreach ($countriesData as $countryData) {
        echo "<tr>";
        foreach ($countryData as $field => $value) {
            echo "<td>$value</td>";
        }
        echo "</tr>";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Table</title>
</head>
<body>
    <table style='width:100%;text-align:center'>
        <thead>
            <?php paintTableHeader($countriesData); ?>
        </thead>
    
        <?php paintTableData($countriesData); ?>
    </table>
</body>
</html>