package com.yauritux;

public class AsciiNumberParser {

    static int parse(String text) {
        int sum = 0;
        int exp = text.length() - 1;
        for (int i = 0; i < text.length(); i++) {
            sum += (((int) text.charAt(i)) - ((int) '0')) * Math.pow(10, exp--);
        }
        return sum;
    } 

    public static void main(String... args) {
        if (args.length == 0) {
            System.err.println("Usage: java AsciiNumberParser [number to parse]");
            System.err.println("E.g.: java AsciiNumberParser 1045779");
            System.exit(1);
        }
        System.out.printf("Original Data: %s [%s]\n", args[0], args[0].getClass().getSimpleName());
        int result = parse(args[0]);
        System.out.printf("Conversion Result: %d [%s]\n", result, new Integer(result).getClass().getSimpleName());
    }
}