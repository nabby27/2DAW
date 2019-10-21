<?php

$formData = [];

function isFormsSent(): bool {
    
    return isset($_GET['send']);
}

function isAnyFieldEmpty(): bool {
    $isAnyFieldEmpty = false;
    foreach ($_GET as $key => $value) {
        if (empty($_GET[$key])) {
            $isAnyFieldEmpty = true;
        }
    }

    return $isAnyFieldEmpty;
}

function formatTextToEvitCodeInyection(string $text): string {
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
    if (array_key_exists($field, $_GET) && empty($_GET[$field])) {
        echo "<span style='color:red;'>$field is required</span><br>";
    }
}

function saveFormData() {
    global $formData;
    
    echo 'Procesando datos <br>';
    foreach ($_GET as $key => $value) {
        if ($key != 'send') {
            $formData[$key] = formatTextToEvitCodeInyection($value);
        }
    }
    echo 'Datos guardados <br>';
}

function getValue(string $field): string {
    if (array_key_exists($field, $_GET)) {
        return $_GET[$field];
    }

    return '';
}

function printFormData() {
    global $formData;

    foreach ($formData as $field => $value) {
        echo '<strong>' . $field . '</strong>: ' . $value . '<br>';
    }
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
                echo "<span style='color:red'>Hay algún campo vacío</span><br><br>";
            }
    ?>
            <form action="" method="get">
                Name: <input type="text" name="name" value="<?php echo getValue('name') ?>"><br>
                <?php checkError('name'); ?>
                Surname: <input type="text" name="surname" value="<?php echo getValue('surname') ?>"><br>
                <?php checkError('surname') ?>
                Address: <input type="text" name="address" value="<?php echo getValue('address') ?>"><br>
                <?php checkError('address') ?>
                <input type="submit" name="send" value="Send"><br>
            </form>
    <?php
        } else {
            saveFormData();
            printFormData();
        }
    ?>

</body>

</html>