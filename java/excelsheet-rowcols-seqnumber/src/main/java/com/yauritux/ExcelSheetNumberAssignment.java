package com.yauritux;

public class ExcelSheetNumberAssignment {

    static int parse(int row, String columnAlphabet) {
        int sum = 0;
        int exp = row - 1;
        for (int i = 0; i <= columnAlphabet.length() - 1; i++) {
            int asciiDigit = (int) columnAlphabet.charAt(i);
            sum += (asciiDigit - 64) * Math.pow(26, exp);
        }
        return sum + exp;
    }

    public static void main(String[] args) {
        System.out.println("A1 =" + parse(1, "A"));
        System.out.println("B1 =" + parse(1, "B"));
        System.out.println("C1 =" + parse(1, "C"));
        System.out.println("D1 =" + parse(1, "D"));
        System.out.println("E1 =" + parse(1, "E"));
        System.out.println("Z1 =" + parse(1, "Z"));
        System.out.println("A2 =" + parse(2, "A"));
        System.out.println("Z2 =" + parse(2, "Z"));
        System.out.println("A3 =" + parse(3, "A"));        
    }
}
