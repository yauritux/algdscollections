import Node from "./Node";

const node = new Node("1");
node.append("3").append("5").append("7");
console.log("Total Nodes=", node.length);
node.print();
