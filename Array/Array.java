
import java.util.Scanner;
import java.util.*;
// public class Array {
//     public static void main(String[] args) {
        // declare array
        // int marks[] = new int[5];
        // marks[0] = 97;
        // marks[1] = 98;
        // marks[2] = 99;
        // marks[3] = 95;
        // marks[4] = 90;

//         int [] marks = {90,67,55,22,44,67,48};
//         for (int i = 0; i < marks.length; i++) {
//             System.out.println(i+ 1 +" elm of marks : " + marks[i]);
//         }
//     }
// }

// !Take an array of names as input from the user and print them on the screen.
public  class Array{
    public static void main(String[] args) {
        String [] names = new String[5];
        Scanner obj = new Scanner(System.in);

        for (int i = 0; i < names.length; i++) {
            System.out.print("Enter your " +(i+1) +" name : ");
            names[i] = obj.nextLine();
        }
        System.out.println("");
        for (int i = 0; i < names.length; i++) {
            System.out.println("your " + (i+1) + " name is : " + names[i]);
        }
    }
}


