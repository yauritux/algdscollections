export function array_builtin_reverse(v: string): string {
  return v.split("").reverse().join("");
}

export function reverse_basicforloop(v: string): string {
  let result = "";
  for (let i = v.length - 1; i >= 0; i--) {
    result += v.charAt(i);
  }
  return result;
}

export function recursive_reverse(v: string): string {
  let length = v.length;
  if (length === 0) {
    return "";
  }
  return v.charAt(length - 1) + recursive_reverse(v.substring(0, length - 1));
}

export function reverse_foreach(v: string): string {
  let reversed = "";
  for (const character of v) {
    reversed = character + reversed;
  }
  return reversed;
}

export function reverse_reduce(v: string): string {
  return v.split("").reduce((reversed, character) => character + reversed, "");
}
