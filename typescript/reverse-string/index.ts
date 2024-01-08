import {
  array_builtin_reverse,
  reverse_basicforloop,
  recursive_reverse,
  reverse_foreach,
  reverse_reduce,
} from "./StringReversal";

const str1 = "Yauri";
const str2 = "Algorithms";

console.log("Original string:", str1);
console.log("Reversed string:", reverse_basicforloop(str1));
console.log("Original string:", str2);
console.log("Reversed string:", reverse_basicforloop(str2));

console.log(
  "Reverse",
  str1,
  "using recursive function:",
  recursive_reverse(str1)
);
console.log(
  "Reverse",
  str2,
  "using recursive function:",
  recursive_reverse(str2)
);

console.log(
  "Reverse",
  str1,
  "using built-in array reverse function:",
  array_builtin_reverse(str1)
);
console.log(
  "Reverse",
  str2,
  "using built-in array reverse function:",
  array_builtin_reverse(str2)
);

console.log(
  "Reverse",
  str1,
  "using reverse with new es2015 loop syntax:",
  reverse_foreach(str1)
);

console.log(
  "Reverse",
  str2,
  "using reverse with new es2015 loop syntax:",
  reverse_foreach(str2)
);

console.log(
  "Reverse",
  str1,
  "using reverse reduce function:",
  reverse_reduce(str1)
);

console.log(
  "Reverse",
  str2,
  "using reverse reduce function:",
  reverse_reduce(str2)
);
