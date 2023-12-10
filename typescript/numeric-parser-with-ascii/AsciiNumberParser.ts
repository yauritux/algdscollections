export default class AsciiNumberParser {
  parse(text: string): number {
    let sum = 0;
    let index = 0;
    for (let i = text.length - 1; i >= 0; i--) {
      sum += (text.charCodeAt(i) - "0".charCodeAt(0)) * Math.pow(10, index);
      index++;
    }
    return sum;
  }
}
