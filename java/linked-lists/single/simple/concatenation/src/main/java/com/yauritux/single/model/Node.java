package com.yauritux.single.model;

/**
 * @author yauritux
 */
public final class Node {

   private String name;
   private Node next;

   public Node() {}

   public Node(final String name) {
      this.name = name;
   }

   public final String getName() {
      return name;
   }

   public final Node getNext() {
      return next;
   }

   public final void setNext(final Node next) {
      this.next = next;
   }

   @Override
   public String toString() {
      return name;
   }
}
