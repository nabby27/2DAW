<?php
function isFormsSent() {
    return isset($_GET['send']);
}

function isAnyFieldEmpty() {
    $isAnyFieldEmpty = false;
    foreach ($_GET as $key => $value) {
        if (empty($_GET[$key])) {
            $isAnyFieldEmpty = true;
        }
    }

    return $isAnyFieldEmpty;
}

function formatTextToEvitCodeInyection(string $text) {
    return htmlentities(
        htmlspecialchars(
            addslashes(
                strip_tags(
                    trim($text)
                )
            )
        )
    );
}

function checkError(string $field) {
    if ($_GET[$field] === '' && $_GET[$field] === '') {
        echo "<span style='color:red;'>$field is required</span><br>";
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Formulario</title>
</head>

<body>
    <?php
        if (!isFormsSent() || (isFormsSent() && isAnyFieldEmpty())) {
            if (isAnyFieldEmpty()) {
                echo "<span style='color:red'>Hay algún campo vacío</span><br><br>";
            }
    ?>
            <form action="" method="get">
                Name: <input type="text" name="name"><br>
                <?php checkError('name'); ?>
                Surname: <input type="text" name="surname"><br>
                <?php checkError('surname') ?>
                Address: <input type="text" name="address"><br>
                <?php checkError('address') ?>
                <input type="submit" name="send" value="Send"><br>
            </form>
    <?php
        } else {
            echo 'Procesando datos<br>';
            
            $datos = [];
            foreach ($_GET as $key => $value) {
                $datos[$key] = formatTextToEvitCodeInyection($value);
            }

            echo 'Datos guardados<br>';
        }
    ?>

</body>

</html>