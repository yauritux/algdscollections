import Staircase from "./Staircase";

const stairsObj = new Staircase();
console.log("9 STAIRS:");
const nineStairs = stairsObj.printStairs(9); // printing out 9 stairs
console.log(nineStairs.join("\n"));
console.log();
console.log("15 STAIRS:");
const fiftenStairs = stairsObj.printStairs(15); // printing out 15 stairs
console.log(fiftenStairs.join("\n"));
