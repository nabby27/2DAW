import java.util.ArrayList;
import java.util.Scanner;
import java.lang.Integer;

public class Ejercicio0 {

    public static void main (String[] args) {
        ArrayList<Integer> nums = new ArrayList<Integer>();
        int min, max;
        float average;
        
        for (int i = 0; i < 3; i++) {
            int num = getNumber();
            nums.add(num);
        }
    
        min = getMinNumber(nums);
        System.out.println("El minimo es: " + min);

        max = getMaxNumber(nums);
        System.out.println("El maximo es: " + max);

        average = getAverage(nums);
        System.out.println("la media es: " + average);

        for (int num : nums) {
            factorial(num);
        }
    }
    
    private static int getNumber() {
        Scanner sc = new Scanner(System.in);
        String num;
        System.out.println("Introduce un número");
        num = sc.nextLine();
        return Integer.parseInt(num);
    }

    private static int getMinNumber(ArrayList<Integer> nums) {
        int min = 0;

        for (int i = 0; i < nums.size(); i++) {
            if (0 == i || nums.get(i) < min) {
                min = nums.get(i);
            }
        }

        return min;
    }

    private static int getMaxNumber(ArrayList<Integer> nums) {
        int max = 0;

        for (int i = 0; i < nums.size(); i++) {
            if (0 == i || nums.get(i) > max) {
                max = nums.get(i);
            }
        }

        return max;
    }

    private static float getAverage (ArrayList<Integer> nums) {
        int sum = 0;

        for (int num : nums) {
            sum += num;
        }

        return (float) sum/nums.size();
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