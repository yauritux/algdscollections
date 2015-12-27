package com.yauritux.single.deletion.demo;

import com.yauritux.single.model.Node;

/**
 * @author yauritux
 */
public final class SingleLinkedListDeletion {

    static Node top;
  
    public static void main(String... args) {
	top = new Node("A");
	top.setNext(new Node("B"));
	top.getNext().setNext(new Node("C"));
	top.getNext().getNext().setNext(new Node("D"));
	printNodes("Nodes: ");

	// Case 1 - Delete first node
	top = top.getNext();
	printNodes("Case 1: ");

	// Case 2 - Delete Node in between.
 	// e.g. : Deleting Node C
	Node currentNode = top;
	while (!currentNode.getNext().getName().equals("C")) {
	    currentNode = currentNode.getNext();
	}	
	currentNode.setNext(currentNode.getNext().getNext());
	printNodes("Case 2: ");

	// Case 3 - Delete last node.
	currentNode = top;
   	while (currentNode.getNext().getNext() != null) {
	    currentNode = currentNode.getNext();
	}
	currentNode.setNext(null);
	printNodes("Case 3: ");
    }

    static void printNodes(String message) {
        System.out.print(message + " ");
	Node currentNode = top;
        while (currentNode != null) {
	    System.out.print(currentNode + " ");
	    currentNode = currentNode.getNext();
	}
	System.out.println();
    }
}
