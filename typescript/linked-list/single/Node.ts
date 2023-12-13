export default class Node {
  private value: string;
  private next: Node | null;

  constructor(value: string) {
    this.value = value;
    this.next = null;
  }

  append(value: string): Node {
    this.next = new Node(value);
    return this.next;
  }

  get length(): number {
    let current: Node = this;
    let totalNodes = 1;
    while (current.next) {
      totalNodes++;
      current = current.next;
    }
    return totalNodes;
  }

  print(): void {
    let current: Node = this;
    let output = current.value;
    while (current.next) {
      output += " -> " + current.next.value;
      current = current.next;
    }
    console.log(output);
  }
}