import ExcelSheetNumberAssignment from "./ExcelSheetNumberAssignment";

const excelNumber = new ExcelSheetNumberAssignment();
console.log("A1 =", excelNumber.parse(1, "A"));
console.log("B1 =", excelNumber.parse(1, "B"));
console.log("C1 =", excelNumber.parse(1, "C"));
console.log("D1 =", excelNumber.parse(1, "D"));
console.log("E1 =", excelNumber.parse(1, "E"));
