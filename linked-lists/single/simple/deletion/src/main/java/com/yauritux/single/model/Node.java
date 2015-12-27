package com.yauritux.single.model;

/**
 * @author yauritux
 */
public final class Node {

    private String name;
    private Node next;

    public Node() {}

    public Node(final String name ){
        this.name = name;
    }

    public String getName() {
	return name;
    }

    public void setName(final String name) {
	this.name = name;
    }

    public Node getNext() {
	return next;
    }

    public void setNext(Node next) {
	this.next = next;
    }

    @Override
    public String toString() {
	return name; 
    }
}
