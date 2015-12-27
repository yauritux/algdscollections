package com.yauritux.single.insertion.demo;

import com.yauritux.single.model.Node;

/**
 * @author yauritux@gmail.com
 *
 */
public final class SingleLinkedListInsertion {	

	private static Node top;

	public static void main(String... args) {

		// Case 1 - No node exists yet.
		top = new Node("A");
		printNodes("Case 1");

		// Case 2 - Node already exists,
		// New node inserted at the first place 
		// (i.e. before the first node).
		Node newNode = new Node("B");
		newNode.setNext(top);
		top = newNode;
		printNodes("Case 2");

		// Case 3 - Node already exists,
		// New node inserted at the last 
		// (i.e. after the last node).
		newNode = new Node("C");

		/**
		 * Find the last node with linear search 
		 */
		Node lastNode = top; 
		while (lastNode.getNext() != null) {
			lastNode = lastNode.getNext();
		}
		// End of Linear Searching

		lastNode.setNext(newNode);
		printNodes("Case 3");

		// Case 4 - Node already exists,
		// New node inserted between two existing nodes.
		// e.g. between Node "B" and Node "C".
		newNode = new Node("D");

		/**
		 * Find Node "B" 
		 */
		Node destNode = top;
		while (!destNode.getName().equals("B")) {
			destNode = destNode.getNext();
		}
		// End of searching

		newNode.setNext(destNode.getNext());
		destNode.setNext(newNode);
		printNodes("Case 4");
	}

	static void printNodes(String message) {
		System.out.print(message + " ");
		Node currentNode = top;
		while (currentNode != null) {			
			System.out.print(currentNode.getName() + " ");
			currentNode = currentNode.getNext();
		}
		System.out.println();
	}
}
