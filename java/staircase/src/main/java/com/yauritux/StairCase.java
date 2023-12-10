package com.yauritux;

import java.util.Collections;

public class StairCase {

  public static void main(String... args) throws Exception {
    if (args.length < 1) {
      System.err.println("Usage: java StairCase <number of stairs>");
      System.err.println("e.g. : java StairCase 7");
      System.exit(-1);
    }
    int n = 0;
    try {
      n = Integer.parseInt(args[0]);
    } catch (NumberFormatException e) {
      System.err.println("Usage: java StairCase <number of stairs>");
      System.err.println("Invalid Parameter! <number of stairs> should be in numeric");
      System.err.println("java StairCase 7");
      System.exit(-1);
    }
    for (int i = 1; i <= n; i++) {
      System.out.print(String.join("", Collections.nCopies(n - i, " ")));
      System.out.println(String.join("", Collections.nCopies(i, "#")));
    }
  }
}
