import NumberParser from "./NumberParser";

const math = new NumberParser();
const str1 = "1045";
console.log("original data1:", str1, " [", typeof str1, "]");
const num1 = math.parseInt(str1);
console.log("conversion result:", num1, " [", typeof num1, "]");
const str2 = "995701";
console.log("original data2:", str2, " [", typeof str2, "]");
const num2 = math.parseInt(str2);
console.log("conversion result:", num2, " [", typeof num2, "]");
