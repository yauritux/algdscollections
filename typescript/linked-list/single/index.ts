import Node from "./Node";

let node = new Node("1");
node.append("3").append("5").append("7");
console.log("Total Nodes=", node.length);
node.print();
node.insert(5, "9");
node.print();
let newNode: Node = node.insert(0, "4");
if (newNode.val !== node.val) {
  node = newNode;
}
node.print();
node.insert(2, "8");
node.print();
