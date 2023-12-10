export default class ExcelSheetNumberAssignment {
  parse(row: number, column: string): number {
    let sum = 0;
    let index = row - 1;
    for (let i = column.length - 1; i >= 0; i--) {
      sum += (column.charCodeAt(i) - 64) * Math.pow(26, index);
    }
    return sum + index;
  }
}
