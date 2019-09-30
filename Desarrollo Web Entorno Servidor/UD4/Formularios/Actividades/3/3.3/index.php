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
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Form</title>
</head>

<body>
    <?php
        if (!isFormsSent() || (isFormsSent() && isAnyFieldEmpty())) {
            if (isAnyFieldEmpty()) {
                echo 'Hay algún campo vacío<br>';
            }
    ?>

            <form action="" method="get">
                Name: <input type="text" name="name"><br>
                Surname: <input type="text" name="surname"><br>
                Address: <input type="text" name="address"><br>
                <input type="submit" name="send" value="Send"><br>
            </form>

    <?php
        } else {
            echo 'Procesando datos<br>';
            
            $datos = [];
            foreach ($_GET as $key => $value) {
                $datos[$key] = $value;
            }

            echo 'Datos guardados';
        }
    ?>

</body>

</html>