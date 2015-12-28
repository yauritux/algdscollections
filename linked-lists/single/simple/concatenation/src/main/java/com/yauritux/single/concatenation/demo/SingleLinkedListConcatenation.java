package com.yauritux.single.concatenation.demo;

import com.yauritux.single.model.Node;

/**
 * @author yauritux
 */
public class SingleLinkedListConcatenation {

   static Node head;
   static Node tail;

   public static void main(String... args) {
      String[] firstNodeNames = { "A", "B", "C", "D", "E" };
      String[] secondNodeNames = { "F", "G", "H", "I", "J" };
      Node[] firstNodes = buildNodes(firstNodeNames);
      head = firstNodes.length != 0 ? firstNodes[0] : null;
      tail = firstNodes.length != 0 ? firstNodes[firstNodes.length - 1] : null;
      printNodes("First Nodes: "); 
      Node[] secondNodes = buildNodes(secondNodeNames);
      head = secondNodes.length != 0 ? secondNodes[0] : null;
      printNodes("Second Nodes: "); 
      Node[] concatenatedNodes = concat(firstNodes, secondNodes);
      head = concatenatedNodes.length != 0 ? concatenatedNodes[0] : null;
      printNodes("After Concatenated: "); 
   }

   static Node[] buildNodes(String[] nodeNames) {
      if (nodeNames.length == 0) return null;

      Node[] nodes = new Node[nodeNames.length];
	
      for (int i = 0; i < nodeNames.length; i++) {
	 if (i == 0) {
            nodes[0] = new Node(nodeNames[0]);
	    continue;
	 }
	 nodes[i] = new Node(nodeNames[i]);
	 nodes[i-1].setNext(nodes[i]); 
      }

      return nodes;
   }

   static Node[] concat(Node[] nodes1, Node[] nodes2) {
      if (nodes1.length == 0 && nodes2.length == 0) return new Node[0];
      if (nodes1.length == 0) return nodes2;
      if (nodes2.length == 0) return nodes1;
      nodes1[nodes1.length - 1].setNext(nodes2[0]);
      return nodes1;
   }

   static void printNodes(String msg) {
      System.out.print(msg + " ");
      Node currentNode = head;
      while (currentNode != null) {
         System.out.print(currentNode + " ");
	 currentNode = currentNode.getNext();
      }
      System.out.println();
   }
}
