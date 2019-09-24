<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    
<?php
$array = array(
    'Nombre' => 'Mi empresa',
    'NIF' => '654564987564',
    'Domicilio' => 'Valencia',
    'CP' => '12345',
    'Poblacion' => 'Valencia'
);

echo "<table>";

foreach ($array as $key => $value) {
    echo "<tr><th>$key</th><td>$value</td></tr>";
}

echo "</table>";
?>

</body>
</html>