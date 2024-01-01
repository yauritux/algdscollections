import Staircase from "./Staircase";

test("print 5 stairs should get array with four elements", () => {
  const staircase = new Staircase();
  const result = staircase.printStairs(5);
  expect(result.length).toEqual(4);
});

test("print 5 stairs, first element should has 3 whitespaces and 1 asterisk", () => {
  const staircase = new Staircase();
  const result = staircase.printStairs(5);
  expect(result[0].length).toEqual(4);
  expect(result[0].charAt(0)).toEqual(" ");
  expect(result[0].charAt(1)).toEqual(" ");
  expect(result[0].charAt(2)).toEqual(" ");
  expect(result[0].charAt(3)).toEqual("*");
  expect(result[0]).toEqual("   *");
});

test("print 5 stairs, last element should all contains asterisk", () => {
  const staircase = new Staircase();
  const result = staircase.printStairs(5);
  expect(result[3]).toEqual("****");
});
