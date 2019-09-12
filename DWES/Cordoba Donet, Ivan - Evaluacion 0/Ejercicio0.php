<?php

    $ej = new Ejercicio0();
    $ej->main();

    class Ejercicio0 {

        function main() {
            
            $num1 = 2;
            echo "num1: " . $num1;

            $num2 = 3;
            echo "<br>";
            echo "num2: " . $num2;

            $num3 = 4;
            echo "<br>";
            echo "num3: " . $num3;

        
            $min = $this->getMinNumber($num1, $num2, $num3);
            echo "<br>";
            echo "El minimo es: " . $min;

            $max = $this->getMaxNumber($num1, $num2, $num3);
            echo "<br>";
            echo "El maximo es: " . $max;

            $average = $this->getAverage($num1, $num2, $num3);
            echo "<br>";
            echo "La media es: " . $average;

            $this->factorial($num1);
            $this->factorial($num2);
            $this->factorial($num3);

        }

        function getMinNumber($num1, $num2, $num3) {
            if ($num1 <= $num2 && $num1 <= $num3) {
                $aux = $num1;
            } else if ($num2 <= $num1 && $num2 <= $num3) {
                $aux = $num2;
            } else {
                $aux = $num3;
            }

            return $aux;
        }

        function getMaxNumber($num1, $num2, $num3) {
            if ($num1 >= $num2 && $num1 >= $num3) {
                $aux = $num1;
            } else if ($num2 >= $num1 && $num2 >= $num3) {
                $aux = $num2;
            } else {
                $aux = $num3;
            }

            return $aux;
        }

        function getAverage ($num1, $num2, $num3) {
            $sum = $num1 + $num2 + $num3;
            return $sum/3;
        }

        function factorial($num) {
            if ($num > 0) {
                $result = 1;
        
                for($i = 1; $i <= $num; $i++) {
                    $result *= $i;
                }
        
                echo "<br>";
                echo "El factorial de " . $num . " es: " . $result;
            } else {
                echo "<br>";
                echo "No se puede calcular el factorial";
            }
        }
    }

?>
