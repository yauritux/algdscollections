export default class NumberParser {
  parseInt(str: string): number {
    let sum = 0;

    let index = 0;
    for (let i = str.length - 1; i >= 0; i--) {
      sum += +str.charAt(index) * Math.pow(10, i);
      index++;
    }
    return sum;
  }
}
