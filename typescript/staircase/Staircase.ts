export default class Staircase {
  printStairs(n: number): string[] {
    let result = [];
    let numberOfSpaces = n - 1;
    let symbol = "*";
    for (let i = 0; i < n - 1; i++) {
      let stairs = "";
      for (let j = 0; j < numberOfSpaces - 1; j++) {
        stairs += " ";
      }
      stairs += symbol;
      result.push(stairs);
      symbol += "*";
      numberOfSpaces--;
    }
    return result;
  }
}
