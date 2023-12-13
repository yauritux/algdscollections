export default class Node {
  private value: string;
  private next: Node | null;

  constructor(value: string) {
    this.value = value;
    this.next = null;
  }

  get val(): string {
    return this.value;
  }

  append(value: string): Node {
    this.next = new Node(value);
    return this.next;
  }

  insert(position: number, value: string): Node {
    console.log("inserting", value, "at position", position);
    let current: Node = this;
    if (position > this.length) {
      let current: Node = this;
      while (current.next) {
        current = current.next;
        if (!current.next) {
          current.next = new Node(value);
          break;
        }
      }
      return current;
    }
    if (position === 0) {
      let top = new Node(value);
      top.next = current;
      return top;
    }
    let i = 0;
    while (current.next) {
      if (i === position - 1) {
        let newNode = new Node(value);
        let currentActiveNode = current;
        newNode.next = current.next;
        currentActiveNode.next = newNode;
        break;
      }
      current = current.next;
      i++;
    }
    return this;
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
