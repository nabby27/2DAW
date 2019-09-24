<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Form</title>
</head>
<body>
    <table border=1>
    <?php
    foreach ($_GET as $key => $value) {
        echo "<tr><th>$key</th><td>$value</td></tr>";
    }
    ?>
    </table>
</body>
</html>
