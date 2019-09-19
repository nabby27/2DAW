<?php

    $ej = new Ejercicio0();
    $ej->main();

    class Ejercicio0 {

        function main() {
            
            $nums = [5, 7, 3];

            for ($i=0; $i < count($nums); $i++) { 
                echo "<br>";
                echo "num" . ($i + 1) . ": " . $nums[$i];
            }
        
            $min = $this->getMinNumber($nums);
            echo "<br>";
            echo "El minimo es: " . $min;

            $max = $this->getMaxNumber($nums);
            echo "<br>";
            echo "El maximo es: " . $max;

            $average = $this->getAverage($nums);
            echo "<br>";
            echo "La media es: " . $average;

            foreach ($nums as $num) {
                $this->factorial($num);
            }
        }

        function getMinNumber($nums) {
            for ($i=0; $i < count($nums); $i++) { 
                if (0 == $i || $nums[$i] < $min) {
                    $min = $nums[$i];
                }
            }

            return $min;
        }

        function getMaxNumber($nums) {
            for ($i=0; $i < count($nums); $i++) {
                if (0 == $i || $nums[$i] > $max) {
                    $max = $nums[$i];
                }
            }

            return $max;
        }

        function getAverage ($nums) {
            $sum = 0;
            foreach ($nums as $num) {
                $sum += $num;
            }

            return $sum/count($nums);
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
