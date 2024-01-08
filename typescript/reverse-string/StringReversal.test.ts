import {
  reverse_basicforloop,
  recursive_reverse,
  array_builtin_reverse,
  reverse_reduce,
} from "./StringReversal";

describe("Reverse with `reverse_basicforloop` function", () => {
  it("Reverse 'Yauri' returns 'iruaY'", () => {
    const str = "Yauri";
    expect(reverse_basicforloop(str)).toEqual("iruaY");
  });

  it("Reverse 'Hello, world!' returns '!dlrow ,olleH'", () => {
    const str = "Hello, world!";
    expect(reverse_basicforloop(str)).toEqual("!dlrow ,olleH");
  });
});

describe("Reverse with `recursive_reverse` function", () => {
  it("Reverse 'Yauri' returns 'iruaY'", () => {
    const str = "Yauri";
    expect(recursive_reverse(str)).toEqual("iruaY");
  });

  it("Reverse 'Greetings!' returns '!sgniteerG'", () => {
    const str = "Greetings!";
    expect(recursive_reverse(str)).toEqual("!sgniteerG");
  });

  it("Reverse 'Hello, world!' returns '!dlrow ,olleH'", () => {
    const str = "Hello, world!";
    expect(recursive_reverse(str)).toEqual("!dlrow ,olleH");
  });
});

describe("Reverse with `array_builtin_reverse` function", () => {
  it("Reverse 'Hello, world!' returns '!dlrow ,olleH'", () => {
    const str = "Hello, world!";
    expect(array_builtin_reverse(str)).toEqual("!dlrow ,olleH");
  });
});

describe("Reverse with `reverse_reduce` function", () => {
  it("Reverse 'Greetings!' returns '!sgniteerG'", () => {
    const str = "Greetings!";
    expect(reverse_reduce(str)).toEqual("!sgniteerG");
  });
});
