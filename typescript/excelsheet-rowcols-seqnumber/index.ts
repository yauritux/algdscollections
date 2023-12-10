import ExcelSheetNumberAssignment from "./ExcelSheetNumberAssignment";

const excelNumber = new ExcelSheetNumberAssignment();
console.log("A1 =", excelNumber.parse(1, "A"));
console.log("B1 =", excelNumber.parse(1, "B"));
console.log("C1 =", excelNumber.parse(1, "C"));
console.log("D1 =", excelNumber.parse(1, "D"));
console.log("E1 =", excelNumber.parse(1, "E"));
console.log("Z1 =", excelNumber.parse(1, "Z"));
console.log("A2 =", excelNumber.parse(2, "A"));
console.log("Z2 =", excelNumber.parse(2, "Z"));
console.log("A3 =", excelNumber.parse(3, "A"));
