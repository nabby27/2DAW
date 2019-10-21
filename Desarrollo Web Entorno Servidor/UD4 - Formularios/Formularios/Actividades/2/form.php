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
    $numbers = new Numbers();
    $numbers->printNumbers($_GET);
    echo "<br>";
    echo "Minimum: " . $numbers->getMinNumber($_GET) . "<br>";
    echo "Maximum: " . $numbers->getMaxNumber($_GET) . "<br>";
    echo "Average: " . $numbers->getAverage($_GET) . "<br>";
    echo "<br>";
    foreach ($_GET as $key => $value) {
        $numbers->factorial($value);
    }
    ?>
</body>
</html>

<?php
class Numbers {

    function printNumbers($nums) {
        foreach ($nums as $key => $value) {
            echo "Number -> " . $value . "<br>";
        }
    }

    function getMinNumber($nums) {
        $min = $_GET['one'];
        foreach ($nums as $key => $value) {
            if ($value < $min) {
                $min = $value;
            }
        }

        return $min;
    }

    function getMaxNumber($nums) {
        $max = $_GET['one'];
        foreach ($nums as $key => $value) {
            if ($value > $max) {
                $max = $value;
            }
        }

        return $max;
    }

    function getAverage ($nums) {
        $sum = 0;
        foreach ($nums as $key => $value) {
            $sum += $value;
        }

        return $sum/count($nums);
    }

    function factorial($num) {
        if ($num > 0) {
            $result = 1;
    
            for($i = 1; $i <= $num; $i++) {
                $result *= $i;
            }
    
            echo "Factorial of " . $num . ": " . $result;
            echo "<br>";
        } else {
            echo "<br>";
            echo "Can't calculate the factorial";
        }
    }
}