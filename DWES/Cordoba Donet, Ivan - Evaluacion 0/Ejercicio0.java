import java.util.Scanner;
import java.lang.Integer;

public class Ejercicio0 {

    public static void main (String[] args) {
        int num1, num2, num3, min, max;
        float average;
        
        num1 = getNumber();
        num2 = getNumber();
        num3 = getNumber();
    
        min = getMinNumber(num1, num2, num3);
        System.out.println("El minimo es: " + min);

        max = getMaxNumber(num1, num2, num3);
        System.out.println("El maximo es: " + max);

        average = getAverage(num1, num2, num3);
        System.out.println("la media es: " + average);

        factorial(num1);
        factorial(num2);
        factorial(num3);
    }
    
    private static int getNumber() {
        Scanner sc = new Scanner(System.in);
        String num;
        System.out.println("Introduce un número");
        num = sc.nextLine();
        return Integer.parseInt(num);
    }

    private static int getMinNumber(int num1, int num2, int num3) {
        int aux;
        if (num1 <= num2 && num1 <= num3) {
            aux = num1;
        } else if (num2 <= num1 && num2 <= num3) {
            aux = num2;
        } else {
            aux = num3;
        }

        return aux;
    }

    private static int getMaxNumber(int num1, int num2, int num3) {
        int aux;
        if (num1 >= num2 && num1 >= num3) {
            aux = num1;
        } else if (num2 >= num1 && num2 >= num3) {
            aux = num2;
        } else {
            aux = num3;
        }

        return aux;
    }

    private static float getAverage (int num1, int num2, int num3) {
        int sum;
        sum = num1 + num2 + num3;
        return sum/3;
    }

    private static void factorial(int num) {
        if (num > 0) {
            int result = 1;
    
            for(int i = 1; i <= num; i++) {
                result *= i;
            }
    
            System.out.println("El factorial de " + num + " es: " + result);
        } else {
            System.out.println("No se puede calcular el factorial");
        }
    }

}