import AsciiNumberParser from "./AsciiNumberParser";

const math = new AsciiNumberParser();
const str1 = "1045";
console.log("original data1:", str1, " [", typeof str1, "]");
const num1 = math.parse(str1);
console.log("conversion result:", num1, " [", typeof num1, "]");
const str2 = "995701";
console.log("original data2:", str2, " [", typeof str2, "]");
const num2 = math.parse(str2);
console.log("conversion result:", num2, " [", typeof num2, "]");
