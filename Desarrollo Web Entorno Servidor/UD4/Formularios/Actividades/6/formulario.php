<?php

$options = [];

function limpiar(string $text): string {
    return htmlspecialchars(trim($text));
}

function lista(string $name, array $options): string {
    $selectHTML = '<select name=' . $name . '>';
    foreach ($options as $key => $value) {

        $selectHTML .= '<option value=\'' . $value . '\'>' . $value . '</option>';
    }
    $selectHTML .= '</select>';

    return $selectHTML;
}

foreach ($_POST as $key => $value) {
    if ($value !== '' && $value != 'Enviar') {
        $options[$value] = limpiar($value);
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Subir foto</title>
</head>
<body>
    <form action="subir.php" method="post" enctype="multipart/form-data">
        <input type="file" name="file"><br><br>
        <?php echo lista('directorio', $options) ?><br><br>
    
        <input type="submit" value="Enviar">
    </form>
</body>
</html>
