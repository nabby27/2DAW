<?php
    $info = array(
        'Nombre' => 'Mi empresa',
        'NIF' => '654564987564',
        'Domicilio' => 'Valencia',
        'CP' => '12345',
        'Poblacion' => 'Valencia'
    );

    function paintInfo(array $info) {
        foreach ($info as $key => $value) {
            echo "<tr><th>$key</th><td>$value</td></tr>";
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
    <table>
        <?php paintInfo($info); ?>
    </table>
</body>
</html>
