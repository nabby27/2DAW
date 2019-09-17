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
        $num1 = 4;
        $num2 = 7;
        $num3 = 2;

        $max = $num1;

        if ($num2 > $max) {
            $max = $num2;
        }
        if ($num3 > $max) {
            $max = $num3;
        }

        echo $num1;
        echo $num2;
        echo $num3;
        echo "El número más grande es: $max";
    ?>
</body>
</html>