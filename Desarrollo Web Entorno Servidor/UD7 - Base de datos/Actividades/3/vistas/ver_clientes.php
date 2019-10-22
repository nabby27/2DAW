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
        while ($fila = $clientes->fetch_assoc()) {
            echo 'Nombre: ' . $fila['nombre'] . '<br>';
        }
    ?>

</body>
</html>
